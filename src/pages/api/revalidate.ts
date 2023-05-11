import type { NextApiRequest, NextApiResponse } from 'next'

import { env } from '~/env.mjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'InvalidToken' })
  }

  if (!req.body) {
    return res.status(422).json({ message: 'InvalidRequestBody' })
  }

  try {
    await res.revalidate('/products')
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('ErrorRevalidating')
  }
}
