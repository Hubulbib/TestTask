import { Router } from 'express'
import leadController from '../controllers/lead.controller.js'

const router = Router()

router.get('/', [], leadController.getAll)

export default router
