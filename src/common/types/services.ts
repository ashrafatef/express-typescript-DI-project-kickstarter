export interface IService {
  initialize(...args: any[]): Promise<void> | void;
}

export const TYPES = {
  TaskService: Symbol("TaskService"),
  IDatabase: Symbol("IDatabase"),
  DatabaseConnection : Symbol("DatabaseConnection")
};
