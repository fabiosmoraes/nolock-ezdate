const { getHours } = require("date-fns");
const { currentDate, isBusinessDay, getBusinessDay, getNextBusinessDay, getNationalHolidays, isHoliday, getDate, getYear, formatDate, TypeDate } = require("../dist");

console.log('isBussinesDay -', isBusinessDay());
console.log('getBusinessDay -', getBusinessDay());
console.log('getNextBusinessDay -', getNextBusinessDay());
// console.log('getNationalHolidays -', getNationalHolidays());
// console.log('isHoliday -', isHoliday());
// console.log('currentDate -', currentDate());
// console.log('getDate -', getDate('2021-07-19'));
// console.log('getYear -', getYear());
// console.log('formatDate -', formatDate('2021-07-19', TypeDate.DB));