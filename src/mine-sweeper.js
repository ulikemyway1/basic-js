const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    
    for (let j = 0; j < matrix[0].length; j++) {
      let value = 0;
    if (matrix[i]) {
      if (matrix[i][j + 1]) {
        value++;
      }
      if (matrix[i][j - 1]) {
        value++;
      }
    }
    if (matrix[i - 1]) {
      if (matrix[i - 1][j]) {
        value++;
      }
      if (matrix[i -1][j + 1]) {
        value++;
      }
      if (matrix[i -1][j - 1]) {
        value++;
      }
    }

    if (matrix[i + 1]) {
      if (matrix[i + 1][j]) {
        value++;
      }
      if (matrix[i + 1][j + 1]) {
        value++;
      }
      if (matrix[i + 1][j - 1]) {
        value++;
      }
    }
    row.push(value);
    }
    result.push(row)
  }
  return result;
}

// console.log(minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]))
module.exports = {
  minesweeper
};
