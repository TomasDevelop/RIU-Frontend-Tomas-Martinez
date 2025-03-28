import { FormControl, FormGroup } from '@angular/forms'
import { GENDER, Skills } from './heroes.model'

export interface EditOrAddHero {
  name: FormControl<string>
  gender: FormControl<GENDER>
  slogan: FormControl<string>
  skills: FormGroup<EditOrAddSkills>
  image: FormControl<string>
}

export interface EditOrAddSkills{
  intelligence: FormControl<number>,
  strength: FormControl<number>,
  speed: FormControl<number>,
  durability: FormControl<number>,
  power: FormControl<number>,
  combat: FormControl<number>
}
