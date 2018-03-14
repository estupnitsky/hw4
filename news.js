let getLondonTemp = function(event) {
  let latitude = '51.5074';
  let longitude = '0.1278';
  let apiKey = '478583753475234c655f0057cb9a1bde';
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

//Provides London weather after clicking Get Current Temperature
jQuery("#get_forecast").on("click",getLondonTemp)

let handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLondonTemp);
}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);
