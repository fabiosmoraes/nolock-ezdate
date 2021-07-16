"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextBusinessDay = exports.getBusinessDay = exports.isBusinessDay = void 0;
const date_fns_1 = require("date-fns");
const index_1 = require("../holidays/index");
const index_2 = require("../current-date/index");
const index_3 = require("../format-date/index");
function isBusinessDay(date = index_2.currentDate()) {
    date = index_3.formatDate(date);
    const weekday = date.getDay();
    if (weekday < 6) {
        return !index_1.isHoliday(date);
    }
    return false;
}
exports.isBusinessDay = isBusinessDay;
function getBusinessDay(date = index_2.currentDate()) {
    date = index_3.formatDate(date);
    while (!isBusinessDay(date)) {
        console.log(date);
        date = date_fns_1.addBusinessDays(date, 1);
    }
    return date;
}
exports.getBusinessDay = getBusinessDay;
function getNextBusinessDay(date = index_2.currentDate()) {
    return getBusinessDay(date_fns_1.addBusinessDays(index_3.formatDate(date), 1));
}
exports.getNextBusinessDay = getNextBusinessDay;
