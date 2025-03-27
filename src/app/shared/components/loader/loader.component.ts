// Angular Imports
import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core'

@Component({
	standalone: true,
	selector: 'app-loader',
	imports: [],
	templateUrl: './loader.component.html',
	styleUrl: './loader.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
	readonly loading = input<boolean, string | boolean>(false, { transform: booleanAttribute })
	readonly background = input<boolean, string | boolean>(false, { transform: booleanAttribute })
	readonly radius = input<boolean, string | boolean>(false, { transform: booleanAttribute })
	readonly minHeight = input<string>('100dvh')
	readonly title = input<string>('Actualizando datos')
}
