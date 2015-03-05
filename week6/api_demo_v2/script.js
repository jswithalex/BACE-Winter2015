/*
  JavaScript BACE - Spring 2015
  Weather API Demo using jQuery's getJSON method.

  ** General Overview **
  + Get Location Data from your ip address
  + Insert state, city and country into the location html elements
  + Get weather data using location data
  + insert that into the weather html elements
*/

// my API_KEY for openweathermap.org
var API_KEY = '61beaf11b206ba345f116d0ebe6205c2';

// We Get IP location data from ip-api.com using jquery's getJSON method
// This method is an AJAX request that converts the JSON response data for you
$.getJSON('http://ip-api.com/json').then(function(locData) {

  // IMPORTANT: The 'then' function that is called after that ensures that the 
  // data is received by us before the next code is run

  // insert location data into the proper html elements
  $('#city').text(locData.city);
  $('#state').text(locData.regionName);
  $('#country').text(locData.countryCode);

  // build a url for requesting JSON data from the open weather map api
  var weatherMapGETurl = 'http://openweathermap.org/data/2.5/weather?q=' + locData.city +
  ',' + locData.countryCode.toLowerCase() + '&APPID=61beaf11b206ba345f116d0ebe6205c2&units=imperial'

  // we call the getJSON method again with the url we just built
  // we also return the data passed back to the next function (in the 'then' function)
    return $.getJSON(weatherMapGETurl);
  }).then(function(weatherData) {

    // at this point, both api's should have returned their data. This is what 'then' ensures for us.

    // insert the weather into the HTML page
    $('#temp').text(weatherData['main']['temp']);
    $('#humidity').text(weatherData['main']['humidity']);
    $('#description').text(weatherData['weather'][0]['description']);

    // we give the img's source the source of the weatherdata icon
    $('img').attr('src','http://openweathermap.org/img/w/'+ weatherData['weather'][0]['icon'] + '.png');

  });

/* 
   to recap: 
    - we needed two types of data: location and weather
    - we got that from the ip-api and openweathermap api's
    - because we need the location data for the weather, we have one stage that depends on another
    - due to the nature of asynchronous function calls, we do call the first function,
    use the .then() method on it in order to delay until it returns the data, and then we call the 
    second function with the data we got from the first.
    - we substituted the data into the page as soon as we could and didn't wait until the end to do it
    using the $.getJSON function, we requested that 
   
*/
