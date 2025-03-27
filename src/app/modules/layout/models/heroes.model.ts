export enum GENDER {
  M = 'Masculino',
  F = 'Femenino',
  O = 'Otro'
}

export interface Heroes {
  id: string
  name: string
  gender: GENDER
  slogan: string
  strong: number
  photo: string
}
