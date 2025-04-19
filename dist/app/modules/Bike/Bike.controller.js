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
exports.BikeController = void 0;
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const Bike_service_1 = require("./Bike.service");
const http_status_1 = __importDefault(require("http-status"));
const addBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Bike_service_1.BikeService.addBikeIntoDB(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Bike added successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllBikes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Bike_service_1.BikeService.getAllBikesFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Bikes fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Bike_service_1.BikeService.getSingleBikeFromDB(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Bike fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.BikeController = {
    addBike,
    getAllBikes,
    getSingleBike
};
