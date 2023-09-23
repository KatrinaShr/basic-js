const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) { return {} } 

  else {
    let domainHight = '.' + domains[0].split('.').at(-1);
    let result = {};
    let count = 0;
    
    domains.reduce((accumulator, currentValue, index) => {
      if (index === 0) { result[domainHight] = domains.length; }
      
      let currentProperty = '.' + currentValue.split('.').reverse().join('.');
      let currentOption = currentValue.split('.')[0];
  
      domains.forEach(element => {
        if ( element.match(currentOption)) { count++ } 
      });
  
      result[currentProperty] = count;
      count = 0;
    }, result);
  
    return result;
  }
}

module.exports = {
  getDNSStats
};
