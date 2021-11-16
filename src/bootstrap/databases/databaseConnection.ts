import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { Connection } from "mysql";
import { IDatabase, TYPES } from "../../config/types";
import { Database } from "./mysql/database";

@provide(DatabaseConnection)
export class DatabaseConnection {
  private _db: IDatabase;

  constructor(@inject(TYPES.IDatabase) db: IDatabase) {
    console.log("database connection constructor");
    this._db = db;
  }

  async initialize(config: any) {
    await this._db.connect(config);
  }
}
