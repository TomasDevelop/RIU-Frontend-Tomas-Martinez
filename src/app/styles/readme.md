# Architecture inverted triangle

### Scalable and Maintainable CSS Architecture

https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

---

### \_setting.scss

En esta capa estarán: 1. configuraciones disponibles globalmente. 2. cambios de configuraciones. 3. colores representativos de la marca o empresa.

### \_tools.scss

En esta capa estarán: 1. Herramientas que están disponible globalmente. 2. Funciones utilitarias. 3. Mixins.

### \_base.scss

base.scss: 1. Estilos que normalizan comportamiento en distintos entornos. 2. Reset de estilos ejm. normalize css etc..

### \_objects.scss

objects.scss: 1. Patrones de diseños, elementos reutilizables. 2. No cosméticos, ni colores, ni tipografías. 3. Exclusivamente se usaran selectores de clase.

### \_trumps.scss

En esta capa estarán: 1. sobreescrituras de estilos. 2. helpers o utilities. 3. pueden usar el flag !important. 4. solo afecta a una pieza del DOM a la vez. 5. especificidad por lo regular alta.

---
