/**
 * Created by matthew on 16-02-2017.
 */

export const apiKey = 'frimmel';
export const url = 'http://aventinesolutions.eu';

export function hello(name) {
  console.log(`Hello there ${name}!!!`);
}

const age = 92;
const boyFriend = 'Steve Greeley';

export { age as yearsOld, boyFriend };
