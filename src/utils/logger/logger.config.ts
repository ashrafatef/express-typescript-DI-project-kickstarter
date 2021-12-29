import pino, { LoggerOptions } from "pino";

const levels = {
    http: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
}

export const pinoConfig: LoggerOptions = {
    customLevels: levels,
    useOnlyCustomLevels: true,
    level: "http",
    timestamp: pino.stdTimeFunctions.isoTime,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            hideObject: true,
            messageFormat: true,
        }
    },
    formatters: {
        level(label, number) { return { level: label } },
        bindings(bindings) { return { pid: bindings.pid } },
        log(object) { return object },
    }
}