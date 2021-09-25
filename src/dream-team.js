import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
  	return false;
  }
	let str = '';
	for (let i of members) {
  	if (typeof i === 'string') {
    let count = 0;
  	for (let x of i) {
    if (x !== ' ' && count === 0) {
      	str += x.toUpperCase();
				count = 1;
    }
    }
    }
    }
  return str.split('').sort().join('');
}
