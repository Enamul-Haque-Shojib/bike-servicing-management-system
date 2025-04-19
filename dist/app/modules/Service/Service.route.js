"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Service_controller_1 = require("./Service.controller");
const router = express_1.default.Router();
router.post('/', Service_controller_1.BikeController.createService);
router.get('/', Service_controller_1.BikeController.getAllServices);
router.get('/:id', Service_controller_1.BikeController.getSingleService);
router.put('/:id/complete', Service_controller_1.BikeController.completeService);
router.get('/status/older', Service_controller_1.BikeController.getOlderServices);
exports.ServiceRoutes = router;
