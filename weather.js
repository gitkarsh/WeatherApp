//create variables for document elements
var lookupCity = document.getElementById("lookupCity");
var lookupCoord = document.getElementById("lookupCoord");
var city = document.getElementById("city");
var lat = document.getElementById("lat");
var lon = document.getElementById("lon");

//on click event, execute function lookupCity
lookupCity.addEventListener("click", function () {
  getWeather = function (data) {
    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("location").innerHTML = data.name;
    document.getElementById("temp").innerHTML = parseInt(
      data.main.temp * 1.8 - 459.67
    );
    document.getElementById("icon").src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    console.log(data);
  }

  const script = document.createElement('script');
    script.src = "https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=0a1983ed87d53316938014a829f23f29&callback=getWeather"; // URL for the third-party library being loaded.
    script.id = 'weatherAPI'; // e.g., googleMaps or stripe
    script.type = 'text/javascript';
    script.async = true;
    document.querySelector('head').appendChild(script);
    //dynamically add script tage to fetch data

});

//on click event, execute function lookupCoord
lookupCoord.addEventListener("click", function () {
  coordWeather = function (newdata) {
    document.getElementById("weather").innerHTML = newdata.weather[0].description;
    document.getElementById("location").innerHTML = newdata.name;
    document.getElementById("temp").innerHTML = parseInt(newdata.main.temp * 1.8 - 459.67);
    document.getElementById("icon").src="http://openweathermap.org/img/w/"+newdata.weather[0].icon+".png";
    console.log(newdata);
 
  }

  
  const script = document.createElement('script');
    script.src = "https://api.openweathermap.org/data/2.5/weather?lat="+lat.value+"&lon="+lon.value+"&appid=0a1983ed87d53316938014a829f23f29&callback=coordWeather"; // URL for the third-party library being loaded.
    script.id = 'weatherAPI'; // e.g., googleMaps or stripe
    script.type = 'text/javascript';
    script.async = true;
    document.querySelector('head').appendChild(script);
    //dynamically add script tage to fetch data

});





