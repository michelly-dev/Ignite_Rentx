import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCatrgoryUseCase } from "./ImportCategoryUseCase";

const categoriesReposity = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCatrgoryUseCase(categoriesReposity);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
