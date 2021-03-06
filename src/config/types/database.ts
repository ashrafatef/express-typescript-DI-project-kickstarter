import { Connection } from "mysql";

export interface IDatabase{
    connect(config:any):Promise<Connection>
    disconnect():Promise<any>
    query(querystring:string , params:string[]| {}):Promise<any>
}

export interface DatabaseConfig{
    host:string;
    user:string;
    password:string;
    name:string;
}