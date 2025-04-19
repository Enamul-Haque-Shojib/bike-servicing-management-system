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
exports.ServicesRecordService = exports.getOlderServicesFromDB = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = __importDefault(require("../../shared/prisma"));
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.create({
        data: payload
    });
    return result;
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findMany();
    return result;
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findUnique({
        where: {
            serviceId: id
        }
    });
    return result;
});
const completeServiceIntoDB = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            status: 'done',
            completionDate: completionDate ? new Date(completionDate) : new Date(),
        },
    });
    return result;
});
const getOlderServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_2.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: [prisma_1.ServiceStatus.pending, prisma_1.ServiceStatus.in_progress],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
exports.getOlderServicesFromDB = getOlderServicesFromDB;
exports.ServicesRecordService = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    completeServiceIntoDB,
    getOlderServicesFromDB: exports.getOlderServicesFromDB
};
