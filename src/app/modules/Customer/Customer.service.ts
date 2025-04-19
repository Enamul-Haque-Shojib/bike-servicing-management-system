import { Customer } from "../../../../generated/prisma";
import prisma from "../../shared/prisma";


const createCustomerIntoDB = async (payload:Customer) => {
    
    const result = await prisma.customer.create({
        data: payload
    })

    return result;
};


const getAllCustomersFromDB = async () => {
    
    const result = await prisma.customer.findMany()

    return result;
};

const getSingleCustomerFromDB = async (id: string) => {
    
    const result = await prisma.customer.findUnique({
        where:{
            customerId: id
        }
    })

    return result;
};
const updateCustomerIntoDB = async (id: string, payload: Partial<Customer>):Promise<Customer> => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId:id,
        }
    });
    
    const result = await prisma.customer.update({
        where:{
            customerId: id
        },
        data:payload
    })

    return result;
};

const deleteCustomerIntoDB = async (id: string) => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId:id,
        }
    });
    
    await prisma.customer.delete({
        where:{
            customerId: id
        },
        
    })

    
};

export const CustomerService = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateCustomerIntoDB,
    deleteCustomerIntoDB
}