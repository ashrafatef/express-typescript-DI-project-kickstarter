import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { Database } from "../../bootstrap/databases/mysql/database";
import { IDatabase, TYPES } from "../../config/types";
import { BaseRepository } from "../../config/types/repository";
import { ITask } from "../../config/validation/tasks";


@provide(TaskRepository)
export class TaskRepository extends BaseRepository<ITask> {
  private _db: IDatabase;

  constructor(@inject(TYPES.IDatabase)db: IDatabase) {
    super();
    this._db = db;
  }

  async find(): Promise<ITask[]> {
    console.log("From Find Function :");
    console.log(this._db.query);
    await this._db.query("SELECT * FROM Tasks",[])
    return Promise.resolve([
      {
        title: "ashraf",
        description:"aaa"
      },
    ]);
  }

  findOne(id: string): Promise<ITask> {
    throw new Error("Method not implemented.");
  }

  create(item: ITask): Promise<ITask> {
    const queryString = "INSERT INTO Tasks SET ?";
    console.log("THIS IS THE ITEM ====>" , item)
    return this._db.query(queryString,item)
  }

  update(id: string, item: ITask): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
