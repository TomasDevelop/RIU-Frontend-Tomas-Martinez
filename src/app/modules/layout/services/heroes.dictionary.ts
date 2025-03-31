import { GENDER, Heroes } from "../models/heroes.model"

export const HeroesDictionary: Heroes[] = [
    {
      id: 0 ,
      name: 'Spiderman',
      gender: GENDER.M,
      slogan: 'With great power comes great responsibility',
      skills: { intelligence: 85, strength: 55, speed: 67, durability: 70, power: 74, combat: 85 },
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
    },
    {
      id: 1,
      name: 'Superman',
      gender: GENDER.M,
      slogan: 'Truth, justice and a better tomorrow',
      skills: { intelligence: 90, strength: 100, speed: 100, durability: 100, power: 100, combat: 85 },
     image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'
    },
    {
      id: 2,
      name: 'Wonder Woman',
      gender: GENDER.F,
      slogan: 'Strength is more than physical',
      skills: { intelligence: 88, strength: 90, speed: 80, durability: 95, power: 92, combat: 96 },
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Lynda_Carter_Wonder_Woman.JPG/800px-Lynda_Carter_Wonder_Woman.JPG'
    },
    {
      id: 3,
      name: 'Batman',
      gender: GENDER.M,
      slogan: 'I am vengeance',
      skills: { intelligence: 100, strength: 18, speed: 27, durability: 45, power: 47, combat: 100 },
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg'
    },
    {
      id: 4,
      name: 'Iron Man',
      gender: GENDER.M,
      slogan: 'Genius, billionaire, playboy, philanthropist',
      skills: { intelligence: 100, strength: 85, speed: 60, durability: 90, power: 95, combat: 75 },
     image: 'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png'
    },
    {
      id: 5,
      name: 'Captain America',
      gender: GENDER.M,
      slogan: 'I can do this all day',
      skills: { intelligence: 70, strength: 25, speed: 38, durability: 60, power: 45, combat: 95 },
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/220px-CaptainAmericaHughes.jpg'
    },
    {
      id: 6,
      name: 'Thor',
      gender: GENDER.M,
      slogan: 'Whosoever holds this hammer, if he be worthy...',
      skills: { intelligence: 70, strength: 100, speed: 85, durability: 95, power: 100, combat: 90 },
       image: 'https://i.pinimg.com/474x/13/19/e7/1319e7922faffbfa43034a816126b97d.jpg'
    },
    {
      id: 7,
      name: 'Hulk',
      gender: GENDER.M,
      slogan: 'Hulk smash!',
      skills: { intelligence: 40, strength: 100, speed: 67, durability: 100, power: 85, combat: 85 },
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hulk_%282540708438%29.jpg/320px-Hulk_%282540708438%29.jpg'
    },
    {
      id: 8,
      name: 'Black Widow',
      gender: GENDER.F,
      slogan: 'I\'m always picking up after you boys',
      skills: { intelligence: 85, strength: 13, speed: 27, durability: 35, power: 25, combat: 95 },
      image: 'https://www.sol915.com.ar/wp-content/uploads/2021/07/black-widow-2.jpeg'
    },
    {
      id: 9,
      name: 'Wolverine',
      gender: GENDER.M,
      slogan: 'I\'m the best there is at what I do',
      skills: { intelligence: 65, strength: 45, speed: 50, durability: 100, power: 40, combat: 100 },
      image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/f3/ec/f3ec9575a4c84e106b81edc2e8eea199.jpg'
    },
    {
      id: 10,
      name: 'The Flash',
      gender: GENDER.M,
      slogan: 'My name is Barry Allen...',
      skills: { intelligence: 75, strength: 10, speed: 100, durability: 60, power: 70, combat: 65 },
      image: 'https://cdn.britannica.com/39/182839-050-A2522133/Grant-Gustin-The-Flash-title-character.jpg'
    },
    {
      id: 11,
      name: 'Aquaman',
      gender: GENDER.M,
      slogan: 'The king of the seven seas',
      skills: { intelligence: 65, strength: 85, speed: 75, durability: 80, power: 75, combat: 80 },
      image: 'https://preview.redd.it/iu9bf6aqbbta1.jpg?width=640&crop=smart&auto=webp&s=711b202d971860bb4873ffab124b6235cf3f6314'
    },
    {
      id: 12,
      name: 'Black Panther',
      gender: GENDER.M,
      slogan: 'Wakanda Forever!',
      skills: { intelligence: 95, strength: 20, speed: 40, durability: 60, power: 50, combat: 100 },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z--LUvwQpk8EOQr2mZ2kyXghBGb6bltS3w&s'
    },
    {
      id: 13,
      name: 'Doctor Strange',
      gender: GENDER.M,
      slogan: 'By the Hoary Hosts of Hoggoth!',
      skills: { intelligence: 100, strength: 10, speed: 30, durability: 60, power: 100, combat: 75 },
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg'
    },
    {
      id: 14,
      name: 'Captain Marvel',
      gender: GENDER.F,
      slogan: 'Higher, further, faster, baby',
      skills: { intelligence: 70, strength: 95, speed: 90, durability: 95, power: 100, combat: 80 },
       image: 'https://i.pinimg.com/736x/18/11/71/1811714bf0db825dfd8335206f744ac8.jpg'
    },
    {
      id: 15,
      name: 'Green Lantern',
      gender: GENDER.M,
      slogan: 'In brightest day, in blackest night...',
      skills: { intelligence: 75, strength: 80, speed: 70, durability: 85, power: 100, combat: 65 },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB1aglo8_8c9tHj8yUeOja5-aozNVSdRgMg&s'
    },
    {
      id: 16,
      name: 'Deadpool',
      gender: GENDER.M,
      slogan: 'Maximum effort!',
      skills: { intelligence: 70, strength: 35, speed: 42, durability: 100, power: 65, combat: 95 },
      image: 'https://i.pinimg.com/736x/be/42/78/be4278e25cf4ba8b265268e82a242e93.jpg'
    },
    {
      id: 17,
      name: 'Storm',
      gender: GENDER.F,
      slogan: 'I am the weather itself',
      skills: { intelligence: 80, strength: 15, speed: 50, durability: 60, power: 100, combat: 75 },
      image: 'https://cdn-prod.scalefast.com/public/assets/img/resized/wizardsofthecoast-secret-lair/157d444b83969cb243a8f0bba0004075_636_KR.png'
    },
    {
      id: 18,
      name: 'Thanos',
      gender: GENDER.M,
      slogan: 'I am inevitable',
      skills: { intelligence: 95, strength: 100, speed: 45, durability: 100, power: 100, combat: 90 },
      image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2018/05/21/4546D9ED-7807-43EB-8553-C8A4E3B8A2B1/98.jpg?crop=1212,682,x136,y0&width=1900&height=1069&optimize=high&format=webply'
    },
    {
      id: 19,
      name: 'Harley Quinn',
      gender: GENDER.F,
      slogan: 'Welcome to the madhouse!',
      skills: { intelligence: 80, strength: 15, speed: 30, durability: 40, power: 25, combat: 75 },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8DxJEWPJC4alHeq7AZIPNU1OOqHOwYbjHg&s'
    }
]

export const DEFAULT_HERO: Heroes = {
    id: 9999999999999,
    name: 'Default',
    gender: GENDER.O,
    slogan: '',
    skills: { intelligence: 1, strength: 1, speed: 1, durability: 1, power: 1, combat: 1 },
    image: 'assets/svg/heroes/image-broken.webp&s'
  }

