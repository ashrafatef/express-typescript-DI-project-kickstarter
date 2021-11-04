import { provide } from "inversify-binding-decorators";
import { DatabaseConnection } from "../../bootstrap/databases";
import { BaseRepository } from "../../common/types/repository";

interface ITasks{
    name:string;
}

@provide(TaskRepository)
export class TaskRepository extends BaseRepository<ITasks>{
    constructor(db:DatabaseConnection){
        super(db);
    }
}