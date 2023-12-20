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
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (error) {
    throw Error("Invalid date!");
  }
  const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  const month = date.getMonth();
  return season[month];
}

module.exports = {
  getSeason
};
