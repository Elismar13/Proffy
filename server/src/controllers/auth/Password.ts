import md5 from 'md5';

export default class Password {
  crypt(password: string): string {
    return md5(password);
  }
}