import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from './Product.model';
import { InjectModel } from '@nestjs/sequelize';
import { QueryTypes } from 'sequelize';
import { ProductDto } from './dto/product.dto';
import {} from 'mysql2';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async synchronize(products: ProductDto[]): Promise<any> {
    for await (const product of products) {
      await this.productModel.sequelize.query(
        `
          INSERT INTO produtos (codigo, descricao, preco, estoque)
          VALUES (
            ${Object.values(product)[0]},
            "${Object.values(product)[1]}", 
            ${Object.values(product)[2]},
            ${Object.values(product)[3]});
        `,
        {
          type: QueryTypes.INSERT,
        },
      );
    }

    await this.productModel.sequelize.close();

    return;
  }

  async synchronizeList(): Promise<Product[]> {
    try {
      const products = await this.productModel.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      return products;
    } catch (error: any) {
      throw new BadRequestException(error?.message);
    }
  }
}
