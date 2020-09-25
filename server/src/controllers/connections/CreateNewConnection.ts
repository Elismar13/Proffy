import db from "../../database/connection";

class CreateNewConnection {
  async create(user_id: number) {
    await db('connections').insert({
        user_id
    });
  }
}

export default CreateNewConnection;