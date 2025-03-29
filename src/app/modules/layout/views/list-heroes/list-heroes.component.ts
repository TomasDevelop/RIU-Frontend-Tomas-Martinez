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
import {MatIconModule} from '@angular/material/icon';
// Models
import { Heroes } from '@app/modules/layout/models/heroes.model';
// Services
import { HeroesService } from '@app/modules/layout/services/heroes.service';
// Components
import { DialogComponent } from '@app/modules/layout/components/dialog/dialog.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime } from 'rxjs';

const components = [
  MatCardModule,
  MatButtonModule,
  MatPaginatorModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
]
@Component({
  selector: 'app-list-heroes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ...components],
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
  public heroes = computed<Heroes[]>(() => this.#dataHeroes.filteredHeroes())
  public totalFiltered = computed(() => this.heroes().length);
  // Signals
  public displayedColumns = signal<string[]>(['position', 'name', 'weight', 'symbol']);
  public pageSize = signal<number>(4);
  public currentPage = signal<number>(0);
  // FormControl
  public searchControl = new FormControl<string>('');

  constructor(){
    this.searchControl.valueChanges
    .pipe(takeUntilDestroyed(this.#destroyRef), debounceTime(100))
    .subscribe((value) => {
      this.#dataHeroes.searchHeroes(value || '')
      this.currentPage.set(0);
    })
  }

  onPaginator(event: PageEvent) {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.onerror = null; // Para evitar bucles
    imgElement.src = 'assets/svg/heroes/image-broken.webp';
  }

  openDialogDelete(hero: Heroes) {
    const dialog = this.#dialog
      .open(DialogComponent, {
        width: '360px',
        data: hero
      })

    dialog.afterClosed()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(result => { if (result === true) this.#dataHeroes.deleteHero(hero.id) });
  }
}
