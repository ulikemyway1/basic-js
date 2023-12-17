const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    const tArr = [...arr];
    for(let i = 0; i < tArr.length; i++) {
      if (tArr[i] === '--discard-next') {
        tArr[i + 1] = null;
        i++;
      }
    }
    for (let i = 0; i < tArr.length; i++)  {
      if (tArr[i] === '--double-prev') {
        tArr.splice(i - 1, 0, tArr[i - 1]);
        i++;
      }
    }

        for (let i = 0; i < tArr.length; i++)  {
      if (tArr[i] === '--double-next') {
        tArr.splice(i + 1, 0, tArr[i + 1]);
        i++;
      }
    }
    for(let i = 0; i < tArr.length; i++) {
      if (tArr[i] === '--discard-prev') {
        tArr[i - 1] = null;
        i++;
      }
    }

    const mArr = [];
    tArr.forEach((item, index) => {
      if (item !== '--double-next' && item !== '--discard-prev' && item !== '--discard-next' && item !== '--double-prev' ) {
        mArr.push(item);
      } else {
        mArr.push('control')
      }
      
  
    })
    return mArr.filter((item) => {
      if (item !== 'control' && item !== null) {
        return item;
      }
    });
  }

}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
module.exports = {
  transform
};
