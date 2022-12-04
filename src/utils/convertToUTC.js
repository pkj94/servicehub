// https://stackoverflow.com/a/63227335

import { format, utcToZonedTime } from "date-fns-tz";

const formatInTimeZone = (date, fmt, tz) => {
  return format(
    utcToZonedTime(date, tz),
    fmt,
    { timeZone: tz }
  );
}

export default formatInTimeZone;