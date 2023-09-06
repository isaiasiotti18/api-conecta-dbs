import { All, Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/product.dto';
import { Product } from './Product.model';

@Controller('dbmainsell')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/synchronize-list')
  @Render('synchronize')
  async synchronize(): Promise<any> {
    const products = await this.appService.synchronizeList();
    return {
      products,
    };
  }

  @Post('/synchronize')
  async synchronizePOST(@Body() products: ProductDto[]) {
    const result = await this.appService.synchronize(products);
    return result;
  }
}
