import { Specification } from "../entities/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository"


interface ICreateSpecificationDTO {
  name: string;
  description: string
}

interface ISpecificatiosRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificatiosRepository, ICreateSpecificationDTO };
