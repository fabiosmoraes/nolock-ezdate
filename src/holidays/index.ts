import { add } from 'date-fns';
import { Holiday } from '../interfaces/holiday.interface';
import { _calculateEaster } from '../easter/index';
import { currentDate } from '../current-date/index';
import { formatDate, getDate, getYear } from '../date/index';
import { TypeDate } from '../constants';

function _calculateCorpusChristi(easterDate: Date): Date {
  return add(new Date(easterDate), { days: 60 });
}

function _calculateCarnival(easterDate: Date): Date {
  return add(new Date(easterDate), { days: -47 });
}

function _calculateGoodFriday(easterDate: Date): Date {
  return add(new Date(easterDate), { days: -2 });
}

export function getNationalHolidays(year = getYear()): Holiday[] {
  const easterDate = _calculateEaster(year);
  const corpusChristiDate = _calculateCorpusChristi(easterDate);
  const carnivalDate = _calculateCarnival(easterDate);
  const goodFridayDate = _calculateGoodFriday(easterDate);

  return [
    {
      date: formatDate(new Date(`${String(year)}-01-01`), TypeDate.DB),
      description: 'Ano Novo',
    },
    { date: formatDate(carnivalDate, TypeDate.DB), description: 'Carnaval' },
    {
      date: formatDate(goodFridayDate, TypeDate.DB),
      description: 'Sexta-feira Santa',
    },
    { date: formatDate(easterDate, TypeDate.DB), description: 'Páscoa' },
    {
      date: formatDate(new Date(`${String(year)}-04-21`), TypeDate.DB),
      description: 'Tiradentes',
    },
    {
      date: formatDate(new Date(`${String(year)}-05-01`), TypeDate.DB),
      description: 'Dia do Trabalho',
    },
    {
      date: formatDate(corpusChristiDate, TypeDate.DB),
      description: 'Corpus Christi',
    },
    {
      date: formatDate(new Date(`${String(year)}-09-07`), TypeDate.DB),
      description: 'Independência do Brasil',
    },
    {
      date: formatDate(new Date(`${String(year)}-10-12`), TypeDate.DB),
      description: 'Nossa Senhora Aparecida',
    },
    {
      date: formatDate(new Date(`${String(year)}-11-02`), TypeDate.DB),
      description: 'Dia de Finados',
    },
    {
      date: formatDate(new Date(`${String(year)}-11-15`), TypeDate.DB),
      description: 'Proclamação da República',
    },
    {
      date: formatDate(new Date(`${String(year)}-12-25`), TypeDate.DB),
      description: 'Natal',
    },
  ];
}

export function isHoliday(date = currentDate()): boolean {
  date = getDate(date);

  const nationalHolidays = getNationalHolidays(date.getFullYear());

  return nationalHolidays.some((holiday) => {
    return holiday.date === formatDate(date, TypeDate.DB);
  });
}
