import { IDatabase, TYPES } from "../../../common/types";
import mysql, { Connection } from "mysql";
import { fluentProvide, provide } from "inversify-binding-decorators";

const provideSingleton = (identifier: any) => {
  return fluentProvide(identifier).inSingletonScope().done();
};

@provideSingleton(TYPES.IDatabase)
export class Database implements IDatabase {
  private _client: Connection | any;
  private _config: any;

  public set client(connection: Connection) {
    this._client = connection;
  }

  public get client() {
    return this._client;
  }

  constructor() {}

  async connect(config: any): Promise<any> {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Botter@1234",
      database: "tasks_management",
    });

    await new Promise((resolve: any, reject: any) => {
      connection.connect((err) => {
        if (err) {
          console.log("Database Connection Failed");
          return reject(err);
        }
        console.log(" Database connected!");
        resolve(true);
      });
    });

    this.client = connection;
  }

  disconnect(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async query(querystring: string, params: string[]): Promise<any> {
    // console.log(this.client);
    return  new Promise((resolve: any, reject: any) => {
      this.client.query(querystring,params, (err, results , fields) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log("======>",results);
        console.log("======>",fields);
        resolve(results);
      });
    });
  }
}
