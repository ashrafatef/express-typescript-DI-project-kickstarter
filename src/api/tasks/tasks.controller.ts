import { NextFunction, Response, Request } from "express";
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
import { BadRequestError } from "../../config/types/errors";
import {
  ControllerBase,
  IControllerBase,
} from "../../config/types/controllers";
import { IService, TYPES } from "../../config/types/services";
import { taskCreatePayload } from "../../config/validation/tasks";
import { TasksService } from "./tasks.service";

@controller("/tasks")
export class TasksController extends ControllerBase {
  constructor(private _taskService: TasksService) {
    super();
  }

  @httpPost("/")
  async create(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<any> {
    const { body } = req;
    console.log("body =====>", req.body);
    this.validate(taskCreatePayload, body);
    const results = await this._taskService.create(body);
    return res.formatter.ok(results)
  }

  @httpDelete("/:id")
  delete(@request() req: Request, @response() res: Response, @next() next: NextFunction, @requestParam("id") id: string): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  @httpPut("/:id")
  update(@request() req: Request, @response() res: Response, @next() next: NextFunction, @requestParam("id") id: string): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  @httpGet("/")
  async get(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Response> {
    // throw new BadRequestError("bad request");
    return res.json("is up and running");
  }

  @httpGet("/:id")
  getById(@request() req: Request, @response() res: Response, @next() next: NextFunction, @requestParam("id") id: string): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
