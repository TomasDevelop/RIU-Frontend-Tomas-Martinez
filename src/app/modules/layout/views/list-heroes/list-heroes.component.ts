// The Angular imports
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
// Models
import { Heroes } from '@app/modules/layout/models/heroes.model';
// Services
import { HeroesService } from '@app/modules/layout/services/heroes.service';
// Components
import { DialogComponent } from '@app/modules/layout/components/dialog/dialog.component';

const components = [
  MatCardModule,
  MatButtonModule,
  MatPaginatorModule,
  MatChipsModule
]
@Component({
  selector: 'app-list-heroes',
  standalone: true,
  imports: [RouterLink, ...components],
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeroesComponent {
  #dataHeroes = inject(HeroesService)
  #dialog = inject(MatDialog);
  #destroyRef = inject(DestroyRef)

  // Computed signals
  public pagedHeroes = computed<Heroes[]>(() => {
    const startIndex = this.currentPage() * this.pageSize();
    return this.heroes().slice(startIndex, startIndex + this.pageSize());
  });
  public heroes = computed<Heroes[]>(() => this.#dataHeroes.dataAllHeroes())
  // Signals
  public displayedColumns = signal<string[]>(['position', 'name', 'weight', 'symbol']);
  public pageSize = signal<number>(4);
  public currentPage = signal<number>(1);

  openDialogDelete(hero: Heroes) {
    const dialog = this.#dialog
      .open(DialogComponent, {
        width: '360px',
        data: hero
      })

    dialog.afterClosed()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(result => { if (result === true) this.deleteHero(hero.id) });
  }

  deleteHero(heroId: number) {
    this.#dataHeroes.deleteHero(heroId)
  }

  onPageChange(event: PageEvent) {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.onerror = null; // Para evitar bucles
    imgElement.src = 'assets/svg/heroes/image-broken.webp';
  }
}
