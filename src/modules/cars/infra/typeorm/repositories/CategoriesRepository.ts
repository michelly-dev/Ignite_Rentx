import { getRepository, Repository } from "typeorm";

import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private reposiory: Repository<Category>;

  constructor() {
    this.reposiory = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {

    const category = this.reposiory.create({
      description,
      name,
    });

    await this.reposiory.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = this.reposiory.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.reposiory.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
