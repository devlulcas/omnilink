import { Router } from "express";

const linkRouter = Router();

linkRouter.get("/");
linkRouter.delete("/");
linkRouter.get("/:id");
linkRouter.put("/:id");

export { linkRouter };
