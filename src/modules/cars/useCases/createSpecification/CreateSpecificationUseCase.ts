import { inject, injectable } from "tsyringe";
import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificatiosRepository) { }
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadExists = await this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error("Category Already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
