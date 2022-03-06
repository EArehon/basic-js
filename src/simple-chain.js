const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res : [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(pos) {
    if (!Number.isInteger(pos) || pos-1 < 0 || pos-1 >= this.getLength()) {
      this.res = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.res.splice(pos-1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let str = this.res.join('~~');
    this.res = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
