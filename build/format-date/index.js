"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    return date;
}
exports.formatDate = formatDate;
