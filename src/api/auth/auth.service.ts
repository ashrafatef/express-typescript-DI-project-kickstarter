import { provide } from "inversify-binding-decorators";
import { IServiceBase } from "../../config/types";
import { IUser } from "../../config/validation/users";
import { UserRepository } from "../users/users.repository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from "../../config/types/errors";
@provide(AuthenticationService)
export class AuthenticationService {
    constructor(private _userRepository: UserRepository) {

    }

    async login(data: any): Promise<any> {
        const user: any = await this._userRepository.findOne(data.username, {});
        const validPassword = await bcrypt.compare(data.password, user[0].password);
        if(validPassword){
            return this.authResponse(user[0]);
        }
        throw new UnauthenticatedError()
    }

    private authResponse(user:any) {
        const token = jwt.sign(
            { user_id: user.id, email: user.email },
            "asfsdfsdfsdfsdfsdf",
            {
                expiresIn: "2h",
            }
        );
        delete user[0].password;
        return {
            token: token,
            ...user[0]
        }
    }

    async signup(data: IUser): Promise<any> {
        // encrypt user password
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRound);
        const newUser: IUser = {
            name: data.name,
            username: data.username,
            password: hashedPassword,
            email: data.email
        }
        // save user with encrypted password
        return this._userRepository.create(newUser);
        // throw new Error("Method not implemented.");
    }

    async resetPassword(data: IUser): Promise<any> {
        throw new Error("Method not implemented.");
    }

}