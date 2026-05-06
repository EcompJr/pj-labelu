# 🚩 Labelu

Labelu is an institutional website for the Laboratory of History and Memory of Class Struggle (Laboratório de História e Memória da Luta de Classes) at the State University of Feira de Santana (UEFS). 
It is a Content Management System (CMS) that serves as a digital showcase and entry point for researchers and individuals interested in academic studies on class struggles and labor movements.


## ℹ️ Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deploy

Every update at `main` branch will trigger a deploy workflow setup for our Github Actions. The website is deployed under the Github Pages.

See `.github/workflows/astro.yml` for more information.

## 👀 Want to learn more?

Check out [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 👷 Developed by

This work was developed by [EcompJr](https://ecompjr.com.br/).

### Our Team

- **Executive Director of Projects**: [RickBarretto](https://github.com/rickbarretto)
- **Project Manager**: [Robson Carvalho](https://github.com/Robson-Carvalho)
- **Project Lead**: [Ítallo Guimarães](https://github.com/ItalloGuimaraes)
- **Frontend Developer**: [Guilherme Fernandes](https://github.com/DrizinCoder)
- **Frontend Developer**: []()

### Prototype

The initial theme used for prototype was provided by Astro's default theme. 
This is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
