import jwt from 'jsonwebtoken';
require('dotenv-safe').config();

export default class TokenGenerator {
  constructor(){

  }

  generateJwt(userDatabaseId: number) {
    const token = jwt.sign({ userDatabaseId }, process.env.SECRET, {
      expiresIn: 900 //expires in 15min
    });

    return token;
  }
}