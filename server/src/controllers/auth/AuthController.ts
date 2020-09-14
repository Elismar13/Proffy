import { Request, Response } from 'express';
import UserValidation from './UserValidation';
import FindUser from './FindUser';
import CreateNewUser from './CreateNewUser';

export default class UserAuth {
  validate: UserValidation;
  createNewUser: CreateNewUser;
  findUser: FindUser;

  constructor() {
    this.validate = new UserValidation();
    this.createNewUser = new CreateNewUser();
    this.findUser = new FindUser();
    this.Auth = this.Auth.bind(this);
  }

  async Auth(request: Request, response: Response) {
    const { email, password } = request.body;

    const userAlreadyExists = await this.findUser.findUserByEmail(email);

    if(!userAlreadyExists) {
      const user = await this.createNewUser.create(email, password);
      return response.status(201).send(user);
    }

    return response.status(400).send({ error: "email already exists" });
  }
}