import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { env } from './config/env.js'
import { router } from './routes/index.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'))

app.get('/health', (_, res) => res.json({ ok: true }))

app.use('/api', router)

app.listen(env.PORT, () => {
  console.log(`Nova Learn API listening on http://localhost:${env.PORT}`)
})

