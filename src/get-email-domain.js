const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.split('').splice(email.split('').lastIndexOf('@') + 1, email.length - 1).join('');  
}

module.exports = {
  getEmailDomain
};
