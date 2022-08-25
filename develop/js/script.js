// defined all data points as local varibles

var city = document.getElementById("city")
var temp = document.getElementById("temp")
var highs = document.getElementById("highs")
var lows = document.getElementById("lows")
var humidity = document.getElementById("humidity")
var feelsLike = document.getElementById("feels-like")
var windSpeed = document.getElementById("wind-speed")
var conditions = document.getElementById("conditions")
var submitBtn = document.querySelector('#submit-button');
//function to hold the fetch and data handling.
function getApi() {
   var userInput = document.querySelector('#submit').value;//the value of the user's input. 
   var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + userInput + '&daily&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';//request call for api with user zip code input.

   fetch(requestUrl)
      .then(function (response) {
         console.log(response);//this logs the api status response.
         return response.json();
      })
      .then(function (data) {
         console.log(data);//this logs the data array to pull from, and below is the data I could display
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         //really wanted to add Icons here with the current conditions. 
         console.log(userInput);
      });
}
submitBtn.addEventListener('click', getApi,);

var sanJuanClick = document.querySelector("#san-juan");
function sanJuanCall() {
   var sanJuan= 'https://api.openweathermap.org/data/2.5/weather?zip=00909&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
      fetch(sanJuan)
      .then(function(response){
         console.log(response);
         return response.json();
      })
      .then (function(data) {
         console.log(data);
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         console.log(sanJuanClick);
      })
console.log(sanJuan);// to declare varible. 

}
sanJuanClick.addEventListener('click', sanJuanCall);// event listener that performs the function. 

var denverClick = document.querySelector("#denver");
function denverCall() {
   var denver= 'https://api.openweathermap.org/data/2.5/weather?zip=80204&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
      fetch(denver)
      .then(function(response){
         console.log(response);
         return response.json();
      })
      .then (function(data) {
         console.log(data);
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         console.log(denverClick);
      })
console.log(denver);

}
denverClick.addEventListener('click', denverCall);

var seattleClick = document.querySelector("#seattle");
function seattleCall() {
   var seattle= 'https://api.openweathermap.org/data/2.5/weather?zip=98104&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
      fetch(seattle)
      .then(function(response){
         console.log(response);
         return response.json();
      })
      .then (function(data) {
         console.log(data);
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         console.log(seattleClick);
      })
console.log(seattle);

}
seattleClick.addEventListener('click', seattleCall);

var miamiClick = document.querySelector("#miami");
function miamiCall() {
   var miami= 'https://api.openweathermap.org/data/2.5/weather?zip=33130&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
      fetch(miami)
      .then(function(response){
         console.log(response);
         return response.json();
      })
      .then (function(data) {
         console.log(data);
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         console.log(miamiClick);
      })
console.log(miami);

}
miamiClick.addEventListener('click', miamiCall);

var newYorkClick = document.querySelector("#new-york");
function newYorkCall() {
   var newYork= 'https://api.openweathermap.org/data/2.5/weather?zip=10013&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
      fetch(newYork)
      .then(function(response){
         console.log(response);
         return response.json();
      })
      .then (function(data) {
         console.log(data);
         temp.textContent = "Temperture " + data.main.temp;
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
         windSpeed.textContent = "Wind Speed " + data.wind.speed + " miles per hour";
         console.log(windSpeed);
         conditions.textContent = data.weather[0].description;
         console.log(conditions);
         console.log(newYorkClick);
      })
console.log(newYork);

}
newYorkClick.addEventListener('click', newYorkCall);








