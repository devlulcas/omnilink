import { Request, Response, Router } from "express";
import { generateToken } from "../middlewares/auth";

function logIt(req: Request, res: Response) {
  if (process.env.NODE_ENV !== "production") {
    const token = generateToken({ id: 1, name: "Developer" });
    console.log(token);
    res.cookie("jwt", token);
  }

  res.send({ passed: true });
}

const authRouter = Router();

authRouter.post("/signin", logIt);
authRouter.post("/signup");
authRouter.post("/signout");

export { authRouter };
