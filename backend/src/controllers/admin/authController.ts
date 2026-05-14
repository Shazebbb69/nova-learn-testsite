import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../../config/env.js'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
})

export async function loginAdmin(req: any, res: any) {
  const body = loginSchema.safeParse(req.body)
  if (!body.success) return res.status(400).json({ error: body.error.flatten() })

  const { username, password } = body.data
  if (username !== env.ADMIN_USERNAME) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const ok = await bcrypt.compare(password, env.ADMIN_PASSWORD_HASH)
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

  const token = jwt.sign(
    { sub: 'admin', username },
    env.ADMIN_JWT_SECRET,
    // jsonwebtoken v9 expects `expiresIn` under `SignOptions`
    // but TS can be picky, so keep the third param minimal.
    { expiresIn: env.ADMIN_JWT_EXPIRES_IN as any }
  )


  res.json({ token })
}

