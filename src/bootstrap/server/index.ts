import "reflect-metadata";
import express from "express";
import "../databases";
import "../../api";
import { TYPES } from "../../common/types";
import { server, container } from "../../inversify.config";
import { DatabaseConnection } from "../databases";

export class Server {
  config: any;
  app: any | undefined;
  server: any;
  constructor(config: any) {
    this.config = config;
  }

  private startServer() {
    this.initializeMySQLDatabase();
    // set app configuration ( error handling , logger);
    this.initializeServerConfig();
    this.app = server.build();
    this.app.listen(this.config.port, (err: any) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.config.port}`);
    });
  }

  private initializeMiddlewares(): any {}

  initializeMySQLDatabase(): void {
    const databaseInstance = container.get<DatabaseConnection>(TYPES.DatabaseConnection);
    // for (const iterator of mysqlInstance) {
    //   console.log(iterator);
    //   iterator.initialize();
    // }
    databaseInstance.initialize();
  }
  private initializeServerConfig() {
    server.setConfig((app: any) => {
      app.use(express.json());
    });
  }

  bootstrap(): void {
    this.startServer();
  }
}
