const DEFAULT_MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DEFAULT_DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getTimeAmPm = (date: Date) => {
  return date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
};

export const getMonthName = (date: Date, translatedMonthNames = DEFAULT_MONTH_NAMES) => {
  return translatedMonthNames[date.getMonth()];
};

export const getDayName = (date: Date, translatedDaysOfWeek = DEFAULT_DAYS_OF_WEEK) => {
  return translatedDaysOfWeek[date.getDay()];
};
