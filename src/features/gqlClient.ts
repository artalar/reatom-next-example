import { GraphQLClient } from 'graphql-request'

export const gqlClient = new GraphQLClient(process.env.GQL_HOST, {
  headers: {
    'x-hasura-admin-secret': process.env.GQL_TOKEN,
  },
})
