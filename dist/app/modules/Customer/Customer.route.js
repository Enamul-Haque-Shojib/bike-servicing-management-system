"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Customer_controller_1 = require("./Customer.controller");
const router = express_1.default.Router();
router.post('/', Customer_controller_1.CustomerController.createCustomer);
router.get('/', Customer_controller_1.CustomerController.getAllCustomers);
router.get('/:id', Customer_controller_1.CustomerController.getSingleCustomer);
router.put('/:id', Customer_controller_1.CustomerController.updateCustomer);
router.delete('/:id', Customer_controller_1.CustomerController.deleteCustomer);
exports.CustomerRoutes = router;
