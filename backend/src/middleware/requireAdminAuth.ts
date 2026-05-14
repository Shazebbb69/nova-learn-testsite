import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export function requireAdminAuth(req: any, res: any, next: any) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing token' })

  const token = header.slice('Bearer '.length)
  try {
    const payload = jwt.verify(token, env.ADMIN_JWT_SECRET)
    req.admin = payload
    return next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

