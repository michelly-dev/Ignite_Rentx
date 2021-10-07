import { Request, Response } from "express";

import { ImportCatrgoryUseCase } from "../importCategory/ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCatrgoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController }
