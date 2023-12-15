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
  const padStr = str + ' ';
  let i = 0;
  let result = '';
  for (; i < padStr.length; i++) {
    let k = 0;
    for (let j = i; j < padStr.length; j++) {
      if (padStr[i] !== padStr[j]) {
        if (k > 1) {
          result += `${k}${padStr[i]}`;
        } else {
          result += `${padStr[i]}`
        }
        
        i = j - 1;
        break;
      }
      k++;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
