import db from '../../database/connection'
import Password from './Password';

export default class UserValidation {
  passwordGenerator: Password;

  constructor() {
    this.passwordGenerator =  new Password();
  }

  async validate(email: string, password: string) {
    const user = await db('users')
      .select('*')
      .where('users.email', '=', email)
      .where('users.password', '=', this.passwordGenerator.crypt(password));

    return user[0].id;
  }
}