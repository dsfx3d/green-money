import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { CategoryTag } from "./CategoryTag";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  parentId!: number;

  @Column({
    type: "enum",
    enum: CategoryTag
  })
  tag!: CategoryTag;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Category, category => category.children)
  parent!: Category;

  @OneToMany(() => Category, category => category.parent)
  children!: Category[];

  @OneToMany(() => Transaction, transaction => transaction.category)
  transactions!: Transaction[];
}
