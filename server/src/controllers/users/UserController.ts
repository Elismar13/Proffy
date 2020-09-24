import db from "../../database/connection";

interface UserInfo {
  id: number;
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

class User {
  constructor() {
    
  }

  async updateUserInfo(userInfo: UserInfo) {
    const { id, name, avatar, whatsapp, bio } = userInfo;

    const user = db('users')
      .update({
        id,
        name,
        avatar,
        whatsapp,
        bio,
      })
      .where('`user.id`', '=', id);
    
    return user;
  }
}