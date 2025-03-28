// The Angular Imports
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// Material
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Heroes } from '../../models/heroes.model';
import { MatButton } from '@angular/material/button';

const components = [
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatButton
]
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [...components],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  public data = inject<Heroes>(MAT_DIALOG_DATA)
}
