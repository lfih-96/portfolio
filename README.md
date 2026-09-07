# 💼 Portfolio Profesional — Luis Fernando Ilbay

Portafolio web profesional desarrollado para presentar mi perfil, formación académica, experiencia, habilidades técnicas y proyectos relacionados con el desarrollo de software y los sistemas de información.

Actualmente soy **Licenciado en Pedagogía de la Informática**, curso una **Maestría en Ingeniería de Software y Sistemas de Información** y realizo una **pasantía en Global Exchange**.

---

## 🚀 Estado del proyecto

🟡 **En desarrollo**

El portafolio continúa evolucionando a medida que incorporo nuevos proyectos, tecnologías y experiencia profesional.

---

## 🎯 Objetivo

El objetivo de este proyecto es disponer de una plataforma profesional donde pueda presentar:

- Mi perfil profesional.
- Formación académica.
- Experiencia.
- Tecnologías y herramientas.
- Proyectos destacados.
- Evolución como desarrollador.
- Enlaces a GitHub y LinkedIn.
- Información de contacto.

El portafolio está orientado principalmente a oportunidades relacionadas con **desarrollo de software y sistemas de información**.

---

## 🧑‍💻 Tecnologías utilizadas

### Frontend

`React` · `JavaScript` · `JSX` · `HTML5` · `CSS3`

### Herramientas

`Vite` · `Git` · `GitHub` · `React Icons`

### APIs del navegador utilizadas

`IntersectionObserver`

---

## ✨ Características

- Diseño responsive.
- Navegación mediante secciones.
- Navbar fijo.
- Menú lateral para dispositivos móviles.
- Overlay en navegación móvil.
- Bloqueo de scroll cuando el menú móvil está abierto.
- Cierre del menú mediante la tecla `Escape`.
- Detección automática de la sección activa.
- Animaciones de entrada mediante `IntersectionObserver`.
- Soporte para `prefers-reduced-motion`.
- Componentes React reutilizables.
- Datos separados de la interfaz.
- Sistema de variables CSS.
- Enlaces a GitHub y LinkedIn.
- Sección dinámica de proyectos.
- Sección dinámica de habilidades.
- Diseño adaptado a escritorio, tablet y dispositivos móviles.
- Metadatos básicos para SEO y redes sociales.

---

## 🧱 Arquitectura del proyecto

El proyecto utiliza una arquitectura basada en componentes.

```text
src/
│
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectIcon.jsx
│   └── SkillIcon.jsx
│
├── data/
│   ├── experience.js
│   ├── projects.js
│   ├── skills.js
│   └── socialLinks.js
│
├── hooks/
│   └── useRevealAnimations.js
│
├── sections/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
│
├── styles/
│   ├── about.css
│   ├── animations.css
│   ├── contact.css
│   ├── education.css
│   ├── experience.css
│   ├── footer.css
│   ├── globals.css
│   ├── hero.css
│   ├── navbar.css
│   ├── projects.css
│   ├── skills.css
│   ├── utilities.css
│   └── variables.css
│
├── App.jsx
├── index.css
└── main.jsx