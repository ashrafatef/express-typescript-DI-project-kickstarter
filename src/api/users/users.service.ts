import { provide } from "inversify-binding-decorators";
import { IServiceBase } from "../../config/types";


interface IUser{}
@provide(UsersService)
export class UsersService implements IServiceBase<IUser>{
    constructor(){

    }
    create(data: IUser): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number, params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, params: any, data: IUser): Promise<any> {
        throw new Error("Method not implemented.");
    }
    get(query: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: string, params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}