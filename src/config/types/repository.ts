import { injectable } from "inversify";
import { IDatabase } from ".";
import { DatabaseConnection } from "../../bootstrap/databases";
import { ITask } from "../validation/tasks";

interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T, params:any): Promise<boolean>;
  delete(id: string , params:any): Promise<boolean>;
}

export interface IRead<T> {
  find(params:any): Promise<T[]>;
  findOne(id: string , params:any): Promise<T>;
}

// TODO:make it abstract properties to force sub class to implement it differently

@injectable()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  abstract find(params:any): Promise<T[]>;
  abstract findOne(id: string,params:any): Promise<T>;
  abstract create(item: T): Promise<T>;
  abstract update(id: string, item: T , params:any): Promise<boolean>;
  abstract delete(id: string, params:any): Promise<boolean>;
}
