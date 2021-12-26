import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { ParsedQs } from "qs";
import { ControllerBase } from "../../config/types/controllers";

@controller("/users")
export class UsersController extends ControllerBase {
    constructor(private _userService: UsersController){
        super();
    }

    @httpPost('/')
    create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<any> {
        throw new Error("Method not implemented.");
    }

    @httpDelete('/:id')
    delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction, id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    @httpPut('/:id')
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction, id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    @httpGet('/')
    get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<any> {
        throw new Error("Method not implemented.");
    }

    @httpGet('/:id')
    getById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction, id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}