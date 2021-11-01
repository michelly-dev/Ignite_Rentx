import { container } from "tsyringe";

import {
  UsersRepository
} from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import {
  IUsersRepository
} from "@modules/accounts/repositories/in-memory/IUsersRepository";
import {
  ICategoriesRepository
} from "@modules/cars/repositories/ICategoriesRepository"
import {
  CategoriesRepository
} from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import {
  SpecificationsRepository
} from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import {
  ISpecificatiosRepository
} from "@modules/cars/repositories/ISpecificatiosRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificatiosRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);
