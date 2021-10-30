export const tempConverter = (kelvin) => {
  //kelvin --> fahrenheit
  kelvin = parseFloat(kelvin);
  return (kelvin - 273.15) * 1.8 + 32;
};

export var today = new Date();

var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
