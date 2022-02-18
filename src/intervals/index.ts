import { TimeInterval } from '../interfaces/time-interval.interface';

export function inTheTimeInterval(
  time: string,
  interval: TimeInterval,
): boolean {
  const { start: startTimeInterval, end: endTimeInterval } = interval;

  const [startHours, startMinutes, startSeconds, ...startTime] =
    startTimeInterval.split(':');

  const [endHours, endMinutes, endSeconds, ...endTime] =
    endTimeInterval.split(':');

  const [timeHours, timeMinutes, timeSeconds, ...timeData] = time.split(':');

  const convertStartTimeInMinutes = (): number =>
    +startHours * 60 + +startMinutes + +startSeconds / 60;

  const convertEndTimeInMinutes = (startTimeInMinutes: number) => {
    const timeInMinutes = +endHours * 60 + +endMinutes + +endSeconds / 60;

    if (timeInMinutes < startTimeInMinutes) return timeInMinutes + 24 * 60;

    return timeInMinutes;
  };

  const convertTimeInMinutes = (startTimeInMinutes, endTimeInMInutes) => {
    const timeInMinutes = +timeHours * 60 + +timeMinutes + +timeSeconds / 60;

    if (startTimeInMinutes < 720 || endTimeInMInutes < 720)
      return timeInMinutes;

    if (timeInMinutes >= 0 && timeInMinutes <= 720)
      return timeInMinutes + 24 * 60;

    return timeInMinutes;
  };

  const startTimeInMinutes = convertStartTimeInMinutes();

  const endTimeInMInutes = convertEndTimeInMinutes(startTimeInMinutes);

  const timeInMinutes = convertTimeInMinutes(
    startTimeInMinutes,
    endTimeInMInutes,
  );

  return (
    timeInMinutes >= startTimeInMinutes && timeInMinutes < endTimeInMInutes
  );
}
