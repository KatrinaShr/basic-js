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
  const season = ['spring', 'summer', 'autumn', 'winter'];

  if (date === undefined) { return "Unable to determine the time of year!"; } 
  if (!(date instanceof Date) || !(date instanceof Object) || date.hasOwnProperty.length === 0) { throw new Error("Invalid date!"); } 

  try { 
    date.toLocaleString();
  }
  catch(e) {
    if (e) { throw new Error("Invalid date!"); }}

  let month = new Date(date).getMonth();

  if (month === 0 || month === 1 || month === 11) { return season[3]; }
  if (month === 2 || month === 3 || month === 4) { return season[0]; }   
  if (month === 5 || month === 6 || month === 7) { return season[1]; }
  if (month ===  8 || month === 9 || month === 10) { return season[2]; }

}

module.exports = {
  getSeason
};