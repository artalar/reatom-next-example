import type { NextApiRequest, NextApiResponse } from 'next'
import { gqlClient } from '~/features/gqlClient'
import { getSdk as createGetMessages } from '~/graphql/getMessages'

export async function getMessages(session: string) {
  if (!session) return null

  const { users, messages } = await createGetMessages(gqlClient).getMessages({
    session,
  })

  if (users.length === 0) return null

  const { name } = users[0]

  return messages.map((msg) => ({ ...msg, isSelf: msg.author === name }))
}

export default async function handleMessages(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const messages = await getMessages(req.cookies.session)

  if (messages) res.json(messages)
  else res.status(403).end()

  return
}
