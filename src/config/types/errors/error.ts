import { HTTPCODES } from "../../../../config/types";
import { ErrorFormateKey } from "./types";

export class BaseError extends Error {
  code: number;
  message: string;
  name: string;
  key!: ErrorFormateKey;
  constructor(message: any, code: number, name: string, key: ErrorFormateKey) {
    super(message);
    this.code = code;
    this.message = message;
    this.name = name;
    this.key = key;
  }

  formate() {
    return {
      code: this.code,
      error: this.name,
      message: this.message,
    };
  }
}

export class NotFoundError extends BaseError {
  constructor(message: any) {
    super(message, HTTPCODES.NOT_FOUND, "NotFound", ErrorFormateKey.NOT_FOUND);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message: string = "Unauthorized failed") {
    super(
      message,
      HTTPCODES.UNAUTHORIZED_ERROR,
      "UnAuthorized",
      ErrorFormateKey.UNAUTHORIZED
    );
  }
}

export class UnauthenticatedError extends BaseError {
  constructor(message: string = "Authentication Access") {
    super(
      message,
      HTTPCODES.UNAUTHENTICATED_ERROR,
      "UnAuthenticated",
      ErrorFormateKey.FORBIDDEN
    );
  }
}

export class BadRequestError extends BaseError {
  constructor(message: any) {
    super(message, HTTPCODES.BAD_REQUEST, "BadRequest", ErrorFormateKey.BAD_REQUEST);
  }
}

export class InternalServerError extends BaseError {
  constructor(message: any) {
    super(
      message,
      HTTPCODES.UNAUTHENTICATED_ERROR,
      "Internal Server Error",
      ErrorFormateKey.SERVER_ERROR
    );
  }
}

/**
 *
 * error middleware  in injectable class for middleware called errorMiddleware
 *
 *
 */

// interface IMiddleware{
//   handle()
// }

// export class ErrorMiddleware implements IMiddleware{

// }
