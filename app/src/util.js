export const date = (day) => {
  var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  var today = new Date();
  var today_day = today.getDay();
  if (day === 0) {
    return days[today_day];
  } else {
    return days[(today_day + day) % 7];
  }
};
