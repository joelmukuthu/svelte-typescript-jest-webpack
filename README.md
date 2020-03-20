# Svelte/TypeScript/Jest/Webpack

This project was initialised from https://github.com/sveltejs/template-webpack:

```bash
npx degit sveltejs/template-webpack svelte-app
cd svelte-app
```

## Setup

1. Components are written in and compiled with [Svelte](https://svelte.dev)
2. Components are preprocessed by [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess)
3. Tests are written in TypeScript and run by Jest. While being run, the `*.ts`
   files are preprocessed by [ts-jest](https://github.com/kulshekhar/ts-jest).
4. In the tests, `*.svelte` files are preprocessed by
   [svelte-jester](https://github.com/mihar-22/svelte-jester) with the same
   configuration that svelte-preprocess uses. That's because they both use the
   `svelte.config.js` config file.

## Install dependencies

```bash
npm install // or yarn install
```

## Run dev server

```bash
npm run dev // or yarn dev
```

App runs on [localhost:8080](http://localhost:8080).

## Run tests

```bash
npm test // or yarn test
```
