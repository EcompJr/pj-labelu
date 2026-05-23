# Decisions

This document records project decisions so the team can remember why specific tools and approaches were chosen.

## April 2026

### April 15 (Wednesday)

I created this repository after reviewing the current state of Labelu.
The project was originally promised for completion in 2021 but remains unfinished.

The codebase is split into two repositories: the front end ([pj-labelu-front](https://github.com/EcompJr/pj-labelu-front), React + Vite) and the backend ([Labelu](https://github.com/EcompJr/Labelu), PHP/Laravel).

On inspection, many pages, integrations, and backend services are missing—my estimate is the project is under 60% complete.
In places where features appear implemented, there is little testing or verification, which would require additional time to debug and validate.

#### Choosing an approach

We evaluated three options:

1. Continue with PHP and finish the existing backend.
2. Rewrite in our stack: FastAPI + React.
3. Use Astro with a Git-backed CMS.

I chose option 3. Astro is well suited for content-focused sites and allows rapid delivery.
Pairing Astro with a Git-backed CMS removes the need to build a full backend solely to serve mostly static pages, reduces duplication, and lowers the risk of introducing bugs while finishing remaining content.

#### Choosing a CMS

I evaluated several CMS options and selected [Decap CMS](https://decapcms.org/) (formerly Netlify CMS).

It is simple to configure and its free tier meets the needs of this project.

### April 16 (Thursday)

I spent a significant amount of time attempting to configure Decap (Netlify CMS) with the Git backend, but was unable to get it working reliably.

Additionally, the setup appears to rely heavily on Netlify-specific features.
This introduces an undesirable third-party dependency, along with potential drawbacks such as a learning curve for Netlify and possible billing constraints.

#### The New CMS

Thus, I decided to adopt [Sveltia CMS](https://sveltiacms.app/en/).
It is fully self-hosted and integrates cleanly with GitHub using fine-grained access tokens.
Sveltia is inspired by Decap and aims to address many of its known limitations.
It is straightforward to use and includes built-in support for dark mode and mobile devices.

The integration with our system was smooth, and the migration from Decap to Sveltia as well.
