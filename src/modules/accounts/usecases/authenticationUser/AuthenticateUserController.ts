import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authemticateUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authemticateUseCase.execute({
      password,
      email
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
