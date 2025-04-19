import { NextFunction, Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import { BikeService } from "./Bike.service";
import httpStatus from "http-status";


const addBike = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await BikeService.addBikeIntoDB(req.body)

        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "Bike added successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};

const getAllBikes = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await BikeService.getAllBikesFromDB()

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Bikes fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};

const getSingleBike = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await BikeService.getSingleBikeFromDB(req.params.id)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Bike fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};



export const BikeController = {
    addBike,
    getAllBikes,
    getSingleBike
}

