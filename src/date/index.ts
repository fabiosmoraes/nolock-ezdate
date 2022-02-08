import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { typeDate, TypeDate } from '../constants';
import { currentDate } from '../current-date';

export function getDate(date: string | Date): Date {
  date = utcToZonedTime(date, 'America/Sao_Paulo');

  return date;
}

export function getYear(date: string | Date = currentDate()): number {
  date = getDate(date);

  return date.getFullYear();
}

export function formatDate(date: string | Date, type: TypeDate) {
  date = getDate(date);

  date = format(date, typeDate[type]);

  return date;
}

export function formatDateBRToDB(date: string) {
  if (!date.includes('/')) {
    throw new Error('Data não está no formato brasileiro');
  }

  date = date.split('/').reverse().join('-');

  const dateDB = new Date(date);

  if (dateDB.toString() == 'Invalid Date') {
    throw new Error('Data inválida');
  }

  return date;
}
