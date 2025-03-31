// The Angular Imports
import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
// Models
import { EditOrAddHero, EditOrAddSkills } from '../../../../modules/layout/models/edit-or-add-hero.model';
import { GENDER, Heroes } from '../../../../modules/layout/models/heroes.model';
// Services
import { HeroesService } from '../../../../modules/layout/services/heroes.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
// Utils
import { ROUTES, UppercaseDirective } from '../../../../shared/utils';

const components = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButton,
  RouterLink,
  UppercaseDirective
]

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [KeyValuePipe, TitleCasePipe, ReactiveFormsModule, ...components],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHeroComponent {
  #fb = inject(NonNullableFormBuilder)
  #hero = inject(HeroesService)
  #loader = inject(LoaderService)
  #router = inject(Router)
  id = input.required<number>()

  readonly heroById = computed<Heroes | undefined>(() => {
    return this.#hero.getHeroById(this.id())
  })
  getSkillControl(key: string): FormControl<number> {
    return this.form.controls.skills.get(key) as FormControl<number>;
  }

  readonly skillValidators = [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
    Validators.pattern(/^\d+$/)
  ];

  form: FormGroup<EditOrAddHero> = this.#fb.group<EditOrAddHero>({
    name: this.#fb.control('', {
      validators: [Validators.required],
    }),
    gender: this.#fb.control(GENDER.O, {
      validators: [Validators.required],
    }),
    slogan: this.#fb.control('', {
      validators: [Validators.required],
    }),
    skills: this.#fb.group<EditOrAddSkills>({
      intelligence: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
      strength: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
      speed: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
      durability: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
      power: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
      combat: this.#fb.control(0, {
        validators: this.skillValidators,
      }),
    }),
    image: this.#fb.control(''),
  })

  onSubmit(formulary: FormGroup<EditOrAddHero>): void {
    if (formulary.invalid) return this.form.markAllAsTouched();

    const UPDATE_PAYLOAD: Omit<Heroes, 'id'> = {
      name: formulary.controls.name.value ?? '',
      gender: formulary.controls.gender.value ?? '',
      slogan: formulary.controls.slogan.value ?? '',
      skills: {
        intelligence: formulary.controls.skills.controls.intelligence.value ?? 0,
        strength: formulary.controls.skills.controls.strength.value ?? 0,
        speed: formulary.controls.skills.controls.speed.value ?? 0,
        durability: formulary.controls.skills.controls.durability.value ?? 0,
        power: formulary.controls.skills.controls.power.value ?? 0,
        combat: formulary.controls.skills.controls.combat.value ?? 0
      },
      image: formulary.controls.image.value ?? '',
    }

    this.#hero.addHero(UPDATE_PAYLOAD)
    setTimeout(() => {
      this.#loader.hide()
      this.#router.navigate([ROUTES.list])
    }, 400)
    return
    }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.onerror = null; // Para evitar bucles
    imgElement.src = 'assets/svg/heroes/image-broken.webp';
  }

}
