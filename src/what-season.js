const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error("Invalid date!");

  let mounts = ['winter', 'spring', 'summer', 'fall'];

  return mounts[date.getMonth() == 11 ? 0 : Math.floor((date.getMonth()+1)/3)];
}

module.exports = {
  getSeason
};
