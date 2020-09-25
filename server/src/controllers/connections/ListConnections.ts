import db from "../../database/connection";

class ListConnections {
  async list() {
    const [connectionNumber] = await db('connections').count('* as total');
    
    return connectionNumber;
  }
}

export default ListConnections;