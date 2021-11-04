import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { TYPES } from "../../common/types";
import { MySqlDatabase } from "./mysql/mysqlDatabase";

@provide(TYPES.DatabaseConnection)
export class DatabaseConnection{
    private _db: MySqlDatabase;
    constructor(@inject(TYPES.IDatabase ) db: MySqlDatabase){
        this._db = db;
    }

    async initialize(){
        this._db.connect();
        console.log("hello from mysql connection")
    }
}