export enum GENDER {
  M = 'Masculino',
  F = 'Femenino',
  O = 'Otro'
}

export interface Heroes {
  id: number
  name: string
  gender: GENDER
  slogan: string
  skills: Skills
  image: string
}

export interface Skills {
  intelligence: number,
  strength: number,
  speed: number,
  durability: number,
  power: number,
  combat: number
}
