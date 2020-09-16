import db from '../../database/connection'
import Password from './Password';

export default class UserValidation extends Password {
  constructor() {
    super();
  }

  async validate(email: string, password: string) {
    const user = await db('users')
      .select('*')
      .where('users.email', '=', email)
      .where('users.password', '=', this.crypt(password));

    return user[0];
  }
}