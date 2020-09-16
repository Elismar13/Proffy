import { Request, Response } from 'express';
import UserValidation from './UserValidation';
import FindUser from './FindUser';
import CreateNewUser from './CreateNewUser';
import TokenGenerator from './TokenGenerator';

export default class UserAuth {
  validate: UserValidation;
  createNewUser: CreateNewUser;
  findUser: FindUser;
  tokenGenerator: TokenGenerator;

  constructor() {
    this.validate = new UserValidation();
    this.createNewUser = new CreateNewUser();
    this.findUser = new FindUser();
    this.tokenGenerator = new TokenGenerator();
    this.auth = this.auth.bind(this);
    this.create = this.create.bind(this);
  }

  async auth(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await this.validate.validate(email, password);

    if(!user) {
      return response.status(404).send({
        auth: false,
        userToken: null,
      }); 
    }
    const userToken = this.tokenGenerator.generateJwt(user.id);

    return response.status(200).send({
      auth: true,
      userToken,
    });
  }

  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const userAlreadyExists = await this.findUser.findUserByEmail(email);

    if(!userAlreadyExists) {
      const user = await this.createNewUser.create(email, password);
    }

    return response.status(400).send({ error: "email already exists" });
  }

}