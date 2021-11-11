import { injectable } from "inversify";
import { IDatabase } from ".";
import { DatabaseConnection } from "../../bootstrap/databases";

interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

// TODO:make it abstract properties to force sub class to implement it differently

@injectable()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  // constructor(db: IDatabase) {}
  abstract find(): Promise<T[]>;
  abstract findOne(id: string): Promise<T>;
  abstract create(item: T): Promise<boolean>;
  abstract update(id: string, item: T): Promise<boolean>;
  abstract delete(id: string): Promise<boolean>;
}
