export interface IServiceBase<T> {
  create(data: T): Promise<any>;
  delete(id: number, params: any): Promise<any>;
  update(id: string, params: any, data: T): Promise<any>;
  get(query: any): Promise<any>;
  getById(id: string, params: any): Promise<any>;
}

export const TYPES = {
  TaskService: Symbol("TaskService"),
  IDatabase: Symbol("IDatabase"),
  DatabaseConnection: Symbol("DatabaseConnection")
};
