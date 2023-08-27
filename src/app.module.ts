import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './Product.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '192.168.16.3',
      port: 3306,
      username: 'root',
      password: 'root_password',
      database: 'dbmainsell',
      models: [Product],
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
