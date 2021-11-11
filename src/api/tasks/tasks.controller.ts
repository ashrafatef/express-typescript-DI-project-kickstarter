import express from "express";
import { inject } from "inversify";
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  next,
  request,
  requestParam,
  response,
} from "inversify-express-utils";
import { IControllerBase } from "../../common/types/controllers";
import { IService, TYPES } from "../../common/types/services";
import { TasksService } from "./tasks.service";

@controller("/tasks")
export class TasksController implements IControllerBase {
  // kat:IService;
  constructor(private katana: TasksService) {
    // this.kat = katana;
  }
  @httpPost("/")
  create(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction
  ) {
    throw new Error("Method not implemented.");
  }
  @httpDelete("/:id")
  delete(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction,
    @requestParam("id") id: string
  ) {
    throw new Error("Method not implemented.");
  }
  @httpPut("/:id")
  update(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction,
    @requestParam("id") id: string
  ) {
    throw new Error("Method not implemented.");
  }
  @httpGet("/")
  async get(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction
  ) {
    await this.katana.initialize();
    return res.json("is up and running");
  }
  @httpGet("/:id")
  getById(
    @request() req: express.Request,
    @response() res: express.Response,
    @next() next: express.NextFunction,
    @requestParam("id") id: string
  ) {
    throw new Error("Method not implemented.");
  }
}
