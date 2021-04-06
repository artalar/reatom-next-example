import type { NextApiRequest, NextApiResponse } from 'next'
import Ably from 'ably/promises'

export default async function handleAblyAuth(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userName = req.cookies.userName
  const client = new Ably.Realtime(process.env.ABLY_API_KEY)
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: userName,
  })
  res.status(200).json(tokenRequestData)
}
