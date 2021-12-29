import { DatabaseConfig, IDatabase, TYPES } from "../../../config/types";
import mysql, { Connection } from "mysql";
import { fluentProvide, provide } from "inversify-binding-decorators";
import { Client } from 'pg';
const provideSingleton = (identifier: any) => {
  return fluentProvide(identifier).inSingletonScope().done();
};

@provideSingleton(TYPES.IDatabase)
export class Database implements IDatabase {
  private _client: Client | any;
  private _config: any;

  public set client(connection: Client) {
    this._client = connection;
  }

  public get client() {
    return this._client;
  }

  constructor() { }

  async connect(config: DatabaseConfig): Promise<any> {
    const client = new Client({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.name,
    });
    await client.connect();
    console.log("Database Connected");
    this.client = client;
  }

  disconnect(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async query(querystring: string, params: string[]): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.client.query(querystring, params, (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(results);
      });
    });
  }
}
