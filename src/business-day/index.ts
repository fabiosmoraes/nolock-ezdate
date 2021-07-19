import { add, addBusinessDays } from 'date-fns';
import { isHoliday } from '../holidays/index';
import { currentDate } from '../current-date/index';
import { formatDate, getDate } from '../date/index';
import { TypeDate } from '../constants';

export function isBusinessDay(
  date = currentDate(),
  hour = 17,
  minute = 0,
): boolean {
  date = getDate(date);

  const weekday = date.getDay();

  if (weekday > 0 && weekday < 6) {
    if (formatDate(date, TypeDate.DB) == formatDate(new Date(), TypeDate.DB)) {
      if (date.getTime() >= new Date().setHours(hour, minute, 0, 0))
        return false;
    }
    return !isHoliday(date);
  }
  return false;
}

export function getBusinessDay(date = currentDate()): Date {
  date = getDate(date);

  while (!isBusinessDay(date)) {
    date = addBusinessDays(date, 1);
  }

  date.setHours(0, 0, 0, 0);

  return date;
}

export function getNextBusinessDay(date = currentDate(), days = 1): Date {
  return getBusinessDay(add(getDate(date), { days }));
}
