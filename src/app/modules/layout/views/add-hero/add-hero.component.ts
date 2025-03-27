import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHeroComponent {

}
