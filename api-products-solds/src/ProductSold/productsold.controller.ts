import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ProductSold } from './productsold.model';
import { ProductSoldService } from './productsold.service';
import { ProductSoldDTO } from './productsold.dto';

@Controller('product-sold')
export class ProductSoldController {
  constructor(private readonly productSoldService: ProductSoldService) {}

  @Get()
  async getAllProductSold(): Promise<ProductSold[]> {
    return this.productSoldService.getAllProductSold();
  }

  @Post('upload-file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    const content = file.buffer.toString();
    const data = this.processContentFile(content);

    await this.productSoldService.ProcessFileTXT(data);
  }

  private processContentFile(content: string): ProductSoldDTO[] {
    const lines = content.split('\n');
    return lines.map((linha) => {
        const [type, date, description, value, seller] = [
            linha.slice(0, 1),
            linha.slice(1, 26),
            linha.slice(26, 56),
            linha.slice(56, 66),
            linha.slice(66, 86),
          ];
      return {
        type: parseInt(type),
        date: date,
        description: description,
        value: parseInt(value),
        seller: seller,
      };
    });
  }
}
