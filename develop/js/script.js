var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103,us&APPID=2484cafe54599b17aa85cab5dfd8b39f';
var responseCards = document.getElementById('city-cards');
// var userZipCode = document.getElementsByClassName('submit');
var userInputSubmitBtn = document.getElementById('submit');
var submitBtn = document.getElementById('click','#submit-button');
submitBtn.addEventListener('click', (getWeatherApi()));
//can i add user input to the url???
function getWeatherApi(requestUrl){
    fetch(requestUrl)
     .then(function(response){
        console.log(response);
 if(response.status === 200){
    
}// is the response needing parameters? 
return response.json();
})
}
console.log(requestUrl)
getWeatherApi(requestUrl);

var apiParametersCall = 'https://api.openweathermap.org/geo/1.0/direct?q=Cincinnati&limit=3&appid=2484cafe54599b17aa85cab5dfd8b39f';

function apiGeo (apiParametersCall){
    fetch(apiParametersCall)
    .then(function(response){
        console.log(response);
        if(response.status === 200){
        }
        return response.json()
        
    })
}
apiGeo(apiParametersCall);
