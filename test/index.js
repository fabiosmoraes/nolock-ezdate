const { currentDate, isBusinessDay, getBusinessDay, getNextBusinessDay, getNationalHolidays, isHoliday, getDate, getYear, formatDate, TypeDate, formatDateBRToDB, isBusinessDayBetweenHours, inTheTimeInterval } = require("../dist");

console.log('isBussinesDay -', isBusinessDay('2021-01-01'));
console.log('isBussinesDay -', isBusinessDay('2021-07-17'));
console.log('getBusinessDay -', getBusinessDay('2021-12-25'));
console.log('getNextBusinessDay -', getNextBusinessDay('2021-01-01'));
console.log('getNationalHolidays -', getNationalHolidays());
console.log('isHoliday -', isHoliday());
console.log('isHoliday (ano novo)-', isHoliday('2021-01-01'));
console.log('isHoliday (carnaval)-', isHoliday('2021-02-15'));
console.log('getDate -', getDate('2021-07-19'));
console.log('currentDate -', currentDate());
console.log('getYear -', getYear());
console.log('formatDate -', formatDate('2021-07-19', TypeDate.BR));
console.log('formatDate -', formatDate('2021-07-20T23:59:00.371Z', TypeDate.BR));
console.log('getNationalHolidays -', getNationalHolidays('2024'));
console.log('formatDateBRToDB -', formatDateBRToDB('08/12/2022'));
console.log('isBusinessDayBetweenHours -', isBusinessDayBetweenHours({ date: '2022-02-08T18:30:00', initial_hour: 6, final_hour: 18 }))
console.log('inTheTimeInterval -', inTheTimeInterval('01:30:00',{start: '20:00:00', end: '06:00:00'}))