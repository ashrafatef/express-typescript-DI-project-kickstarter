


import { Request, Response, NextFunction } from "express";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { Logger } from "../../utils";

@controller("/")
export class EntryController {
    constructor(private _logger: Logger){}
    @httpGet('/')
    async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        this._logger.logger.error('Thetre is error ---->')
        return res.json({
            version: "1.0",
            env: "Development"
        })
    }

}