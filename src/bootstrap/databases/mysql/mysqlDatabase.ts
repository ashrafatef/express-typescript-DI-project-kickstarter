

import { IDatabase, TYPES } from "../../../common/types";
import mysql from "mysql";
import { provide } from "inversify-binding-decorators";

@provide(TYPES.IDatabase)
export class MySqlDatabase implements IDatabase {
  connect(): void {
    // const connection = mysql.createConnection({
    //   host: "localhost",
    //   user: "ashrafatef",
    //   password: "botter2176",
    //   database: "users",
    // });
    console.log("From Connection")
    // connection.connect((err) => {
    //   console.log(connection);
    // });
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
}