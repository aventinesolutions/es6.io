import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

console.log(insane, jsonp, uniq);

const ages = [1, 1, 4, 52, 12, 4, 69, 69];

console.log(uniq(ages));
