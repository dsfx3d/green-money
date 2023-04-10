import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Allocation } from "./Allocation";
import { Transaction } from "./Transaction";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "float" })
  balance!: number;

  @Column({ type: "float" })
  defaultAllocationAmount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Allocation, allocation => allocation.account)
  allocations!: Allocation[];

  @OneToMany(() => Transaction, transaction => transaction.allocation)
  transactions!: Transaction[];
}
