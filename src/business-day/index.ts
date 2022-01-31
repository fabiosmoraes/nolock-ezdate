import { add, addBusinessDays } from 'date-fns';
import { TypeDate } from '../constants';
import { currentDate } from '../current-date/index';
import { formatDate, getDate } from '../date/index';
import { isHoliday } from '../holidays/index';

export function isBusinessDay(
  date: string | Date = currentDate(),
  hour = 20,
  minute = 0,
): boolean {
  date = getDate(date);

  const weekday = date.getDay();

  if (weekday > 0 && weekday < 6) {
    if (formatDate(date, TypeDate.DB) == formatDate(new Date(), TypeDate.DB)) {
      if (date.getTime() >= getDate(new Date()).setHours(hour, minute, 0, 0))
        return false;
    }
    return !isHoliday(date);
  }
  return false;
}

export function getBusinessDay(date: string | Date = currentDate()): Date {
  date = getDate(date);

  while (!isBusinessDay(date)) {
    date = addBusinessDays(date, 1);
  }

  date.setHours(0, 0, 0, 0);

  return date;
}

export function getNextBusinessDay(
  date: string | Date = currentDate(),
  days = 1,
): Date {
  return getBusinessDay(add(getDate(date), { days }));
}
