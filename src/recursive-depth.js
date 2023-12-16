const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // not recursive solution 
  // calculateDepth(arr) {
  //   let depth = 1;
  //   function hasArray(arr) {
  //     let amount = 0;
  //     arr.forEach((item) => {
      
  //       if (Array.isArray(item)) {
  //         amount++;
  //       }
  //     })
  //     return amount;
  //   }
  //   while (hasArray(arr)) {
  //     arr = arr.flat();
  //     depth++;
  //   }

  //   return depth;
  // }
  //<<
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let maxDepth = 0;

    for (let i = 0; i < arr.length; i += 1) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));
    }
    return maxDepth + 1;
}
}


module.exports = {
  DepthCalculator
};
