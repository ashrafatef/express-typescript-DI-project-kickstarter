import { provide } from "inversify-binding-decorators";
import { ITask } from "../../config/validation/tasks";
import { TaskRepository } from "./task.repository";

@provide(TasksService)
export class TasksService {
  constructor(private _taskRepo: TaskRepository) {}
  
  async create(body:ITask):Promise<any>{
    return this._taskRepo.create(body);
  }

  async find(){

  }

  async findById(id:number){

  }

  async delete(id:number){

  }

  async update(data:ITask , id:number){

  }
}
