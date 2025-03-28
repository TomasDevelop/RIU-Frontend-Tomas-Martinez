import { GENDER, Heroes } from "../models/heroes.model"

export const HeroesDictionary: Heroes[] = [
    {
      id: 1 ,
      name: 'Spiderman',
      gender: GENDER.M,
      slogan: 'With great power comes great responsibility',
      skills: { intelligence: 85, strength: 55, speed: 67, durability: 70, power: 74, combat: 85 },
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
    },
    {
      id: 2,
      name: 'Superman',
      gender: GENDER.M,
      slogan: 'Truth, justice and a better tomorrow',
      skills: { intelligence: 90, strength: 100, speed: 100, durability: 100, power: 100, combat: 85 },
     image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'
    },
    {
      id: 3,
      name: 'Wonder Woman',
      gender: GENDER.F,
      slogan: 'Strength is more than physical',
      skills: { intelligence: 88, strength: 90, speed: 80, durability: 95, power: 92, combat: 96 },
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Wonder_Woman_%28DC_Rebirth%29.jpg'
    },
    {
      id: 4,
      name: 'Batman',
      gender: GENDER.M,
      slogan: 'I am vengeance',
      skills: { intelligence: 100, strength: 18, speed: 27, durability: 45, power: 47, combat: 100 },
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg'
    },
    {
      id: 5,
      name: 'Iron Man',
      gender: GENDER.M,
      slogan: 'Genius, billionaire, playboy, philanthropist',
      skills: { intelligence: 100, strength: 85, speed: 60, durability: 90, power: 95, combat: 75 },
     image: 'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png'
    },
    {
      id: 6,
      name: 'Captain America',
      gender: GENDER.M,
      slogan: 'I can do this all day',
      skills: { intelligence: 70, strength: 25, speed: 38, durability: 60, power: 45, combat: 95 },
      image: 'https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg'
    },
    {
      id: 7,
      name: 'Thor',
      gender: GENDER.M,
      slogan: 'Whosoever holds this hammer, if he be worthy...',
      skills: { intelligence: 70, strength: 100, speed: 85, durability: 95, power: 100, combat: 90 },
       image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Thor_%28Marvel_Comics%29.png'
    },
    {
      id: 8,
      name: 'Hulk',
      gender: GENDER.M,
      slogan: 'Hulk smash!',
      skills: { intelligence: 40, strength: 100, speed: 67, durability: 100, power: 85, combat: 85 },
      image: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29_%28cropped%29.jpg'
    },
    {
      id: 9,
      name: 'Black Widow',
      gender: GENDER.F,
      slogan: 'I\'m always picking up after you boys',
      skills: { intelligence: 85, strength: 13, speed: 27, durability: 35, power: 25, combat: 95 },
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Black_Widow_%28Marvel_Comics%29.png'
    },
    {
      id: 10,
      name: 'Wolverine',
      gender: GENDER.M,
      slogan: 'I\'m the best there is at what I do',
      skills: { intelligence: 65, strength: 45, speed: 50, durability: 100, power: 40, combat: 100 },
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Marvelwolverine.jpg'
    },
    {
      id: 11,
      name: 'The Flash',
      gender: GENDER.M,
      slogan: 'My name is Barry Allen...',
      skills: { intelligence: 75, strength: 10, speed: 100, durability: 60, power: 70, combat: 65 },
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/The_Flash_-_Barry_Allen.png'
    },
    {
      id: 12,
      name: 'Aquaman',
      gender: GENDER.M,
      slogan: 'The king of the seven seas',
      skills: { intelligence: 65, strength: 85, speed: 75, durability: 80, power: 75, combat: 80 },
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_%28DC_Rebirth%29.jpg'
    },
    {
      id: 13,
      name: 'Black Panther',
      gender: GENDER.M,
      slogan: 'Wakanda Forever!',
      skills: { intelligence: 95, strength: 20, speed: 40, durability: 60, power: 50, combat: 100 },
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_%28Marvel_Comics%29.png'
    },
    {
      id: 14,
      name: 'Doctor Strange',
      gender: GENDER.M,
      slogan: 'By the Hoary Hosts of Hoggoth!',
      skills: { intelligence: 100, strength: 10, speed: 30, durability: 60, power: 100, combat: 75 },
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg'
    },
    {
      id: 15,
      name: 'Captain Marvel',
      gender: GENDER.F,
      slogan: 'Higher, further, faster, baby',
      skills: { intelligence: 70, strength: 95, speed: 90, durability: 95, power: 100, combat: 80 },
       image: 'https://upload.wikimedia.org/wikipedia/en/8/88/Captain_Marvel_%28Marvel_Comics%29.png'
    },
    {
      id: 16,
      name: 'Green Lantern',
      gender: GENDER.M,
      slogan: 'In brightest day, in blackest night...',
      skills: { intelligence: 75, strength: 80, speed: 70, durability: 85, power: 100, combat: 65 },
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Green_Lantern_%28Hal_Jordan%29.png'
    },
    {
      id: 17,
      name: 'Deadpool',
      gender: GENDER.M,
      slogan: 'Maximum effort!',
      skills: { intelligence: 70, strength: 35, speed: 42, durability: 100, power: 65, combat: 95 },
      image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016%29.png'
    },
    {
      id: 18,
      name: 'Storm',
      gender: GENDER.F,
      slogan: 'I am the weather itself',
      skills: { intelligence: 80, strength: 15, speed: 50, durability: 60, power: 100, combat: 75 },
      image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Storm_%28Marvel_Comics%29.png'
    },
    {
      id: 19,
      name: 'Thanos',
      gender: GENDER.M,
      slogan: 'I am inevitable',
      skills: { intelligence: 95, strength: 100, speed: 45, durability: 100, power: 100, combat: 90 },
      image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Thanos_Infinity_4.png'
    },
    {
      id: 20,
      name: 'Harley Quinn',
      gender: GENDER.F,
      slogan: 'Welcome to the madhouse!',
      skills: { intelligence: 80, strength: 15, speed: 30, durability: 40, power: 25, combat: 75 },
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Harley_Quinn_%28DC_Comics_character%29.png'
    }

]
