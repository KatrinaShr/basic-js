const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = n.toString();
  let index = strN.length - 1;
  
  for ( let i = 0; i < index ; i++ ) {
    if ( strN[ i ] < strN[ i + 1 ] ) {
      index = i;
      break;
    }
  }
  return Number( strN.slice(0, index) + strN.slice(index + 1) );
}

module.exports = {
  deleteDigit
};
