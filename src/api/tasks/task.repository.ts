import { provide } from "inversify-binding-decorators";
import { BaseRepository } from "../../common/types/repository";

interface ITasks{
    name:string;
}

@provide(TaskRepository)
export class TaskRepository extends BaseRepository<ITasks>{
    
}