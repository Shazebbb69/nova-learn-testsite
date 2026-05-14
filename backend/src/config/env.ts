import dotenv from 'dotenv'

dotenv.config()

function must(name: string): string {
  const v = process.env[name]

  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT ?? 4000),

  DATABASE_URL: must('DATABASE_URL'),

  ADMIN_USERNAME: process.env.ADMIN_USERNAME ?? 'admin',
  ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH ?? '',

  ADMIN_JWT_SECRET: must('ADMIN_JWT_SECRET'),
  ADMIN_JWT_EXPIRES_IN: process.env.ADMIN_JWT_EXPIRES_IN ?? '7d',

  UPLOAD_DIR: process.env.UPLOAD_DIR ?? './uploads',
  MAX_UPLOAD_BYTES: Number(process.env.MAX_UPLOAD_BYTES ?? 20 * 1024 * 1024)
}

