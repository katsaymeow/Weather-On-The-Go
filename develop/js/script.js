// var submitBtn = document.getElementById('submit-button');
// function getApi(){
// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + userInput + '&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
// var userInput = document.querySelector('#submit').value;
// console.log(userInput);// I have tried inserting ${'userInput'}to the api call to add the user input
// //can i add user input to the url???

//     fetch(requestUrl)
//      .then(function(response){
//         console.log(response);//this logs the api status response. 
//         return response.json();
//      })
//      .then(function (data){
//         console.log(data);//this logs the data array to pull from
//             var temp = data.main.temp;
//             console.log(temp);
//             var highs = data.main.temp_max.value;
//             console.log(highs);
//             var lows = data.main.temp_min.value;
//             console.log(lows);
//             var city = data.name.value;
//             console.log(city);
//             var sunSys = data.sys.sunrise.value;
//             console.log(sunSys);
//             var moonSys = data.sys.sunset.value;
//             console.log(moonSys);
//             var windSpeed = data.wind.speed.value;
//             console.log(windSpeed);
//             var windDegree = data.wind.deg.value;
//             console.log(windDegree);
  
// console.log(userInput);// this logs to the correct input

// city.document.getElementById("city").textContent;
// document.getElementById("temp").textContent = temp;
// document.getElementById("highs").textContent = highs;
// document.getElementById("lows").textContent = lows;
// document.getElementById("sun-sys").textContent = sunSys;
// document.getElementById("moon-sys").textContent = moonSys;
// document.getElementById("wind-speed").textContent = windSpeed;
// document.getElementById("wind-degree").textContent = windDegree;
// });
// }

// submitBtn.addEventListener('click', getApi);   
var city = document.getElementById("city")
var temp = document.getElementById("temp")
var highs = document.getElementById("highs")
var lows = document.getElementById("lows")
var humidity = document.getElementById("humidity")
var feelsLike = document.getElementById("feels-like")
var windSpeed = document.getElementById("wind-speed")
var windDegree = document.getElementById("wind-degree")
var submitBtn = document.querySelector('#submit-button');
var submitBtn = document.querySelector('#submit-button');
function getApi() {
   var userInput = document.querySelector('#submit').value;
   var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + userInput + '&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';

   fetch(requestUrl)
      .then(function (response) {
         console.log(response);//this logs the api status response.
         return response.json();
      })
      .then(function (data) {
         console.log(data);//this logs the data array to pull from
         temp.textContent = "Temperture " + data.main.temp;
         // localStorage.temp('temp');
         console.log(temp);
         highs.textContent = "Today's High " + data.main.temp_max;
         console.log(highs);
         lows.textContent = "Today's Low " + data.main.temp_min;
         console.log(lows);
         city.textContent = data.name;
         console.log(city);
         humidity.textContent = "Humidity " + data.main.humidity;
         console.log(humidity);
         feelsLike.textContent = "Feels Like " + data.main.feels_like;
         console.log(feelsLike);
         windSpeed.textContent = "Wind Speed " + data.wind.speed;
         console.log(windSpeed);
         windDegree.textContent = "Wind Direction " + data.wind.deg;
         console.log(windDegree);
         console.log(userInput);// this logs to the correct input
      });
}
submitBtn.addEventListener('click', getApi);







