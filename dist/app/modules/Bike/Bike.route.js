"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Bike_controller_1 = require("./Bike.controller");
const router = express_1.default.Router();
router.post('/', Bike_controller_1.BikeController.addBike);
router.get('/', Bike_controller_1.BikeController.getAllBikes);
router.get('/:id', Bike_controller_1.BikeController.getSingleBike);
exports.BikeRoutes = router;
