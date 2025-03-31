// Angular Imports
import { ChangeDetectionStrategy, Component, booleanAttribute, computed, inject, input } from '@angular/core'
// Services
import { LoaderService } from '../../services/loader/loader.service';

@Component({
	standalone: true,
	selector: 'app-loader',
	imports: [],
	templateUrl: './loader.component.html',
	styleUrl: './loader.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  #loaderService = inject(LoaderService);

  readonly loading = computed<boolean>(() => this.#loaderService.isLoading())
	readonly background = input<boolean, string | boolean>(false, { transform: booleanAttribute })
	readonly radius = input<boolean, string | boolean>(false, { transform: booleanAttribute })
	readonly minHeight = input<string>('100dvh')
	readonly title = input<string>('Actualizando datos')
}
