// The Angular Imports
import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
// Material
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
// Models
import { EditOrAddHero, EditOrAddSkills } from '@app/modules/layout/models/edit-or-add-hero.model';
import { GENDER, Heroes } from '@app/modules/layout/models/heroes.model';
// Services
import { HeroesService } from '@app/modules/layout/services/heroes.service';
// Components
import { LoaderComponent } from '@app/shared/components/loader/loader.component';

const components = [
  LoaderComponent,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButton,
  RouterLink
]

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [KeyValuePipe, TitleCasePipe, ReactiveFormsModule, ...components],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class EditHeroComponent implements OnInit {
  #fb = inject(NonNullableFormBuilder)
  #hero = inject(HeroesService)
  id = input.required<number>()

  readonly heroById = computed<Heroes | undefined>(() => {
    return this.#hero.getHeroById(this.id())
  })
  getSkillControl(key: string): FormControl<number> {
    return this.form.controls.skills.get(key) as FormControl<number>;
  }

  readonly skillValidators = [
    Validators.required,
    Validators.min(0),
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

  ngOnInit(): void {
    this.form.setValue({
      name: this.heroById()!.name,
      slogan: this.heroById()!.slogan,
      skills: this.heroById()!.skills,
      gender: this.heroById()!.gender,
      image: this.heroById()!.image,
    })
  }

  onSubmit(formulary: FormGroup<EditOrAddHero>): void {
    if (formulary.invalid) return this.form.markAllAsTouched();

    const UPDATE_PAYLOAD: Heroes = {
      id: Number(this.id()),
      name: formulary.controls.name.value ?? this.heroById()!.name,
      gender: formulary.controls.gender.value ?? this.heroById()!.gender,
      slogan: formulary.controls.slogan.value ?? this.heroById()!.slogan,
      skills: {
        intelligence: formulary.controls.skills.controls.intelligence.value ?? this.heroById()!.skills.intelligence,
        strength: formulary.controls.skills.controls.strength.value ?? this.heroById()!.skills.strength,
        speed: formulary.controls.skills.controls.speed.value ?? this.heroById()!.skills.speed,
        durability: formulary.controls.skills.controls.durability.value ?? this.heroById()!.skills.durability,
        power: formulary.controls.skills.controls.power.value ?? this.heroById()!.skills.power,
        combat: formulary.controls.skills.controls.combat.value ?? this.heroById()!.skills.combat
      },
      image: formulary.controls.image.value ?? this.heroById()!.image,
    }

    this.#hero.updateHero(UPDATE_PAYLOAD)
  }
}
