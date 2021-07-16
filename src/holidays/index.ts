import { add, format } from 'date-fns';
import { Holiday } from '../interfaces/holiday.interface';
import { _calculateEaster } from '../easter/index';
import { currentDate } from '../current-date/index';
import { formatDate } from '../format-date/index';

function _calculateCorpusChristi(easterDate: Date): Date {
  return add(new Date(easterDate), { days: 60 });
}

function _calculateCarnival(easterDate: Date): Date {
  return add(new Date(easterDate), { days: -47 });
}

function _calculateGoodFriday(easterDate: Date): Date {
  return add(new Date(easterDate), { days: -2 });
}

export function getNationalHolidays(year: number): Holiday[] {
  const easterDate = _calculateEaster(year);
  const corpusChristiDate = _calculateCorpusChristi(easterDate);
  const carnivalDate = _calculateCarnival(easterDate);
  const goodFridayDate = _calculateGoodFriday(easterDate);

  return [
    { date: format(easterDate, 'yyyy-MM-dd'), description: 'Páscoa' },
    {
      date: format(corpusChristiDate, 'yyyy-MM-dd'),
      description: 'Corpus Christi',
    },
    { date: format(carnivalDate, 'yyyy-MM-dd'), description: 'Carnaval' },
    {
      date: format(goodFridayDate, 'yyyy-MM-dd'),
      description: 'Sexta-feira Santa',
    },
    {
      date: format(new Date(`${String(year)}-01-01`), 'yyyy-MM-dd'),
      description: 'Ano Novo',
    },
    {
      date: format(new Date(`${String(year)}-04-21`), 'yyyy-MM-dd'),
      description: 'Tiradentes',
    },
    {
      date: format(new Date(`${String(year)}-05-01`), 'yyyy-MM-dd'),
      description: 'Dia do Trabalho',
    },
    {
      date: format(new Date(`${String(year)}-09-07`), 'yyyy-MM-dd'),
      description: 'Independência do Brasil',
    },
    {
      date: format(new Date(`${String(year)}-10-12`), 'yyyy-MM-dd'),
      description: 'Nossa Senhora Aparecida',
    },
    {
      date: format(new Date(`${String(year)}-11-02`), 'yyyy-MM-dd'),
      description: 'Dia de Finados',
    },
    {
      date: format(new Date(`${String(year)}-11-15`), 'yyyy-MM-dd'),
      description: 'Proclamação da República',
    },
    {
      date: format(new Date(`${String(year)}-12-25`), 'yyyy-MM-dd'),
      description: 'Natal',
    },
  ];
}

export function isHoliday(date = currentDate()): boolean {
  date = formatDate(date);
  const nationalHolidays = getNationalHolidays(date.getFullYear());

  return nationalHolidays.some((holiday) => {
    holiday.date === format(date, 'yyyy-MM-dd');
  });
}
