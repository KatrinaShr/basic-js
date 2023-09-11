const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let additionalText = [];

  if (options.additionRepeatTimes === undefined) { options.additionRepeatTimes = 1 }  

  while (options.additionRepeatTimes > 0) {
      additionalText.push(options.addition === null ? 'null' : options.addition);
      options.additionRepeatTimes--;
  }
  
  if (options.repeatTimes === undefined) { options.repeatTimes = 1 }  

  while (options.repeatTimes > 0) {
    result.push(str + additionalText.join(options.additionSeparator ? options.additionSeparator : '|'));
    options.repeatTimes--;
  }
  return result.join(options.separator ? options.separator : '+')
}

module.exports = {
  repeater
};
