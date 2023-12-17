const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [], 
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    const item = String(value);
    this.result.push(`( ${item} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.result.length || position < 1 || position === null || isNaN(position)) {
      this.result = [];
      throw new TypeError("You can't remove incorrect link!");
    } else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
   this.result = this.result.reverse();
    return this;
  },
  finishChain() {
   const finishedChain = this.result.join('~~');
   this.result = [];
   return finishedChain;
  }
};
console.log(chainMaker.addLink().finishChain())
module.exports = {
  chainMaker
};

