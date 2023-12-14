const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const postions = [];
  const result = Array(arr.length).fill(0);
  arr.forEach((item, index) => {
    if (item == -1) {
      postions.push(index)
    }
  })
  postions.forEach((index) => {
    result[index] = -1;
  })
  const filtred = arr.filter((item) => {
    if (item !== -1) {
      return item;
    }
  })
  filtred.sort ((a, b) => a - b);
  let i = 0;
  result.forEach((item, index, arr) => {
    if (item === 0) {
      arr[index] = filtred[i];
      i += 1;
    }
  })
  return result;
}

module.exports = {
  sortByHeight
};
