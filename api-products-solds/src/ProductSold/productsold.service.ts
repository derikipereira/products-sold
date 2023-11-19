import { PrismaService } from 'src/prisma.service';
import { ProductSold } from './productsold.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductSoldService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProductSold(): Promise<ProductSold[]> {
    return this.prismaService.productSold.findMany();
  }

  async ProcessFileTXT(data: ProductSold[]): Promise<void> {
    await Promise.all(
      data.map(async (element) => {
        if (element && element.type && element.date && element.description && element.value && element.seller) {
          await this.prismaService.productSold.create({
            data: {
              type: element.type,
              date: new Date(element.date),
              description: element.description,
              value: element.value,
              seller: element.seller,
            },
          });
        } else {
          console.error('Objeto `element` ou suas propriedades são undefined:', element);
        }
      })
    );
  }
  
}
