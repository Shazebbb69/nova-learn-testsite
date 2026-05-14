import { Router } from 'express'
import { adminRoutes } from './admin.js'
import { publicRoutes } from './public.js'

export const router = Router()

router.use('/admin', adminRoutes)
router.use('/', publicRoutes)

