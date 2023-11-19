import { Module } from "@nestjs/common";
import { ProductSoldController } from "./productsold.controller";
import { ProductSoldService } from "./productsold.service";
import { PrismaService } from "src/prisma.service";


@Module({
    controllers: [ProductSoldController],
    providers: [ProductSoldService, PrismaService]
})
export class ProductSoldModule{}