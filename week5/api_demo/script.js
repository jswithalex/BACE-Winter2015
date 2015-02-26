/*
  Weather API Demo using jQuery's getJSON method.

  + Get Location Data from your ip address
  + Insert state, city and country into the html
  + Get weather data using location data
  + insert that into the html
*/

// get ip location data
$.getJSON('http://ip-api.com/json').then(function(locData) {
  // insert location data into the proper html elements
  $('#city').text(locData.city);
  $('#state').text(locData.regionName);
  $('#country').text(locData.countryCode);
  // build a url for requesting JSON data from the open weather map api
  var weatherMapGETurl = 'http://openweathermap.org/data/2.5/weather?q=' + locData.city + ',' + locData.countryCode.toLowerCase() + '&APPID=YOUR_OPEN_WEATHER_MAP_API_KEY&units=imperial'
  // we call the getJSON method again with the url we just built
  // we also return the data passed back to the next function (in the 'then' function)
  return $.getJSON(weatherMapGETurl);
}).then(function(weatherData) {
  // at this point, both api's should have returned their data. This is what 'then' ensures for us.
  
  // insert the weather into the HTML page
  $('#temp').text(weatherData['main']['temp']);
  $('#humidity').text(weatherData['main']['humidity']);
  $('#description').text(weatherData['weather'][0]['description']);
  $('img').attr('src','http://openweathermap.org/img/w/'+ weatherData['weather'][0]['icon'] + '.png');
  
});
