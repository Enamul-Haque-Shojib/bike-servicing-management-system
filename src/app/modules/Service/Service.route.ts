import express from 'express';
import { BikeController } from './Service.controller';


const router = express.Router();

router.post('/', BikeController.createService);
router.get('/', BikeController.getAllServices);
router.get('/:id', BikeController.getSingleService);
router.put('/:id/complete', BikeController.completeService);
router.get('/status/older', BikeController.getOlderServices);





export const ServiceRoutes = router;