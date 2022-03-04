const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let rep = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let sep = options.hasOwnProperty('separator') ? options.separator : '+';
  let add = options.hasOwnProperty('addition') ? options.addition : '';
  let addRep = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let addSep = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  
  let resAdd = add;
  
  for (let i = 1; i < addRep; i++) {
    resAdd += addSep + add;
  }
  
  let res = str + resAdd;
  
  for (let i = 1; i < rep; i++) {
    res += sep + str + resAdd;
  }
  
  return res;
}

module.exports = {
  repeater
};
