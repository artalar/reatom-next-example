## Setup

```sh
npm i
```

To connect to backend you should have a `.env.local` file in the root of repo with two variables:

```
GQL_HOST=http://0.0.0.0/v1/graphql
GQL_TOKEN=qwerty
```

<details>
<summary>Hasura metadata schema</summary>
<pre>
{
  "version": 2,
  "tables": [
    {
      "table": {
        "schema": "public",
        "name": "messages"
      },
      "object_relationships": [
        {
          "name": "user",
          "using": {
            "foreign_key_constraint_on": "author"
          }
        }
      ]
    },
    {
      "table": {
        "schema": "public",
        "name": "users"
      },
      "array_relationships": [
        {
          "name": "messages",
          "using": {
            "foreign_key_constraint_on": {
              "column": "author",
              "table": {
                "schema": "public",
                "name": "messages"
              }
            }
          }
        }
      ]
    }
  ]
}
</pre>
</details>

> You may run you own Hasura server for tests from it [cloud](https://cloud.hasura.io) or by [DigitalOcean](https://marketplace.digitalocean.com/apps/hasura-graphql) and import below metadata.

## Tech stack

- Preact
- Next.js
- Reatom
- graphql-request
  > In this example we don't use subscriptions as the Vercel is not support WS, so `graphql-request` is enough for network management. Also, to simplify example, we use just `fetch` at the frontend.
- Stylerun
- [NES.css](https://nostalgic-css.github.io/NES.css/)

## Architecture

This example is show how you may build application describe common logic in the Reatom without coupling on other frameworks (react / next). For example, described logic don't know anything about SSR, which has a some specific tricks (specially with Next.js). But to archive it we should wrap all global APIs (`fetch` and etc) to atoms for get possibility to manage it from store (it looks like IoC pattern and it container).

## Update gql scheme

1. `npm run update_schema` will load new gql scheme using your `.env.local`
2. `npm run gqlgen` will (re)generate gql sdk based on loaded scheme and operations in `src/graphql`
