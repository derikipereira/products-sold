import { PrismaService } from 'src/prisma.service';
import { ProductSold } from './productsold.model';
import { ProductSoldDTO } from './productsold.dto';

export class ProductSoldService {
  constructor(private prisma: PrismaService) {}

  async getAllProductSold(): Promise<ProductSold[]> {
    return this.prisma.productSold.findMany();
  }

  async ProcessFileTXT(data: ProductSoldDTO[]): Promise<void> {
    await Promise.all(
      data.map(async (element) => {
        await this.prisma.productSold.create({
          data: {
            type: element.type,
            date: new Date(element.date),
            description: element.description,
            value: element.value,
            seller: element.seller,
          },
        });
      })
    );
  }
}
