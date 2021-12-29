import { provide } from "inversify-binding-decorators";
import pino from "pino";
import { pinoConfig } from "./logger.config";

@provide(Logger)
export class Logger{
    logger:pino.Logger;

    constructor(){
        this.logger = pino(pinoConfig)
    }
}