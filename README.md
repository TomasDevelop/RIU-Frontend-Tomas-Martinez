# RIUFrontendTomasMartinez

### Dependencias

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://v18.angular.dev/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/download) [![Bun](https://img.shields.io/badge/Bun-1B1B1B?style=for-the-badge&logo=bun&logoColor=FFFFFF)](https://bun.sh) [![Testing Library](https://img.shields.io/badge/-Testing%20Library-%23E38332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/angular-testing-library/intro)

- **Angular LTS:**
  - ((LTS: 18.x) => hasta el 19 de mayo 2025)
```
npm i @angular/cli@18.12.16 
```

- **NodeJS**:
```
  - Versión mínima: **V20.19.0**
  - Versión Recomendada: **V22.14.0**
```

- **Bun**:
```
  - Versión utilizada: **V1.2.2**
```

- **Testing library + Jest**:
```
  - Testing library: **V17.3.6**
  - Jest-preset-angular: **V14.5.3**
  - Jest: **V29.7.0**
  - Types jest: **V29.5.14**
```

---

### Styles
[![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

- Se utiliza una arquitectura triangular en SASS, la carpeta styles contiene un readme propio y más detalle de como funciona la arquitectura.

---

### Comandos



- **Instalar dependencias:**
  - Manejador de paquetes: Este proyecto fue levantando con [Bun](https://bun.sh/)

```
bun install

o

npm install

o

pnpm install
```

- **Correr proyecto:**
```
bun start

o

npm run start

o

pnpm run start
```

- **Testear cobertura:**
```
bun testing

o

npm run testing

o

pnpm run testing
```

---



## Estructura de sistema de archivos

**`Este proyecto tiene la siguiente estructura de directorios y archivos:`**
```
src/
├── app/
│
│ ├── modules/
| │   ├── app/
│ │   │  ├── app.config
│ │   │  └── app.routes
| |   ├── layout/
│ │   │  ├── components
| |   |  |  └── dialog
│ │   │  ├── models
| |   |  |  ├── edit-or-add-hero
| |   |  |  └── heroes
│ │   │  ├── services 
| |   |  |  ├── heroes.service
| |   |  |  ├── heroes.service.spec
| |   |  |  └── heroes.dictionary
│ │   │  ├── views
│ │   │  │  ├── list-heroes
│ │   │  |  ├── edit-hero
│ │   │  |  └── add-hero
│ │   │  ├── layout.component.html
│ │   │  ├── layout.component.scss
│ │   │  ├── layout.component.ts
│ │   │  └── layout.routes.ts
│ │   └── index.ts
│ └── shared/
│ │    ├── components/
| |    |    └─loader.component
│ │    ├── utils/
| |    |    └─routes.const
│ ├── styles/ 
│ │    ├── layers/
│ │    │  ├── _base.scss
│ │    |  ├── _objects.scss
│ │    |  ├── _settings.scss
│ │    |  ├── _tools.scss
│ │    |  ├── _trumps.scss
│ │    ├── readme.md
│ │    └── styles.scss
│ ├── app.component.html
│ ├── app.component.scss
│ └── app.component.ts
├── assets/
├── index.html
└── index.scss
```
