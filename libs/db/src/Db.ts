import { DataSource } from "typeorm";

export class Db extends DataSource {
  private static source: Db;

  static getInstance(): Db {
    return this.source ??= new DataSource({
      type: "react-native",
      database: "green-money.db",
      location: "default"
    });
  }
}
