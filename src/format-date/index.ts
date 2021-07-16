export function formatDate(date: string | Date): Date {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date;
}
