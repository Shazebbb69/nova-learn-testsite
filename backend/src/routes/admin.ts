import { Router } from 'express'
import { loginAdmin } from '../controllers/admin/authController'
import { requireAdminAuth } from '../middleware/requireAdminAuth'
import {
  listResources,
  uploadResourceMetadata,
  deleteResource
} from '../controllers/admin/resourceController'


export const adminRoutes = Router()

adminRoutes.post('/login', loginAdmin)

// Protected routes
adminRoutes.get('/dashboard', requireAdminAuth, async (_req, res) => {
  res.json({ ok: true })
})

adminRoutes.get('/resources', requireAdminAuth, listResources)
adminRoutes.post('/resources', requireAdminAuth, uploadResourceMetadata)
adminRoutes.delete('/resources/:resourceId', requireAdminAuth, deleteResource)

