import { add } from 'date-fns';

export function _calculateEaster(year: number): Date {
  let M = 3,
    G = (year % 19) + 1,
    C = ~~(year / 100) + 1,
    L = ~~((3 * C) / 4) - 12,
    E = (11 * G + 20 + ~~((8 * C + 5) / 25) - 5 - L) % 30,
    D;
  E < 0 && (E += 30);
  ((E == 25 && G > 11) || E == 24) && E++;
  (D = 44 - E) < 21 && (D += 30);
  (D += 7 - ((~~((5 * year) / 4) - L - 10 + D) % 7)) > 31 &&
    ((D -= 31), (M = 4));

  const month = M < 10 ? '0' + M : M;
  const day = D < 10 ? '0' + D : D;
  const easterDate = year + '-' + month + '-' + day;

  return add(new Date(easterDate), { minutes: new Date().getTimezoneOffset() });
}
