import db from "../../database/connection";

export default class FindUser {
  async findUserByEmail(email: string) {
    const users = await db('users')
      .select('*')
      .where('users.email', '=', email);

    return users[0];
  }
}