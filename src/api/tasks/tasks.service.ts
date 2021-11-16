import { provide } from "inversify-binding-decorators";
import { IService, TYPES } from "../../common/types/services";
import { ITask } from "../../config/validation/tasks";
import { TaskRepository } from "./task.repository";

@provide(TasksService)
export class TasksService {
  constructor(private _taskRepo: TaskRepository) {}
  async initialize() {
    await this._taskRepo.find();
    console.log("Hi From Service");
  }
  
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
