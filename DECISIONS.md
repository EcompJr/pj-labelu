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

## June 2026

### June 5 (Friday)

#### Keeping the PWA without caching

I added PWA support for both the public website and the Sveltia CMS admin area.

This gives each app its own manifest, name, icon, theme color, scope, shortcuts, and installable experience.

The first implementation also cached PWA assets and GET responses through the service workers.
After reviewing that behavior, I decided to remove runtime caching and offline caching from the PWA.

The site is deployed as a content-focused website on GitHub Pages.
Its most important requirement is showing fresh published content and admin changes reliably.
Caching pages, CMS assets, or fetched responses in a service worker creates a risk of stale content after deploys and can make debugging harder, especially because the admin area depends on live Sveltia CMS behavior and GitHub-backed content updates.

The current service workers are intentionally minimal:

1. They keep the PWA registration and app scopes valid.
2. They call `self.skipWaiting()` so updates activate quickly.
3. They remove old `labelu-site-*` and `labelu-admin-*` caches during activation.
4. They do not intercept fetch requests.

This means the project keeps the installation benefits of a PWA without promising offline behavior or serving stale cached pages.

#### Using JPEG for the Open Graph image

Most site images were converted to WebP to reduce asset size, and the Open Graph image was initially compressed as `og.webp`.
However, I decided to keep the default share image as `og.jpg`.

The reason is link preview compatibility.
The WebP Open Graph image worked in several platforms, including Discord, but WhatsApp had issues generating previews from the WebP image.
WhatsApp is an important sharing channel for this project, so reliable previews are more valuable than the smaller WebP file size for this specific asset.

The default metadata now points to `/og.jpg` and declares the image type as `image/jpeg`.
Other site images can still use WebP where browser rendering is controlled by the page itself, but the Open Graph image should stay in JPEG unless the target preview platforms are tested again.
