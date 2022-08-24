function getApi(){
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103&units=imperial&APPID=2484cafe54599b17aa85cab5dfd8b39f';
var userInput = document.querySelector('#submit');
console.log(userInput);// I have tried inserting ${'userInput'}to the api call to add the user input
//can i add user input to the url???

    fetch(requestUrl)
     .then(function(response){
        console.log(response);//this logs the api status response. 
        return response.json();
     })
     .then(function (data){
        console.log(data);//this logs the data array to pull from
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
  
console.log(userInput);// this logs to the correct input

document.getElementById("city").textContent = city
document.getElementById("temp").textContent = temp;
document.getElementById("highs").textContent = highs;
document.getElementById("lows").textContent = lows;
document.getElementById("sun-sys").textContent = sunSys;
document.getElementById("moon-sys").textContent = moonSys;
document.getElementById("wind-speed").textContent = windSpeed;
document.getElementById("wind-degree").textContent = windDegree;







});
}
var submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', getApi());   
