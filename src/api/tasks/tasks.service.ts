import { provide } from "inversify-binding-decorators";
import { IService, TYPES } from "../../common/types/services";
import { TaskRepository } from "./task.repository";

@provide(TasksService)
export class TasksService {
  constructor(private _taskRepo: TaskRepository) {}
  async initialize() {
    await this._taskRepo.find();
    console.log("Hi From Service");
  }
}
