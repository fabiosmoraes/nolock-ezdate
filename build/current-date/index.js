"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentDate = void 0;
const date_fns_1 = require("date-fns");
function currentDate() {
    return date_fns_1.parse(new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo',
    }), 'dd/MM/yyyy HH:mm:ss', new Date());
}
exports.currentDate = currentDate;
