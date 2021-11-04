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


export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  constructor(db: DatabaseConnection) {}
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(item: T): Promise<boolean> {
      console.log("Hellllllllo from CREATE")
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
