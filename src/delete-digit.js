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
  const arr = n.toString().split('');
  let variants = [];
  for (let i = 0; i < arr.length; i += 1) {
    let variant = [];
    for (let j = 0; j < arr.length; j +=1) {
      if (j != i) {
        variant.push(arr[j]);
      }
    }
    variants.push(variant.join(''));
  }
  return Math.max(...variants)
}

module.exports = {
  deleteDigit
};
