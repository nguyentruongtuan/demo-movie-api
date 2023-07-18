import { injectable } from "inversify";
import { Sequelize } from "sequelize";

// export async function getDB(): Promise<{
//   client: Sequelize;
//   Sequelize: typeof Sequelize;
// }> {
//   try {
//     await client.authenticate();
//     await client.sync();
//   } catch (error) {
//     console.log(error.message);
//   }

//   return { client, Sequelize };
// }

@injectable()
export class Database {
  private client: Sequelize;
  constructor() {
    this.client = new Sequelize("postgres://root:123132@db:5432/movie");
  }

  public getClient() {
    return { client: this.client, Sequelize };
  }
}

// const client = new Sequelize("postgres://root:123132@db:5432/movie");

// export default { client, Sequelize };
