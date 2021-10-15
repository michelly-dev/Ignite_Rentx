import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

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
