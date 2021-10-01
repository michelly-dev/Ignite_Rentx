import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificatiosRepository) {}
   execute({ name, description }: IRequest): void {
    const specificationAlreadExists = this.specificationsRepository.findByName(name);

    if(specificationAlreadExists) {
      throw new Error("Category Already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
