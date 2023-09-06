import { Column, Table, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  tableName: 'produtos',
})
export class Product extends Model {
  @PrimaryKey
  @Column({ field: 'codigo' })
  code: number;

  @Column({ field: 'descricao' })
  description: string;

  @Column({ field: 'preco' })
  price: number;

  @Column({ field: 'estoque' })
  quantity: number;
}
