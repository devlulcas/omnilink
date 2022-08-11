import { Router } from "express";

const authRouter = Router();

authRouter.post("/signin");
authRouter.post("/signup");
authRouter.post("/signout");

export { authRouter };
