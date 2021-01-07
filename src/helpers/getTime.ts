export const parseTime = (date: string | undefined) => {
  let time;
  date ? (time = new Date(date)) : (time = new Date());

  const hours = time.getHours();
  const minutes = time.getMinutes();
  let timeString = "" + (hours > 12 ? hours - 12 : hours);
  timeString += (minutes < 10 ? ":0" : ":") + minutes;
  hours >= 12 ? (timeString += " pm") : (timeString += " am");
  return timeString;
};
