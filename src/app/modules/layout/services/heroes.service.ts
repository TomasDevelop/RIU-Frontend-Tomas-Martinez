// The Angular Imports
import { computed, Injectable, signal } from '@angular/core';
// Models
import { Heroes } from '@app/modules/layout/models/heroes.model';
import { DEFAULT_HERO, HeroesDictionary } from './heroes.dictionary';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private dataSignal = signal<Heroes[]>(HeroesDictionary);
  public dataAllHeroes = this.dataSignal.asReadonly();

  getHeroById(heroId: number): Heroes {
    const heroById = this.dataAllHeroes().find(hero => heroId == Number(hero.id))
    return heroById ?? DEFAULT_HERO
  }

  addHero(hero: Omit<Heroes, 'id'>): void {
    this.dataSignal.update(currentHeroes => {
      const lastId = currentHeroes.length > 0 ? Math.max(...currentHeroes.map(h => h.id)) : 0;
      return [{ ...hero, id: lastId + 1 }, ...currentHeroes];
    });
  }

  updateHero(updatedHero: Heroes): void {
    this.dataSignal.update(currentHeroes => {
      const index = currentHeroes.findIndex(hero => hero.id === updatedHero.id);
      if (index === -1) return currentHeroes
      let updated = [...currentHeroes];
      updated[index] = updatedHero;
      return updated;
    });
  }

   deleteHero(heroId: number): void {
    this.dataSignal.update(currentHeroes =>
      currentHeroes.filter(hero => hero.id !== heroId)
    );
  }

  private searchTerm = signal<string>('');

  public filteredHeroes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.dataAllHeroes().filter(hero =>
      hero.name.toLowerCase().includes(term)
    );
  });

  public searchHeroes(term: string): void {
    this.searchTerm.set(term.trim());
  }

}
