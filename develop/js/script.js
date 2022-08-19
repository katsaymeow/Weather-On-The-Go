var requestUrl = 'api.openweathermap.org/data/2.5/weather?zip=&APPID=2484cafe54599b17aa85cab5dfd8b39f';
var responseCards = document.getElementById('city-cards');

function getWeatherApi(requestUrl){
    fetch(requestUrl)
     .then(function(response){
        console.log(response);
        if(response.status === 200){
            responseCards.textContent = response.status;
        }
        return response.json();
     })
}
console.log(requestUrl)
getWeatherApi(requestUrl);




