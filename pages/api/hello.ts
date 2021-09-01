import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email;
  return res.status(200).json({ name: 'John Doe', email: email });
}
