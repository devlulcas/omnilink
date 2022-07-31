![next.js](https://img.shields.io/static/v1?label=NEXT&labelColor=2cd039&message=FRONTEND&color=000000&logo=next.js&logoColor=ffffff&style=flat-square)
![FASTIFY](https://img.shields.io/static/v1?label=FASTIFY&labelColor=2cd039&message=BACKEND&color=000000&logo=FASTIFY&logoColor=ffffff&style=flat-square)
![TURBOREPO](https://img.shields.io/static/v1?label=TURBO&labelColor=2cd039&message=REPO&color=000000&logo=TURBOREPO&logoColor=ffffff&style=flat-square)

# OMNILINK

Save links from anywhere at anytime

## About the repository

This is a monorepo that uses turborepo. In that project turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `web`: A [Next.js](https://nextjs.org) app for the frontend
- `backend`: A [Fastify](https://www.fastify.io/) app for the backend since I'm not using NextJS API routes this time
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% ![TYPESCRIPT](https://img.shields.io/static/v1?label=&labelColor=2cd039&message=+TYPESCRIPT&color=000000&logo=TYPESCRIPT&logoColor=ffffff&style=flat-square).

### Utilities

This turborepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd omnilink
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd omnilink
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd omnilink
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```
