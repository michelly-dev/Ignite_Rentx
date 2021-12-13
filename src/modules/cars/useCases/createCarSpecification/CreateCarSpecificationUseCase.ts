import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificatiosRepository } from "@modules/cars/repositories/ISpecificatiosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificatiosRepository
  ) { }

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);
  }
}

export { CreateCarSpecificationUseCase };
