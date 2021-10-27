import { Router } from "express";
import {
  ensureAuthenticatd
} from "@shared/infra/http/middlewares/ensureAuthenticated";

import {
  CreateSpecificationController
} from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticatd);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
