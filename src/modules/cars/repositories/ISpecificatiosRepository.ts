import { Specification } from "../infra/typeorm/entities/Specification";


interface ICreateSpecificationDTO {
  name: string;
  description: string
}

interface ISpecificatiosRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificatiosRepository, ICreateSpecificationDTO };
