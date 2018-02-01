$(document).ready( function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("Oops, no geolocation support");
  }
}
);

function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  $("#location").html("You are at Latitude: " + latitude + " Longitude, " + longitude);
}
