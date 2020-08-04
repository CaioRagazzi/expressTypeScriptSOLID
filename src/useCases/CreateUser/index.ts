import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgressUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }