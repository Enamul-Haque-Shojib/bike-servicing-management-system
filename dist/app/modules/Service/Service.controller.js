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
exports.ServiceRecordController = void 0;
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const Service_service_1 = require("./Service.service");
const createService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Service_service_1.ServicesRecordService.createServiceIntoDB(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Service record created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Service_service_1.ServicesRecordService.getAllServicesFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Service records fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleOrOlderService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === 'status') {
            const result = yield Service_service_1.ServicesRecordService.getOlderServicesFromDB();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Overdue or pending services fetched successfully",
                data: result
            });
        }
        else {
            const result = yield Service_service_1.ServicesRecordService.getSingleServiceFromDB(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "service record fetched successfully",
                data: result
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const completeService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completionDate = req.body.completionDate;
        const result = yield Service_service_1.ServicesRecordService.completeServiceIntoDB(req.params.id, completionDate);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Service marked as completed',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.ServiceRecordController = {
    createService,
    getAllServices,
    getSingleOrOlderService,
    completeService,
};
