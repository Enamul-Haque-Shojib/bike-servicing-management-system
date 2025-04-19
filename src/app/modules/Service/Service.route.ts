import express from 'express';
import { ServiceRecordController } from './Service.controller';




const router = express.Router();

router.post('/', ServiceRecordController.createService);
router.get('/', ServiceRecordController.getAllServices);
router.get('/:id', ServiceRecordController.getSingleOrOlderService);
router.put('/:id/complete', ServiceRecordController.completeService);


export const ServiceRoutes = router;