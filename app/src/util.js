

export var today = new Date();

var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export const getLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
      },
    );
  }
};
