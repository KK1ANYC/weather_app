export const tempConverter = (kelvin) => {
  //kelvin --> fahrenheit
  kelvin = parseFloat(kelvin);
  return (kelvin - 273.15) * 1.8 + 32;
};

