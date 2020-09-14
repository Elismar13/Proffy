import db from '../../database/connection';

export default class CreateNewUser {
  async create(email: string, password: string) {
    const user = await db('users').insert({
      email,
      password
    });

    return user;
  }
}