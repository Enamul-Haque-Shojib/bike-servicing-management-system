import { NextFunction, Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";

import httpStatus from "http-status";
import { ServicesRecordService } from "./Service.service";


const createService = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await ServicesRecordService.createServiceIntoDB(req.body)

        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "Service record created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};

const getAllServices = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await ServicesRecordService.getAllServicesFromDB()

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Services fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};

const getSingleService = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await ServicesRecordService.getSingleServiceFromDB(req.params.id)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "service fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
const completeService = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const completionDate = req.body.completionDate;
  
      const result = await ServicesRecordService.completeServiceIntoDB(
        req.params.id,
        completionDate
      );
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service marked as completed',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };


  const getOlderServices = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await ServicesRecordService.getOlderServicesFromDB()

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Overdue or pending services fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
  



export const BikeController = {
    createService,
    getAllServices,
    getSingleService,
    completeService,
    getOlderServices
}

