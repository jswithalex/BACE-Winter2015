  Weather API Demo using jQuery's getJSON method.

  + Get Location Data from your ip address
  + Insert state, city and country into the html
  + Get weather data using location data
  + insert that into the html
*/

// get ip location data
$.getJSON('http://ip-api.com/json').then(function(locData) {
  $('#city').html(locData.city);
  $('#state').html(locData.regionName);
  $('#country').html(locData.countryCode);
  var weatherMapGETurl = 'http://openweathermap.org/data/2.5/weather?q=' + locData.city + ',' + locData.countryCode.toLowerCase() + '&APPID=<YOUR API KEY GOES HERE>&units=imperial'
  return $.getJSON(weatherMapGETurl);
}).then(function(weatherData) {
  $('#temp').html(weatherData['main']['temp']);
  $('#humidity').html(weatherData['main']['humidity']);
  $('#description').html(weatherData['weather'][0]['description']);
  $('img').attr('src','http://openweathermap.org/img/w/'+ weatherData['weather'][0]['icon'] + '.png');
  console.log('http://openweathermap.org/img/w/'+ weatherData['weather'][0]['icon'] + '.png');
});
