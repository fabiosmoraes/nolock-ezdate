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
      date: `${String(year)}-01-01`,
      description: 'Ano Novo',
    },
    { date: formatDate(carnivalDate, TypeDate.DB), description: 'Carnaval' },
    {
      date: formatDate(goodFridayDate, TypeDate.DB),
      description: 'Sexta-feira Santa',
    },
    { date: formatDate(easterDate, TypeDate.DB), description: 'Páscoa' },
    {
      date: `${String(year)}-04-21`,
      description: 'Tiradentes',
    },
    {
      date: `${String(year)}-05-01`,
      description: 'Dia do Trabalho',
    },
    {
      date: formatDate(corpusChristiDate, TypeDate.DB),
      description: 'Corpus Christi',
    },
    {
      date: `${String(year)}-09-07`,
      description: 'Independência do Brasil',
    },
    {
      date: `${String(year)}-10-12`,
      description: 'Nossa Senhora Aparecida',
    },
    {
      date: `${String(year)}-11-02`,
      description: 'Dia de Finados',
    },
    {
      date: `${String(year)}-11-15`,
      description: 'Proclamação da República',
    },
    {
      date: `${String(year)}-12-25`,
      description: 'Natal',
    },
  ];
}

export function isHoliday(date: string | Date = currentDate()): boolean {
  date = getDate(date);

  const nationalHolidays = getNationalHolidays(date.getFullYear());

  return nationalHolidays.some((holiday) => {
    return holiday.date === formatDate(date, TypeDate.DB);
  });
}
