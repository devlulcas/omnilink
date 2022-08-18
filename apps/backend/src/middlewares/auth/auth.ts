import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { HttpError } from "../../exceptions/http-error";
import { validateToken } from "./utils";

export async function JWTAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string = req.cookies.jwt;

    if (!token) throw new HttpError("invalid token", 401);

    const decoded = await validateToken(token);

    // Todo: Fazer com que a informação do código seja acessível em outros locais
    console.log(decoded);

    next();
  } catch (untypedError) {
    const error = untypedError as Error;

    if (error.name === "TokenExpiredError") {
      throw new HttpError("expired token", 401);
    }

    throw new HttpError("failed to authenticate", 401);
  }
}
