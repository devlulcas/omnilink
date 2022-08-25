import { UserController } from "@controllers/users.controller";
import { Request, Response, Router } from "express";
import { generateToken } from "@lib/jwt.lib";

function logIt(req: Request, res: Response) {
  if (process.env.NODE_ENV !== "production") {
    const token = generateToken({ id: 1, name: "Developer" });
    console.log(token);
    res.cookie("jwt", token);
  }

  res.send({ passed: true });
}

const userController = new UserController();

const authRouter = Router();

authRouter.post("/signin", logIt);
authRouter.post("/signup", userController.signUp);
authRouter.post("/signout");

export { authRouter };
