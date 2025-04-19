import express from 'express';
import { CustomerRoutes } from '../modules/Customer/Customer.route';
import { BikeRoutes } from '../modules/Bike/Bike.route';
import { ServiceRoutes } from '../modules/Service/Service.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: CustomerRoutes
    },
    {
        path: '/bikes',
        route: BikeRoutes
    },
    {
        path: '/services',
        route: ServiceRoutes
    },
    
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;