// routes/bikeRoutes.ts
import { Router } from 'express';
import { createBike, getBikes, getBikeById, updateBike, deleteBike } from '../controllers/bikeController';

const router = Router();

router.post('/', createBike); // Tworzenie roweru
router.get('/', getBikes); // Pobranie wszystkich rowerów
router.get('/:id', getBikeById); // Pobranie pojedynczego roweru
router.put('/:id', updateBike); // Aktualizacja roweru
router.delete('/:id', deleteBike); // Usunięcie roweru

export default router;
