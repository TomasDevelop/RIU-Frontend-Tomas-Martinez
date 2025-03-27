import { FormControl } from '@angular/forms'
import { GENDER, Heroes } from './heroes.model'

export interface EditOrAddHero {
  name: FormControl<string>
  gender: FormControl<GENDER>
  slogan: FormControl<string>
  strong: FormControl<number>
  photo: FormControl<string>
}

export type HeroId = Pick<Heroes, 'id'>;
