# RIUFrontendTomasMartinez

### Dependencias

![Angular Icon](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![Node.js Icon](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

- **Angular 18:**
```
npm i @angular/cli@18.2.12
```
- **NodeJS**:
  - Versión mínima: ``` V20.17.0 ```
  - Versión Recomendada: ``` V22.11.0 ```

---

### Styles
[![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

- Se utiliza una arquitectura triangular en SASS, la carpeta styles contiene un readme propio y más detalle de como funciona la arquitectura.

---

## Estructura de sistema de archivos

**`Este proyecto tiene la siguiente estructura de directorios y archivos:`**

src/
├── app/
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

