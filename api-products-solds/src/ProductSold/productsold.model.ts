import { Prisma } from "@prisma/client";


export class ProductSold implements Prisma.ProductSoldCreateInput{
    id?: number;
    type: number;
    date: string | Date;
    description: string;
    value: number;
    seller: string;
    
}