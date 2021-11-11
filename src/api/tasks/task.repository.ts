import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { Database } from "../../bootstrap/databases/mysql/mysqlDatabase";
import { IDatabase, TYPES } from "../../common/types";
import { BaseRepository } from "../../common/types/repository";

interface ITasks {
  name: string;
}

@provide(TaskRepository)
export class TaskRepository extends BaseRepository<ITasks> {
  private _db: IDatabase;

  constructor(@inject(TYPES.IDatabase)db: IDatabase) {
    super();
    this._db = db;
  }

  async find(): Promise<ITasks[]> {
    console.log("From Find Function :");
    console.log(this._db.query);
    await this._db.query("SELECT * FROM Tasks",[])
    return Promise.resolve([
      {
        name: "ashraf",
      },
    ]);
  }

  findOne(id: string): Promise<ITasks> {
    throw new Error("Method not implemented.");
  }

  create(item: ITasks): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: ITasks): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
