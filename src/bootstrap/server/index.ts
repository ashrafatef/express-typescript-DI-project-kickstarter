import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
import "../../utils";
import "../../api";
import "../databases";
import { DatabaseConnection } from "../databases";
import { buildProviderModule } from "inversify-binding-decorators";
import { Container, interfaces } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { responseEnhancer } from "express-response-formatter";
import { BaseError } from "../../config/types/errors";
import Ajv from "ajv";
import { Logger } from "../../utils/logger/logger.service";
import expressPinoLogger from "express-pino-logger";
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
    await databaseInstance.initialize(this.config.db);
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

  private validate(schema: any, payload: any) {
    const ajv = new Ajv()
    const validate = ajv.compile(schema);
  }

  private initializeServerConfig() {
    const loggerInstance = this.appContainer.get<Logger>(Logger);

    this.server.setConfig((app: Application) => {
      app.use(express.json());
      app.use(express.urlencoded());
      app.use(responseEnhancer());
      app.use((req: any, res: Response, next: NextFunction) => {
        req.validate = this.validate;
        next();
      });
      app.use(expressPinoLogger(
        {
          logger: loggerInstance.logger,
          customSuccessMessage: function (res: any) {
            return `${res.req.ip} - ${res.req.method} - ${res.req.url} - ${res.statusCode} - time:${res.responseTime}`;
          },
        }
      ))
    });

    this.server.setErrorConfig((app: Application) => {
      app.use((err: BaseError, req: Request, res: Response, next: NextFunction) => {
        const key = err.key;

        console.log(err)
        if (key) {
          return res.formatter[key](err.formate())
        }
        return res.formatter.serverError('Internal Server Error', err);
      });
    });
  }

  bootstrap(): Promise<any> {
    return this.startServer();
  }
}
