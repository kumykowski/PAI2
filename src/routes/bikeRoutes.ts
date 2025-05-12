import { Router } from 'express'
import {
  createBike,
  getBikes,
  getBikeById,
  updateBike,
  deleteBike
} from '../controllers/bikeController'

const router = Router()

router.post('/', createBike)
router.get('/', getBikes)
router.get('/:id', getBikeById)
router.put('/:id', updateBike)
router.delete('/:id', deleteBike)

export default router
