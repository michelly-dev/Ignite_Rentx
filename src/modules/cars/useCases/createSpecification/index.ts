import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationUseCase };
