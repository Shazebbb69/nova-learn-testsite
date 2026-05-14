import { Router } from 'express'

export const publicRoutes = Router()

// Public resource discovery endpoints will be added next.
publicRoutes.get('/resources/featured', async (_req, res) => {
  res.json({ items: [] })
})

