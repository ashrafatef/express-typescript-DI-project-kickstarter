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
    async signup(req: any, res: Response, next: NextFunction): Promise<any> {
        req.validate(userCreatePayload , req.body);
        return await this._authService.signup(req.body);
    }

    @httpPost('/reset-password')
    update(req: Request, res: Response, next: NextFunction, id: string): Promise<any> {

        throw new Error("Method not implemented.");
    }

}