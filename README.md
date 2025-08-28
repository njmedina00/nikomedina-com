# Nikolas Medina – Freelance Web Developer

## 📌 Project Overview
This is the source code for my personal landing page. The goal of this project is to create a sleek, modern single-page application (SPA) that showcases my freelance web development services. This site will act as both a portfolio and a business landing page for potential clients.

## 🎯 Goals
- Build a professional, responsive SPA landing page.  
- Clearly communicate my freelance services (website redesigns, SEO, performance improvements, custom builds).  
- Provide a simple way for potential clients to get in touch.  
- Establish a professional online presence under my own domain.  
- Lay the groundwork for expanding into a full portfolio site with case studies and client work.  

## 🛠️ Tech Stack Plan
- **Framework:** React (for building a fast and dynamic SPA)  
- **Styling:** TailwindCSS (for clean, modern, and responsive design)  
- **UI Components:** shadcn/ui + lucide-react icons  
- **Animations:** Framer Motion (for smooth, professional animations)  
- **Deployment:** GitHub Pages (starter) → Later migrate to custom domain with Fruition + Namecheap  
- **Optional Future Enhancements:**  
  - Form handling with Formspree or Netlify Forms  
  - SEO optimizations (Open Graph tags, meta descriptions)  
  - Blog/updates section (if needed for content marketing)  

## 📐 Planned Layout
The landing page will be structured as follows:

1. **Hero (Landing Section)**  
   - Headline: What I do in one sentence.  
   - Subheadline: Short value proposition.  
   - Call-to-action button (Contact Me / Let’s Work Together).  

2. **Services**  
   - 2–3 service cards (Website Redesign, SEO & Performance, Custom Builds).  
   - Icons/visuals for clarity.  

3. **About Me**  
   - Short bio on who I am and why I’m different.  
   - Personal photo or avatar.  

4. **Portfolio / Case Studies**  
   - Placeholder (“Coming Soon”) until I have projects to showcase.  

5. **Contact**  
   - Simple contact form (name, email, message) or direct email link.  
   - Links to LinkedIn / GitHub.  

6. **Footer**  
   - Minimal links + copyright.  

## 🚀 Getting Started
### Development
Run the development server:
```bash
npm run dev


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
