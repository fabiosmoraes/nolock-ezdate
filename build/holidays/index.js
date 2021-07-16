"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHoliday = exports.getNationalHolidays = void 0;
const date_fns_1 = require("date-fns");
const index_1 = require("../easter/index");
const index_2 = require("../current-date/index");
const index_3 = require("../format-date/index");
function _calculateCorpusChristi(easterDate) {
    return date_fns_1.add(new Date(easterDate), { days: 60 });
}
function _calculateCarnival(easterDate) {
    return date_fns_1.add(new Date(easterDate), { days: -47 });
}
function _calculateGoodFriday(easterDate) {
    return date_fns_1.add(new Date(easterDate), { days: -2 });
}
function getNationalHolidays(year) {
    const easterDate = index_1._calculateEaster(year);
    const corpusChristiDate = _calculateCorpusChristi(easterDate);
    const carnivalDate = _calculateCarnival(easterDate);
    const goodFridayDate = _calculateGoodFriday(easterDate);
    return [
        { date: date_fns_1.format(easterDate, 'yyyy-MM-dd'), description: 'Páscoa' },
        {
            date: date_fns_1.format(corpusChristiDate, 'yyyy-MM-dd'),
            description: 'Corpus Christi',
        },
        { date: date_fns_1.format(carnivalDate, 'yyyy-MM-dd'), description: 'Carnaval' },
        {
            date: date_fns_1.format(goodFridayDate, 'yyyy-MM-dd'),
            description: 'Sexta-feira Santa',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-01-01`), 'yyyy-MM-dd'),
            description: 'Ano Novo',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-04-21`), 'yyyy-MM-dd'),
            description: 'Tiradentes',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-05-01`), 'yyyy-MM-dd'),
            description: 'Dia do Trabalho',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-09-07`), 'yyyy-MM-dd'),
            description: 'Independência do Brasil',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-10-12`), 'yyyy-MM-dd'),
            description: 'Nossa Senhora Aparecida',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-11-02`), 'yyyy-MM-dd'),
            description: 'Dia de Finados',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-11-15`), 'yyyy-MM-dd'),
            description: 'Proclamação da República',
        },
        {
            date: date_fns_1.format(new Date(`${String(year)}-12-25`), 'yyyy-MM-dd'),
            description: 'Natal',
        },
    ];
}
exports.getNationalHolidays = getNationalHolidays;
function isHoliday(date = index_2.currentDate()) {
    date = index_3.formatDate(date);
    const nationalHolidays = getNationalHolidays(date.getFullYear());
    return nationalHolidays.some((holiday) => {
        holiday.date === date_fns_1.format(date, 'yyyy-MM-dd');
    });
}
exports.isHoliday = isHoliday;
