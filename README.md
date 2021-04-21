## Setup

```sh
yarn --ignore-engines
```

## Tech stack

- Preact
- Next.js
- Reatom
- graphql-request
  > In this example we don't use subscriptions as the Vercel is not support WS, so `graphql-request` is enough for network management. Also, to simplify example, we use just `fetch` at the frontend.
- Stylerun
- [NES.css](https://nostalgic-css.github.io/NES.css/)

## Architecture

This example is show how you build application describe common logic in the Reatom without coupling on other frameworks (react / next). For example, described logic don't know anything about SSR, which has a some specific tricks (specially with Next.js). But to archive it we should wrap all global APIs (`fetch` and etc) to atoms for get possibility to manage it from store (it looks like IoC pattern and it container).

## Update gql scheme

1. `npm run update_schema` will load new gql scheme using your `.env.local`
2. `npm run gqlgen` will (re)generate gql sdk based on loaded scheme and operations in `src/graphql`
