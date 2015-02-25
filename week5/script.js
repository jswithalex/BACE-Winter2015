function insertWeatherData(wdata)
{
  $('#temp').text(wdata.temp);
	$('#humidity').text(wdata.humidity);
	$('#desc').text(wdata.desc);
	$('img').attr('src','http://openweathermap.org/img/w/'+ wdata.icon + '.png');
} 
function insertLocationData(ldata)
{
  console.log(ldata);
	$('#city').text(ldata.city);
	$('#state').text(ldata.state);
	$('#country').text(ldata.country);
	// add a query string that requests farenheight and not the default, kelvin
	var imperialUnits = '&units=imperial'
  var base_url = 'http://openweathermap.com/data/2.5/weather?q=';
  var API_KEY = YOUR_API_KEY_STRING_GOES_HERE;
	var city = ldata.city;
	var countryCode = ldata.countryCode.toLowerCase();
  var full_url = base_url + city + ',' + countryCode + '&APPID=' + API_KEY + imperialUnits;
	console.log(full_url);

	$.getJSON(full_url,function(response) 
	{
	  console.log(response['weather'][0]['description']);
		wdata = {};
		wdata.desc = response['weather'][0]['description'];
		wdata.icon = response['weather'][0]['icon'];
		wdata.temp = response['main']['temp'];
		wdata.humidity = response['main']['humidity'];
	  insertWeatherData(wdata);
	});
}

$.getJSON('http://ip-api.com/json', function (response)
{
  var ldata = {};
	ldata.city =  response.city;
	ldata.state =  response.region;
	ldata.country =  response.country;
	ldata.countryCode =  response.countryCode;
  insertLocationData(ldata);
});
