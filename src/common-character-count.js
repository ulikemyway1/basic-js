const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let m1 = s1.split(''),
        m2 = s2.split('');
  let index;
  if (s1.length >= s2.length) {
    index = s2.length;
  } else {
    index = s1.length;
  }
  let count = 0;
  for (let i = 0; i < index; i += 1) {
   
    if (m2.indexOf(m1[i]) != -1) {
      count += 1;
      m2[m2.indexOf(m1[i])] = null;
    }
  }
  return count;
}


module.exports = {
  getCommonCharacterCount
};
