import "reflect-metadata";
import express from "express";
// import { server, databaseContainer } from "../../inversify.config";
import "../../api";
import "../databases";
import { Database, DatabaseConnection } from "../databases";
import { buildProviderModule } from "inversify-binding-decorators";
import { Container, interfaces } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

export class Server {
  config: any;
  app: any | undefined;
  server: any;
  appContainer: Container = new Container;
  constructor(config: any) {
    this.config = config;
  }

  private async startServer() {

    this.initializeAppContainer();
    await this.initializeMySQLDatabase();
    // this.initializeServerConfig();
    this.app.listen(this.config.port, (err: any) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.config.port}`);
    });
  }

  async initializeMySQLDatabase(): Promise<any> {
    const databaseInstance = this.appContainer.get<DatabaseConnection>(DatabaseConnection);
    await databaseInstance.initialize(this.config);
  }
  initializeServer(appContainer: interfaces.Container) {
    const server = new InversifyExpressServer(appContainer);
    this.app = server.build();
  }
  initializeAppContainer() {
    this.appContainer = new Container();
    this.appContainer.load(buildProviderModule());
    this.initializeServer(this.appContainer);
  }
  private initializeServerConfig() {
    this.app.setConfig((app: any) => {
      app.use(express.json());
    });
  }

  bootstrap(): Promise<any> {
    return this.startServer();
  }
}
