import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Heroes } from '@app/modules/layout/models/heroes.model';

@Component({
  selector: 'app-list-heroes',
  standalone: true,
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeroesComponent {
  public heroes = signal<Heroes[]>([])
}
