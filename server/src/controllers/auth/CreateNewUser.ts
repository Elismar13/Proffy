import db from '../../database/connection';
import Password from './Password';

export default class CreateNewUser extends Password {
  constructor() {
    super();
  }

  async create(email: string, password: string) {
    const cryptedPassword = this.crypt(password);
    const user = await db('users').insert({
      email,
      password: cryptedPassword
    });

    return user[0];
  }
}