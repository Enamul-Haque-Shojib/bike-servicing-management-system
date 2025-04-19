import { Bike } from "../../../../generated/prisma";
import prisma from "../../shared/prisma";


const addBikeIntoDB = async (payload:Bike) => {
    
    const result = await prisma.bike.create({
        data: payload
    })

    return result;
};

const getAllBikesFromDB = async () => {
    
    const result = await prisma.bike.findMany()

    return result;
};

const getSingleBikeFromDB = async (id: string) => {
    
    const result = await prisma.bike.findUnique({
        where:{
            bikeId: id
        }
    })

    return result;
};



export const BikeService = {
    addBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
   
 }