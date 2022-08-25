import { NextFunction, Request, Response } from "express";

export class UserController {
  signUp(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    console.log(body);
    res.send(body);
  }
}
