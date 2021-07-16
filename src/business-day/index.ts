import { addBusinessDays } from 'date-fns';
import { isHoliday } from '../holidays/index';
import { currentDate } from '../current-date/index';
import { formatDate } from '../format-date/index';

export function isBusinessDay(date = currentDate()): boolean {
  date = formatDate(date);
  const weekday = date.getDay();
  if (weekday < 6) {
    return !isHoliday(date);
  }
  return false;
}

export function getBusinessDay(date = currentDate()): Date {
  date = formatDate(date);
  while (!isBusinessDay(date)) {
    console.log(date);
    date = addBusinessDays(date, 1);
  }
  return date;
}

export function getNextBusinessDay(date = currentDate()): Date {
  return getBusinessDay(addBusinessDays(formatDate(date), 1));
}
