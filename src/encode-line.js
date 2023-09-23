const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];

  for (let i=0; i<str.length; i += 1) {  
      let count = 1;
      while (str[i] === str[i+1]) {
        count++;
        i++;
      }
      result.push(`${count && count !== 1 ? count : ''}${str[i]}`);
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
