import csvParse from "csv-parse";
import fs from "fs";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string,
  description: string
}

class ImportCatrgoryUseCase {
  constructor(private categoriesReposity: ICategoryRepository) { }

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

      const existCategory = this.categoriesReposity.findByName(name);

      if (!existCategory) {
        this.categoriesReposity.create({
          name,
          description,
        });
      }

    });
  }
}

export { ImportCatrgoryUseCase };
