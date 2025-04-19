import { NextFunction, Request, Response } from "express";
import { CustomerService } from "./Customer.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";


const createCustomer = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await CustomerService.createCustomerIntoDB(req.body)

        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "Customer created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await CustomerService.getAllCustomersFromDB()

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Customers fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
const getSingleCustomer = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await CustomerService.getSingleCustomerFromDB(req.params.id)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Customer fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await CustomerService.updateCustomerIntoDB(req.params.id, req.body)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Customer updated successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
};
const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        await CustomerService.deleteCustomerIntoDB(req.params.id)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Customer deleted successfully",
            
        })
    }
    catch (err) {
        next(err)
    }
};



export const CustomerController = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer
}