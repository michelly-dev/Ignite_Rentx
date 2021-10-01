import { Specification } from "../../model/Specification";
import { ISpecificatiosRepository, ICreateSpecificationDTO } from "../ISpecificatiosRepository";


class SpecificationsRepository implements ISpecificatiosRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  create({ description, name }: ICreateSpecificationDTO): void {

    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date
    });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) =>
    specification.name === name);
    return specification;
  }
}

export { SpecificationsRepository };
