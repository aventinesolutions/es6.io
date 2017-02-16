import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url as homePageUrl, hello, yearsOld, boyFriend } from './src/config';
import  User, { createUrl, gravatar } from './src/user';

const frimmel = new User('Frimmel Farley', 'ffarley@reelmetrics.com', 'aventinesolutions.biz');
const profile = createUrl(frimmel.name);
const img = gravatar(frimmel.email);
console.log(frimmel);
console.log(profile);
console.log(img);
