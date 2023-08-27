import { All, Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/product.dto';

@Controller('dbmainsell')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/synchronize')
  @Render('synchronize')
  async synchronize() {
    return;
  }

  @Post('/synchronize')
  async synchronizePOST(@Body() products: ProductDto[]) {
    const result = await this.appService.synchronize(products);
    return result;
  }
}
