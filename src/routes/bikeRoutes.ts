import { Router } from 'express'
import { createBike, getBikes, getBikeById, updateBike, deleteBike } from '../controllers/bikeController'
import { validateBikeCreation, validateBikeUpdate, validateBikeId } from '../validators/bikeValidator'
import { mockAuth } from '../middlewares/authMiddleware'

const router = Router()

// Używamy as any dla walidatorów, ponieważ express-validator ma problemy z typowaniem
router.post('/', mockAuth, ...validateBikeCreation as any[], createBike)
router.get('/', getBikes)
router.get('/:id', ...validateBikeId as any[], getBikeById)
router.put('/:id', mockAuth, ...validateBikeId as any[], ...validateBikeUpdate as any[], updateBike)
router.delete('/:id', mockAuth, ...validateBikeId as any[], deleteBike)

export default router 