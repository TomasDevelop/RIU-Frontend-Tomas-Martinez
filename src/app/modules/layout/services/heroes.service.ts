// The Angular Imports
import { Injectable, signal } from '@angular/core';
// Models
import { Heroes } from '@app/modules/layout/models/heroes.model';
import { HeroesDictionary } from './heroes.dictionary';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private dataSignal = signal<Heroes[]>(HeroesDictionary);
  public dataAllHeroes = this.dataSignal.asReadonly();

  getHeroById(heroId: number): Heroes | undefined {
    return this.dataAllHeroes().find(hero => heroId == hero.id)
  }

  addHero(hero: Omit<Heroes, 'id'>): void {
    this.dataSignal.update(currentHeroes => {
      const lastId = currentHeroes.length > 0 ? Math.max(...currentHeroes.map(h => h.id)) : 0;

      return [{ ...hero, id: lastId + 1 }, ...currentHeroes];
    });
  }

  updateHero(updatedHero: Heroes): void {
    console.log(updatedHero)
    this.dataSignal.update(currentHeroes => {
      const index = currentHeroes.findIndex(hero => hero.id === updatedHero.id);
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

}
