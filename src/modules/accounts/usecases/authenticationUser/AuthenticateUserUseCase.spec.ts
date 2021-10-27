import {
  UsersRepositoryInMemory
} from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import {
  CreateUserUseCase
} from "@modules/accounts/usecases/createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { AppError } from "@shared/errors/AppError";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRespositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate USer", () => {
  beforeEach(() => {
    usersRespositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRespositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRespositoryInMemory);
  })

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "01234",
      email: "user@test.com",
      password: "123",
      name: "User Test"
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an noneexistente user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1111",
        email: "user@user.com",
        password: "147",
        name: "User Test Error",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorreactPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
