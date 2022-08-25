import { Request, Response, Router } from "express";
import { JWTAuth } from "../middlewares/auth.middleware";

function logIt(req: Request, res: Response) {
  res.send({ passed: true });
}

const linkRouter = Router();

linkRouter.get("/", JWTAuth, logIt);
linkRouter.delete("/", JWTAuth, logIt);
linkRouter.get("/:id", JWTAuth, logIt);
linkRouter.put("/:id", JWTAuth, logIt);

export { linkRouter };
