// The Angular imports
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
// Models
import { Heroes } from '@app/modules/layout/models/heroes.model';
// Services
import { HeroesService } from '@app/modules/layout/services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  standalone: true,
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeroesComponent {
  #dataHeroes = inject(HeroesService)
  public heroes = computed<Heroes[]>(() => this.#dataHeroes.dataAllHeroes())
}
