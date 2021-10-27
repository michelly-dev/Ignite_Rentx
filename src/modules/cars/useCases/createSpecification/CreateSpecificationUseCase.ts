import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import {
  ISpecificatiosRepository
} from "@modules/cars/repositories/ISpecificatiosRepository";

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
      throw new AppError("Token missing!", 401);
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
