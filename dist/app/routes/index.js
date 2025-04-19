"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Customer_route_1 = require("../modules/Customer/Customer.route");
const Bike_route_1 = require("../modules/Bike/Bike.route");
const Service_route_1 = require("../modules/Service/Service.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: Customer_route_1.CustomerRoutes
    },
    {
        path: '/bikes',
        route: Bike_route_1.BikeRoutes
    },
    {
        path: '/services',
        route: Service_route_1.ServiceRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
