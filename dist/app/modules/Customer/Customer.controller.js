"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const Customer_service_1 = require("./Customer.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Customer_service_1.CustomerService.createCustomerIntoDB(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Customer created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllCustomers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Customer_service_1.CustomerService.getAllCustomersFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customers fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Customer_service_1.CustomerService.getSingleCustomerFromDB(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const updateCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Customer_service_1.CustomerService.updateCustomerIntoDB(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Customer_service_1.CustomerService.deleteCustomerIntoDB(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer deleted successfully",
        });
    }
    catch (err) {
        next(err);
    }
});
exports.CustomerController = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer
};
