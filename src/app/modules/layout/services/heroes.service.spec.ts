import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { GENDER, Heroes } from '../models/heroes.model';
import { WritableSignal } from '@angular/core';


describe('HeroesService', () => {
  let service: HeroesService;
  const mockHero: Heroes = {
    id: 100,
    name: 'test',
    gender: GENDER.M,
    slogan: 'test',
    skills: {
      intelligence: 70,
      strength: 80,
      speed: 75,
      durability: 85,
      power: 90,
      combat: 80,
    },
    image: 'test-image.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
  });

  describe('computed properties', () => {
    it('should maintain reactivity when data changes', () => {
      const initialCount = service.filteredHeroes().length;
      service.addHero(mockHero);
      expect(service.filteredHeroes().length).toBe(initialCount + 1);
    });

    it('should handle empty hero list', () => {
      (service as any).dataSignal.set([]);
      service.addHero(mockHero);
      expect(service.dataAllHeroes().length).toBe(1);
    });
  });

  describe('getHeroById', () => {
    it('should return hero by id', () => {
      const expectedHero = {
        id: 2,
        name: 'Wonder Woman',
        gender: GENDER.F,
        slogan: 'Strength is more than physical',
        skills: {
          intelligence: 88,
          strength: 90,
          speed: 80,
          durability: 95,
          power: 92,
          combat: 96,
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lynda_Carter_Wonder_Woman.JPG/800px-Lynda_Carter_Wonder_Woman.JPG',
      };

      const result = service.getHeroById(2);
      expect(result).toEqual(expectedHero);
    });

    it('should return undefined for non-existent id', () => {
      const result = service.getHeroById(999);
      expect(result).toBeUndefined();
    });
  })

  describe('updateHero', () => {
    it('should update existing hero details', () => {
      const heroToUpdate = { ...service.getHeroById(2)!, name: 'updated name' };

      service.updateHero(heroToUpdate);

      const updatedHero = service.getHeroById(2);
      expect(updatedHero?.name).toBe('updated name');
      expect(updatedHero?.slogan).toBe(heroToUpdate.slogan);
    });

    it('should not modify list when updating non-existent hero', () => {
      const initialHeroes = service.dataAllHeroes();
      const invalidHero = { ...mockHero, id: 999 };

      service.updateHero(invalidHero);

      expect(service.dataAllHeroes()).toEqual(initialHeroes);
    });
  });

  describe('deleteHero', () => {
    it('should remove hero by ID', () => {
      const initialHeroes = service.dataAllHeroes();

      service.deleteHero(0);

      expect(service.getHeroById(0)).toBeUndefined();
      expect(service.dataAllHeroes().length).toBe(initialHeroes.length - 1);
    });

    it('should not modify list when deleting non-existent ID', () => {
      const initialHeroes = service.dataAllHeroes();

      service.deleteHero(999);

      expect(service.dataAllHeroes()).toEqual(initialHeroes);
    });
  });

  describe('searchHeroes', () => {
    it('should filter heroes by search term', () => {
      service.searchHeroes('wONdEr');

      const filtered = service.filteredHeroes();
      expect(filtered.length).toBe(1);
      expect(filtered[0].name).toContain('Wonder');
    });

    it('should return all heroes when search term is empty', () => {
      service.searchHeroes('');

      expect(service.filteredHeroes().length).toBe(service.dataAllHeroes().length);
    });

    it('should update filtered list dynamically when adding heroes', () => {
      service.searchHeroes('test');
      const initialFiltered = service.filteredHeroes().length;

      service.addHero(mockHero);

      expect(service.filteredHeroes().length).toBe(initialFiltered + 1);
    });
  });
});
