// The Angular Imports
import { provideRouter, Router } from "@angular/router";
import { provideLocationMocks } from "@angular/common/testing";
import { of } from "rxjs";
// Testing Library
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
// Models
import { HeroesDictionary } from "../../services/heroes.dictionary";
import { GENDER, Heroes } from "../../models/heroes.model";
// Services
import { HeroesService } from "../../services/heroes.service";
import { LoaderService } from '../../../../shared/services/loader/loader.service';
// Components
import { EditHeroComponent } from "./edit-hero.component";
import { fakeAsync, tick, waitForAsync } from "@angular/core/testing";
import { ROUTES } from '../../../../shared/utils/routes.const';
import { ListHeroesComponent } from "../list-heroes/list-heroes.component";

describe('EditHeroesComponent', () => {
  let heroesServiceMock: jest.Mocked<HeroesService>;
  let loaderServiceMock: jest.Mocked<LoaderService>
  const currentHero: Heroes = HeroesDictionary[0];

  beforeEach(() => {
    heroesServiceMock = {
      updateHero: jest.fn(),
      getHeroById: jest.fn().mockReturnValue(of(currentHero)),
    } as unknown as jest.Mocked<HeroesService>;
    loaderServiceMock = {
      isLoading: jest.fn(),
      show: jest.fn().mockReturnValue(of(true)),
      hide: jest.fn().mockReturnValue(of(false)),
    } as unknown as jest.Mocked<LoaderService>;
  });

  it('should form is invalid', async () => {
    // given
    heroesServiceMock.getHeroById
    const { fixture } = await render(EditHeroComponent, {
      inputs: { id: currentHero.id },
      providers: [
        { provide: HeroesService, useValue: heroesServiceMock },
      ],
    });
    // when
    await fixture.whenStable();
    fixture.detectChanges();
    fixture.componentInstance.form.controls.name.setValue('');
    const markAllAsTouchedSpy = jest.spyOn(fixture.componentInstance.form, 'markAllAsTouched');
    await userEvent.click(screen.getByRole('button', { name: /update hero/i }));
    // then
    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });

  it('should execute return when form is valid', waitForAsync(fakeAsync(async () => {
    // given
    const { fixture } = await render(EditHeroComponent, {
      inputs: { id: currentHero.id },
      providers: [
        { provide: HeroesService, useValue: heroesServiceMock },
        { provide: LoaderService, useValue: loaderServiceMock },
        provideRouter([
          { path: 'list', component: ListHeroesComponent }
        ]),
        provideLocationMocks(),
      ],
    });

    await fixture.whenStable();
    fixture.detectChanges();

    // Asegurar que el formulario sea válido
    fixture.componentInstance.form.controls.name.setValue('Valid Name');
    fixture.componentInstance.form.controls.slogan.setValue('Valid Slogan');

    fixture.componentInstance.onSubmit(fixture.componentInstance.form);
    await userEvent.click(screen.getByRole('button', { name: /update hero/i }));

    const router = fixture.debugElement.injector.get(Router);

    expect(loaderServiceMock.show).toHaveBeenCalled()
    tick(400)
    expect(loaderServiceMock.hide).toHaveBeenCalled();
    expect(router.url).toBe([ROUTES.list]);
  })));

  it('should update hero and navigate to "/list"', waitForAsync(fakeAsync(async () => {
    // given
    loaderServiceMock.isLoading.mockReturnValue(false)
    const { fixture } = await render(EditHeroComponent, {
      inputs: { id: currentHero.id },
      providers: [
        { provide: HeroesService, useValue: heroesServiceMock },
        { provide: LoaderService, useValue: loaderServiceMock },
        provideRouter([
          { path: 'list', component: ListHeroesComponent }
        ]),
        provideLocationMocks(),
      ]
    });
    // when
    await fixture.whenStable();
    fixture.detectChanges();
    // when
    await userEvent.clear(screen.getByTestId('hero-image'));

    await userEvent.clear(screen.getByTestId('hero-name'));
    await userEvent.type(screen.getByTestId('hero-name'), 'Spiderman');

    await userEvent.clear(screen.getByTestId('hero-slogan'));
    await userEvent.type(
      screen.getByTestId('hero-slogan'),
      'With{ }GREAT{ }POWER'
    );

    const genderSelect = screen.getByTestId('hero-gender');
    await userEvent.click(genderSelect);

    const options = await screen.findAllByRole('option');
    const optionToSelect = options.find(option =>
      option.textContent?.includes(GENDER.M)
    )!;

    await userEvent.click(optionToSelect);

    await userEvent.type(screen.getByTestId('hero-gender'), GENDER.M);
    await userEvent.type(screen.getByTestId('hero-skills-intelligence'), '{8}{5}');
    await userEvent.type(screen.getByTestId('hero-skills-strength'), '{5}{5}');
    await userEvent.type(screen.getByTestId('hero-skills-speed'), '{6}{7}');
    await userEvent.type(screen.getByTestId('hero-skills-durability'), '{7}{0}');
    await userEvent.type(screen.getByTestId('hero-skills-power'), '{7}{4}');
    await userEvent.type(screen.getByTestId('hero-skills-combat'), '{8}{5}');

    expect(fixture.componentInstance.form.valid).toBe(true);

    fixture.componentInstance.onSubmit(fixture.componentInstance.form);
    await userEvent.click(screen.getByRole('button', { name: /update hero/i }));

    // then
    expect(heroesServiceMock.updateHero).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 0,
        name: 'SPIDERMAN',
        slogan: 'With GREAT POWER',
        skills: {
          intelligence: 85,
          strength: 55,
          speed: 67,
          durability: 70,
          power: 74,
          combat: 85
        },
        gender: GENDER.M,
        image: ''
      })
    );

    // then
    const router = fixture.debugElement.injector.get(Router);
    expect(loaderServiceMock.show).toHaveBeenCalled()
    tick(400)
    expect(loaderServiceMock.hide).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([ROUTES.list]);
    // then
  })));
});
