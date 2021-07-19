import { currentDate } from '../current-date';
import { add, format } from 'date-fns';
import { typeDate, TypeDate } from '../constants';

export function getDate(date: string | Date): Date {
  if (!(date instanceof Date)) {
    date = add(new Date(date), { minutes: new Date().getTimezoneOffset() });
  }

  return date;
}

export function getYear(date = currentDate()): number {
  date = getDate(date);

  return date.getFullYear();
}

export function formatDate(date: string | Date, type: TypeDate) {
  date = getDate(date);

  return format(
    add(date, { minutes: new Date().getTimezoneOffset() }),
    typeDate[type],
  );
}
