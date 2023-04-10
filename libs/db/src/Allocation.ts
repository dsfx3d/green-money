import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./Account";
import { Category } from "./Category";
import { Transaction } from "./Transaction";

@Entity()
export class Allocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "float" })
  amount!: number;

  @Column()
  custom!: boolean;

  @Column({ type: "date", nullable: true })
  startDate!: Date;

  @Column({ type: "date", nullable: true })
  endDate!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Account, account => account.allocations)
  account!: Account;

  @OneToMany(() => Transaction, transaction => transaction.allocation)
  transactions!: Transaction[];
}
