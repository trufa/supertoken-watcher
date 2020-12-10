import Identicon from 'identicon.js';

export const getIdenticonData = (hash: string): string => {
  return new Identicon(hash, 20).toString();
}