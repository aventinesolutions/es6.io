import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url as homePageUrl, hello, yearsOld, boyFriend } from './src/config';

console.log(apiKey, homePageUrl);
console.log(insane, jsonp, uniq);

const ages = [1, 1, 4, 52, 12, 4, 69, 69];

console.log(uniq(ages));

hello('Bemb Binaughty');

console.log(`my boyfriend "${boyFriend}" is ${yearsOld} years old`);
