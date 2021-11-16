import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
// import { server, databaseContainer } from "../../inversify.config";
import "../../api";
import "../databases";
import { Database, DatabaseConnection } from "../databases";
import { buildProviderModule } from "inversify-binding-decorators";
import { Container, interfaces } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser from "body-parser";
import { responseEnhancer } from "express-response-formatter";
import { BaseError } from "./middlewares/errors";

export class Server {
  config: any;
  app: express.Application | any;
  server: InversifyExpressServer | any;
  appContainer: Container = new Container();

  constructor(config: any) {
    this.config = config;
  }

  private async startServer() {
    this.initializeAppContainer();
    await this.initializeDatabase();
    this.app.listen(this.config.port, (err: any) => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.config.port}`);
    });
  }

  async initializeDatabase(): Promise<any> {
    const databaseInstance =
      this.appContainer.get<DatabaseConnection>(DatabaseConnection);
    await databaseInstance.initialize(this.config);
  }

  initializeServer(appContainer: interfaces.Container) {
    this.server = new InversifyExpressServer(appContainer);
    this.initializeServerConfig();
    this.app = this.server.build();
  }

  initializeAppContainer() {
    this.appContainer = new Container();
    this.appContainer.load(buildProviderModule());
    this.initializeServer(this.appContainer);
  }

  private initializeServerConfig() {
    this.server.setConfig((app: Application) => {
      app.use(express.json());
      app.use(express.urlencoded());
      app.use(responseEnhancer());
    });

    this.server.setErrorConfig((app: Application) => {
      app.use((err: BaseError, req: Request, res: Response, next: NextFunction) => {
        const key = err.key;
        console.log(err.key)
        console.log(res.formatter)
        return res.formatter[key](err.formate())
      });
    });
  }

  bootstrap(): Promise<any> {
    return this.startServer();
  }
}
