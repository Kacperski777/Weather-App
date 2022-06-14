function city(){
    let city = document.getElementById("city").value
    weatherBalloon(city)
}




function weatherBalloon( cityID ) {
    var key = '60fdc6f68086ffa52b0991d7456d98da';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        var celcius = Math.round(parseFloat(data.main.temp)-273.15);
        var celcius_min = Math.round(parseFloat(data.main.temp_min)-273.15);
        var celcius_max = Math.round(parseFloat(data.main.temp_max)-273.15);
        console.log(data)
        document.getElementById("error").innerHTML = "";
      document.getElementById("location").innerHTML = data.name;
      document.getElementById("weather_now").innerHTML = "Temp Today Now: " + celcius + '&deg';
      document.getElementById("weather_low").innerHTML = "Min Temp Today: " + celcius_min + '&deg';
      document.getElementById("weather_high").innerHTML = "Max Temp Today: " + celcius_max + '&deg';
      document.getElementById("location").innerHTML = data.name;
      //document.getElementById("")


    })
    .catch(function() {
        document.getElementById("error").innerHTML = "Type in correct City Name!";
        document.getElementById("location").innerHTML = "";
      document.getElementById("weather_now").innerHTML = "";
      document.getElementById("weather_low").innerHTML = "";
      document.getElementById("weather_high").innerHTML = "";
      document.getElementById("location").innerHTML = "";
    });
  }
  
 
  
 