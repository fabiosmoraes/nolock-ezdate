import { parse } from 'date-fns';

export function currentDate(): Date {
  return parse(
    new Date().toLocaleDateString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'America/Sao_Paulo',
    }),
    'dd/MM/yyyy HH:mm:ss',
    new Date(),
  );
}
