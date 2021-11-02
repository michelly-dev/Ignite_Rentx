import { Router } from "express";
import {
  ensureAuthenticatd
} from "@shared/infra/http/middlewares/ensureAuthenticated";

import {
  CreateSpecificationController
} from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", ensureAuthenticatd, ensureAdmin, createSpecificationController.handle);

export { specificationsRoutes };
