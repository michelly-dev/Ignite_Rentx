import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

    const userAlreadExists = await this.usersRepository.findByEmail(email);

    if (userAlreadExists) {
      throw new AppError("User alread exusts");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license
    });
  }
}

export { CreateUserUseCase };