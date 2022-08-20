var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103&APPID=2484cafe54599b17aa85cab5dfd8b39f';
var responseCards = document.getElementsByClassName('.city-cards');
var userInputSubmitBtn = document.getElementById('submit');
//can i add user input to the url???

    fetch(requestUrl)
     .then(function(response){
        console.log(response);
        return response.json();
     })
     .then(function (data){
        console.log(data);
        for ( var i =0; i < data.list; i++){
            var day = data.list[i];
            var temp = day.main.temp;
            console.log(temp);
            console.log(day);
            var displayTemp = document.createElement('tr');
            var displayDay = document.createElement('td');

            displayTemp.textContent = data.list[i].weather[0].description.main;
            console.log(data.list[i].weather[0].description)
            responseCards.appendChild.displayTemp;
        }
        
     });
     console.log(responseCards)

     
// console.log(requestUrl)
// getWeatherApi(requestUrl);

// var apiParametersCall = 'https://api.openweathermap.org/geo/1.0/direct?zip=45103&appid=2484cafe54599b17aa85cab5dfd8b39f';

// function apiGeo (apiParametersCall){
//     fetch(apiParametersCall)
//     .then(function(response){
//         console.log(response);
//         for (var i = 0; i < data.length; i++){
//             var tempature = document.createElement('tr');
            
//         }
//         return response.json()
        
//     })
// }
// apiGeo(apiParametersCall);
// var userZipCode = document.getElementsByClassName('submit');
// var submitBtn = document.getElementById('click','#submit-button');
// submitBtn.addEventListener('click', (getWeatherApi()));