import { Router } from "express";
import { RequerimentRouter } from "./requerimentRouter";

export class RootRouter {
  private static instance: RootRouter;
  private router: Router;

  constructor() {
    this.router = Router();
    this.router.use(
      "/v1/liquidations/requeriment/",
      RequerimentRouter.getRouter()
    );
  }

  static getRouter(): Router {
    if (!RootRouter.instance) {
      RootRouter.instance = new RootRouter();
    }
    return RootRouter.instance.router;
  }
}
