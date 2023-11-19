import { Module } from '@nestjs/common';
import { ProductSoldModule } from './ProductSold/productsold.module';
import { ProductSoldService } from './ProductSold/productsold.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ProductSoldModule],
  controllers: [],
  providers: [ProductSoldService, PrismaService],
})
export class AppModule {}
