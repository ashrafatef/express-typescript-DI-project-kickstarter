import express from "express";

export interface IControllerBase{
    create(req: express.Request,res: express.Response,next: express.NextFunction):any;
    delete(req: express.Request,res: express.Response,next: express.NextFunction,id:string):any;
    update(req: express.Request,res: express.Response,next: express.NextFunction,id:string):any;
    get(req: express.Request,res: express.Response,next: express.NextFunction):any;
    getById(req: express.Request,res: express.Response,next: express.NextFunction,id:string):any;
}