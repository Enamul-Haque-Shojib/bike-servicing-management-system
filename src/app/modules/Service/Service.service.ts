import { ServiceRecord, ServiceStatus } from "../../../../generated/prisma";
import prisma from "../../shared/prisma";


const createServiceIntoDB = async (payload: ServiceRecord) => {
    
    const result = await prisma.serviceRecord.create({
        data: payload
    })

    return result;
};

const getAllServicesFromDB = async () => {
    
    const result = await prisma.serviceRecord.findMany()

    return result;
};


const getSingleServiceFromDB = async (id: string) => {
    
    const result = await prisma.serviceRecord.findUnique({
        where:{
            serviceId: id
        }
    })

    return result;
};

const completeServiceIntoDB = async (id: string, completionDate?: string) => {
    const result = await prisma.serviceRecord.update({
      where: {
        serviceId: id,
      },
      data: {
        status: 'done',
        completionDate: completionDate ? new Date(completionDate) : new Date(),
      },
    });
  
    return result;
  };



  
  export const getOlderServicesFromDB = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
    const result = await prisma.serviceRecord.findMany({
      where: {
        AND: [
          {
            status: {
              in: [ServiceStatus.pending, ServiceStatus.in_progress],
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
  };
  
  



export const ServicesRecordService = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    completeServiceIntoDB,
    getOlderServicesFromDB
   
 }