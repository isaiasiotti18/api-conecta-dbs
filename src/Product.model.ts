import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  name: { plural: 'produtos' },
})
export class Product extends Model {
  @Column
  code: number;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  quantity: number;
}
