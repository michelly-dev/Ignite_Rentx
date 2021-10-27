import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IImportCategory {
  name: string,
  description: string
}

@injectable()
class ImportCatrgoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesReposity: ICategoriesRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, rejecte) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, description] = line;

        categories.push({
          name,
          description,
        });
      })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          rejecte(err);
        });
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoriesReposity.findByName(name);

      if (!existCategory) {
        await this.categoriesReposity.create({
          name,
          description,
        });
      }

    });
  }
}

export { ImportCatrgoryUseCase };
