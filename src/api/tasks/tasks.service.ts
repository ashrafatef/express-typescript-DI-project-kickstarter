import { provide } from "inversify-binding-decorators";
import { IService, TYPES } from "../../common/types/services";
import { TaskRepository } from "./task.repository";

@provide(TYPES.TaskService)
export class TasksService implements IService {
    constructor(private _taskRepo: TaskRepository){}
    initialize(){
        this._taskRepo.create({
            name:"task A"
        });
        console.log("Hi From Service")
    }
}
