import { fireEvent, render, screen, waitFor, within } from '@testing-library/angular';
import { HeroesService } from '../../services/heroes.service';
import { ListHeroesComponent } from './list-heroes.component';
import { HeroesDictionary } from '../../services/heroes.dictionary';
import { PageEvent } from '@angular/material/paginator';
import { fakeAsync, tick } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

describe('ListHeroesComponent', () => {
  let heroesServiceMock: jest.Mocked<HeroesService>

  beforeEach(async () => {
    heroesServiceMock = {
      deleteHero: jest.fn(),
      filteredHeroes: jest.fn(),
      pagedHeroes: jest.fn(),
      searchHeroes: jest.fn(),
    } as unknown as jest.Mocked<HeroesService>

    delete (window as any).location;
    window.location = { href: '' } as any;
  });

  describe('Get heroes', () => {
    it('should initialize with a computed signal providing heroes data', async () => {
      // given
      heroesServiceMock.filteredHeroes.mockReturnValueOnce(HeroesDictionary);

      // when (cuandos se inicia porque es una señal computada)
      await render(ListHeroesComponent, {
        providers: [
          { provide: HeroesService, useValue: heroesServiceMock }
        ]
      })

      //then
      expect(heroesServiceMock.filteredHeroes).toHaveBeenCalledWith()
    })
  })


  describe('Click actions on Card Heroes', () => {
    it('should render pagedHeroes and click Edit', fakeAsync(async () => {
      // given
      heroesServiceMock.filteredHeroes.mockReturnValue(HeroesDictionary);

      const { fixture } = await render(ListHeroesComponent, {
        providers: [{ provide: HeroesService, useValue: heroesServiceMock }],
      });
      const component = fixture.componentInstance;
      component.pageSize.set(4);
      component.currentPage.set(0);
      fixture.detectChanges();

      // when
      expect(component.pagedHeroes().length).toBe(4);

      const cards = await screen.findAllByTestId('hero-card');
      const firstCard = cards[1];
      const editButton = await within(firstCard).findByRole('button', { name: /edit/i });
      await fireEvent.click(editButton);
    }));

    it('should render pagedHeroes and click Delete', async () => {
      // given
      heroesServiceMock.filteredHeroes.mockReturnValue(HeroesDictionary);

      const { fixture } = await render(ListHeroesComponent, {
        providers: [{ provide: HeroesService, useValue: heroesServiceMock }]
      });
      const component = fixture.componentInstance;
      component.pageSize.set(4);
      component.currentPage.set(0);
      fixture.detectChanges();
      // when
      expect(component.pagedHeroes().length).toBe(4);
      const cards = await screen.findAllByTestId('hero-card');
      const firstCard = cards[1];
      const spy = jest.spyOn(component, 'openDialogDelete');
      // then
      const deleteButton = await within(firstCard).findByRole('button', { name: /delete/i });
      await fireEvent.click(deleteButton);

      expect(spy).toHaveBeenCalledWith(component.pagedHeroes()[1]);
    });


    it('should openModal and click confirm delete', async () => {
      // given
      heroesServiceMock.filteredHeroes.mockReturnValue(HeroesDictionary);
      const dialogRefMock = {
        afterClosed: jest.fn().mockReturnValue({
          pipe: jest.fn().mockReturnValue({
            subscribe: jest.fn(),
          }),
        }),
      };
      const dialogMock = {
        open: jest.fn().mockReturnValue(dialogRefMock),
      };

      const { fixture } = await render(ListHeroesComponent, {
        providers: [
          { provide: HeroesService, useValue: heroesServiceMock },
          { provide: MatDialog, useValue: dialogMock },
        ],
      });
      const component = fixture.componentInstance;
      component.pageSize.set(4);
      component.currentPage.set(0);
      fixture.detectChanges();

      // when
      expect(component.pagedHeroes().length).toBe(4);
      const cards = await screen.findAllByTestId('hero-card');
      const firstCard = cards[1];
      const spy = jest.spyOn(component, 'openDialogDelete');

      // then
      const deleteButton = await within(firstCard).findByRole('button', { name: /delete/i });
      await fireEvent.click(deleteButton);
      expect(spy).toHaveBeenCalledWith(component.pagedHeroes()[1]);
      const subscribeSpy = dialogRefMock.afterClosed().pipe().subscribe as jest.Mock;
      subscribeSpy.mock.calls[0][0](true);

      expect(heroesServiceMock.deleteHero).toHaveBeenCalledWith(component.pagedHeroes()[1].id);
    });
  });


  describe('Other functions', () => {
    it('Handle error image', async () => {
      // given
      const { fixture } = await render(ListHeroesComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      // when
      const imgElement = document.createElement('img') as HTMLImageElement
      imgElement.src = 'invalid-image.jpg';
      const errorEvent = { target: imgElement } as unknown as Event;
      component.handleImageError(errorEvent);
      // then
      expect(imgElement.src).toBe('http://localhost/assets/svg/heroes/image-broken.webp');
      expect(imgElement.onerror).toBeNull();
    });

    it('should update currentPage and pageSize on paginator event', async () => {
      // given
      const { fixture } = await render(ListHeroesComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      // when
      const pageEvent: PageEvent = {
        pageIndex: 2,
        pageSize: 10,
        length: 20,
        previousPageIndex: 1,
      };
      component.onPaginator(pageEvent);
      // then
      expect(component.currentPage()).toBe(2);
      expect(component.pageSize()).toBe(10);
    });

    it('should subscribe to searchControl.valueChanges and call searchHeroes', fakeAsync(async () => {
      heroesServiceMock.filteredHeroes.mockReturnValue(HeroesDictionary);
      const { fixture } = await render(ListHeroesComponent, {
        providers: [{ provide: HeroesService, useValue: heroesServiceMock }],
      });
      fixture.detectChanges();
      fixture.componentInstance.searchControl.setValue('test');
      expect(heroesServiceMock.searchHeroes).toHaveBeenCalledWith('test');
      expect(fixture.componentInstance.currentPage()).toBe(0);
    }));
  });
});

