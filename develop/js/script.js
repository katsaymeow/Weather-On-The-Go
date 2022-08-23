
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103&APPID=2484cafe54599b17aa85cab5dfd8b39f';

//can i add user input to the url???

    fetch(requestUrl)
     .then(function(response){
        console.log(response);//this logs the api status response. 
        return response.json();
     })
     .then(function (data){
        console.log(data);//this logs the data array to pull 
        for ( var i =0; i < data.list; i++){
            var day = data.list[i];
            var temp = day.main.temp;
            var highs = day.main.temp_max;
            var lows = day.main.temp_min;
            var city = day.name;
            var sunSys = day.sunrise;
            var moonSys = day.sunset;
            var windSpeed = day.wind.speed;
            var windDegree = day.wind.deg;
        }
        
     });
     console.log(responseCards);
     console.log(requestUrl);
     var userInput = document.querySelector('#submit');
     userInput.addEventListener('click');



     