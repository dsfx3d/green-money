import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./Account";
import { Allocation } from "./Allocation";
import { Category } from "./Category";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column({ type: "float" })
  amount!: number;

  @Column({ type: "date" })
  date!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Account, account => account.transactions)
  account!: Account;

  @ManyToOne(() => Allocation, allocation => allocation.transactions)
  allocation!: Allocation;

  @ManyToOne(() => Category, category => category.transactions)
  category!: Category;
}
