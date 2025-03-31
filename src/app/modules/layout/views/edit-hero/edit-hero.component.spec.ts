import { provideRouter, Router } from "@angular/router";
import { provideLocationMocks } from "@angular/common/testing";
import { of } from "rxjs";
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { HeroesDictionary } from "../../services/heroes.dictionary";
import { HeroesService } from "../../services/heroes.service";
import { GENDER, Heroes } from "../../models/heroes.model";
import { EditHeroComponent } from "./edit-hero.component";

class MockEditComponent { }

describe('EditHeroesComponent', () => {
  let heroesServiceMock: jest.Mocked<HeroesService>;
  const currentHero: Heroes = HeroesDictionary[0];

  beforeEach(() => {
    heroesServiceMock = {
      updateHero: jest.fn(),
      getHeroById: jest.fn().mockReturnValue(of(currentHero)),
    } as unknown as jest.Mocked<HeroesService>;
  });

  it('should update hero and navigate to "/list"', async () => {
    // given
    const { fixture } = await render(EditHeroComponent, {
      inputs: { id: currentHero.id },
      providers: [{ provide: HeroesService, useValue: heroesServiceMock },
      provideRouter([
        { path: 'list', component: MockEditComponent }
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
    expect(router.url).toBe('/list');
  });
});
