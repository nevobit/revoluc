# Revoluc - Landing Page for the Holding Company

## Overview

**Revoluc** is the official landing page of a holding company, built with Next.js. Its purpose is to provide clear and engaging information about the company in three languages: English, French, and Spanish. The page is designed to be highly scalable, fast, and SEO-friendly.

---

## Key Features

- **Multilingual Support:** Fully supports English, French, and Spanish.
- **Optimized Performance:** Features such as pre-rendering and lazy loading for resources.
- **Responsive Design:** Adapts seamlessly to various devices and screen resolutions.
- **Integrated SEO:** Dynamic meta tags, sitemaps, and alternate links (`<link rel="alternate">`) for multilingual pages.
- **Internationalization (i18n):** Implemented using Next.js's native i18n capabilities.

---

## Technologies Used

- **Frontend Framework:** [Next.js](https://nextjs.org/) (latest compatible version).
- **Language:** TypeScript.
- **Styling:** CSS Modules for consistent and customizable styles.
- **Multilingual Content Management:** next-i18next or Next.js's built-in i18n.
- **Hosting:** Vercel for fast and globally scalable deployments.
- **Additional Integrations:** Google Analytics, SEO tools, and image optimization.

---

## Project Structure

```
/src 
    /pages
        /[lang] 
            index.tsx # Main landing page in all languages 
            about.tsx # About page in all languages 
    /public 
        /images # Image assets 
            favicon.ico # Website icon  
    /locales 
        en.json # English translations 
        fr.json # French translations  
        es.json # Spanish translations
```


## Deployment
Prepare the production build:

```
    npm run build
```
**Deploy on Vercel:** Ensure the repository is connected to Vercel and follow the deployment steps.


## Features Checklist
[x] Complete translations in English, French, and Spanish.
[x] Seamless navigation between languages without page reloads.
[x] SEO-optimized content for all three languages.
[x] Responsive design tested on desktop and mobile.
[x] Successful deployment on Vercel.


## Resources
- Next.js Documentation
- Next.js i18n Routing Guide
- CSS Modules
- Vercel


## Contributions
If you'd like to contribute, open an issue or submit a pull request to the GitHub repository.

- **Author**: Nevobit Team
- **Version**: 1.0.0