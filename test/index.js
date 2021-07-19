const { currentDate, isBusinessDay, getBusinessDay, getNextBusinessDay, getNationalHolidays, isHoliday, getDate, getYear, formatDate, TypeDate } = require("../dist");

console.log('isBussinesDay -', isBusinessDay());
console.log('getBusinessDay -', getBusinessDay('2021-12-25'));
console.log('getNextBusinessDay -', getNextBusinessDay(new Date(), 5));
console.log('getNationalHolidays -', getNationalHolidays());
console.log('isHoliday -', isHoliday());
console.log('isHoliday -', isHoliday('2021-01-01'));
console.log('getDate -', getDate('2021-07-19'));
console.log('currentDate -', currentDate());
console.log('getYear -', getYear());
console.log('formatDate -', formatDate('2021-07-19', TypeDate.BR));
