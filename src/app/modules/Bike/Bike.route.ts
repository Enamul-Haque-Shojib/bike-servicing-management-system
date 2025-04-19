import express from 'express';
import { BikeController } from './Bike.controller';


const router = express.Router();

router.post('/', BikeController.addBike);
router.get('/', BikeController.getAllBikes);
router.get('/:id', BikeController.getSingleBike);





export const BikeRoutes = router;