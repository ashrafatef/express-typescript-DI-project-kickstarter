


import { Request, Response, NextFunction } from "express";
import { controller, httpPost } from "inversify-express-utils";
import { userCreatePayload } from "../../config/validation/users";
import { AuthenticationService } from "./auth.service";

@controller("/auth")
export class AuthenticationController {
    constructor(private _authService: AuthenticationService) {

    }

    @httpPost('/login')
    async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        return await this._authService.login(req.body);
    }

    @httpPost('/signup')
    delete(req: any, res: Response, next: NextFunction): any {
        req.validate(userCreatePayload , req.body);
        console.log("payload ===>" , req.body)
        const results  = this._authService.signup(req.body);
        res.formatter.ok('');
        return;
        // throw new Error("Method not implemented.");
    }

    @httpPost('/reset-password')
    update(req: Request, res: Response, next: NextFunction, id: string): Promise<any> {

        throw new Error("Method not implemented.");
    }

}