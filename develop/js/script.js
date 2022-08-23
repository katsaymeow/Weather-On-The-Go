
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103&APPID=2484cafe54599b17aa85cab5dfd8b39f';

//can i add user input to the url???

    fetch(requestUrl)
     .then(function(response){
        console.log(response);//this logs the api status response. 
        return response.json();
     })
     .then(function (data){
        console.log(data);//this logs the data array to pull 
      //   for ( var i =0; i < data; i++){
      //       var day = data[i];
            var temp = data.main.temp;
            console.log(temp);
            var highs = data.main.temp_max;
            console.log(highs);
            var lows = data.main.temp_min;
            console.log(lows);
            var city = data.name;
            console.log(city);
            var sunSys = data.sys.sunrise;
            console.log(sunSys);
            var moonSys = data.sys.sunset;
            console.log(moonSys);
            var windSpeed = data.wind.speed;
            console.log(windSpeed);
            var windDegree = data.wind.deg;
            console.log(windDegree);
            console.log(data);
        
     });
     
     var userInput = document.querySelector('#submit');
   //   userInput.addEventListener('click' );
console.log(userInput)



     