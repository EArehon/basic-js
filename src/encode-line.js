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
  let res = [];
  
  str.split('').forEach((el, index) => {
    if (el == str[index-1]) 
      return res[res.length-1][0] +=1;
    return res.push([1, el]);
  });
  
  return res.map(el => el.join('')).join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
