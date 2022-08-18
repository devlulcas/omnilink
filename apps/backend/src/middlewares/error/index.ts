import { NextFunction, Request, response, Response } from "express";
import { HttpError } from "../../exceptions/http-error";

export function errorHandler(
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code = error.code || 500;
  const message = error.message || "algo deu errado";

  res.status(code).send({
    status: code,
    message,
  });
}
