import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { IDatabase, TYPES } from "../../config/types";
import { BaseRepository } from "../../config/types/repository";
import { ITask } from "../../config/validation/tasks";
import { IUser } from "../../config/validation/users";

@provide(UserRepository)
export class UserRepository extends BaseRepository<IUser> {

    private _db: IDatabase;

    constructor(@inject(TYPES.IDatabase) db: IDatabase) {
        super();
        this._db = db;
    }

    find(params: any): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    async findOne(id: string, params: any): Promise<IUser> {
        const results =  await this._db.query('SELECT * FROM users WHERE username=$1' ,[id]);
        return results.rows;
        throw new Error("Method not implemented.");
    }
    async create(item: IUser): Promise<IUser> {
        const values = Object.values(item);
        return this._db.query('INSERT INTO users (name , username , password, email) VALUES($1, $2, $3, $4)', values);
        throw new Error("Method not implemented.");
    }
    update(id: string, item: IUser, params: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string, params: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}