import Ajv from "ajv";
import express, { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { injectable } from "inversify";
import { ParsedQs } from "qs";

export interface IControllerBase{
    create(req: Request ,res: Response, next: NextFunction):Promise<any>;
    delete(req: Request ,res: Response, next: NextFunction,id:string):Promise<any>;
    update(req: Request ,res: Response, next: NextFunction,id:string):Promise<any>;
    get(req: Request ,res: Response, next: NextFunction):Promise<any>;
    getById(req: Request ,res: Response, next: NextFunction,id:string):Promise<any>;
}
@injectable()
export abstract class ControllerBase implements IControllerBase{

    private _validator: Ajv;
    constructor(){
        this._validator = new Ajv();
    }

    abstract create(req: Request ,res: Response, next: NextFunction):Promise<any>;
    abstract delete(req: Request ,res: Response, next: NextFunction, id: string):Promise<any>;
    abstract update(req: Request ,res: Response, next: NextFunction, id: string): Promise<any>;
    abstract get(req: Request ,res: Response, next: NextFunction) :Promise<any>;
    abstract getById(req: Request ,res: Response, next: NextFunction ,id: string): Promise<any>;
    

    validate(schema:any, payload:any){
        const validate = this._validator.compile(schema);
        const valid = validate(payload);
        if(!valid){
            console.log(validate.errors);
            throw validate.errors;
        }   
    }
}