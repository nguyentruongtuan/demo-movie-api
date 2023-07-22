import { injectable } from "inversify";
import { Sequelize } from "sequelize";
import container from "./container";
import { TYPES } from "./types";

export class Database {
  private client: Sequelize;
  constructor() {
    this.client = new Sequelize("postgres://root:123123@db:5432/movie");
  }

  public getClient() {
    return { client: this.client, Sequelize };
  }

  public async test() {
    try {
      await this.client.authenticate();
    } catch (error) {
      console.log(error);
    }
  }
}