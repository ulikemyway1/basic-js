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
  ({repeatTimes = 1, separator = '+', addition ='', additionRepeatTimes = 1, additionSeparator = '|'} = options);
  let resultLine = '';
  for (let i = 0; i < repeatTimes; i++) {
    if (str === null) {
      resultLine += 'null'
    } else {
      resultLine += str + '';
    }

    
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (addition === null) {
          resultLine += 'null'
        } else {
          resultLine += addition + '';
        }

        if (additionSeparator.toString() && additionRepeatTimes > 1 && j != additionRepeatTimes - 1) {
          resultLine += additionSeparator.toString();
        }

      }
    
    if (separator.toString() && i != repeatTimes - 1) {
      resultLine += separator.toString();
    }
  }
  return resultLine;
}

console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
module.exports = {
  repeater
};
