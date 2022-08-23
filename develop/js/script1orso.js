// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=45103&APPID=2484cafe54599b17aa85cab5dfd8b39f';
// var responseCards = document.getElementsByClassName('.city-cards');
// var userInputSubmitBtn = document.getElementById('submit');
// //can i add user input to the url???

//     fetch(requestUrl)
//      .then(function(response){
//         console.log(response);
//         return response.json();
//      })
//      .then(function (data){
//         console.log(data);
//         for ( var i =0; i < data.list; i++){
//             var day = data.list[i];
//             var temp = day.main.temp;
//             console.log(temp);
//             console.log(day);
//             var displayTemp = document.createElement('tr');
//             var displayDay = document.createElement('td');

//             displayTemp.textContent = data.list[i].weather[0].description.main;
//             console.log(data.list[i].weather[0].description)
//             responseCards.appendChild.displayTemp;
//         }
        
//      });
//      console.log(responseCards)

     
// // console.log(requestUrl)
// // getWeatherApi(requestUrl);

// // var apiParametersCall = 'https://api.openweathermap.org/geo/1.0/direct?zip=45103&appid=2484cafe54599b17aa85cab5dfd8b39f';

// // function apiGeo (apiParametersCall){
// //     fetch(apiParametersCall)
// //     .then(function(response){
// //         console.log(response);
// //         for (var i = 0; i < data.length; i++){
// //             var tempature = document.createElement('tr');
            
// //         }
// //         return response.json()
        
// //     })
// // }
// // apiGeo(apiParametersCall);
// // var userZipCode = document.getElementsByClassName('submit');
// // var submitBtn = document.getElementById('click','#submit-button');
// // submitBtn.addEventListener('click', (getWeatherApi()));

// class fetch {
//     getCurrentWeather(input) {
//        var myKey = "2484cafe54599b17aa85cab5dfd8b39f";
//        //url request
//        var response = fetch(
//           `https://api.openweathermap.org/geo/1.0/weather?zip=${input}&appid=${myKey}`
//        );
//        var data = response.json();
//        console.log(data);
//        return data;
//     }
//  }
 
//  class UI {
//     constructor (){
//        this.uiContainer = document.querySelector(".city-cards");
//        this.city;
//     }
 
//     populateUI(data){
//        this.uiContainer.innerHTML = `
       
//        <div class="card mx-auto mt-5" style="width: 18rem;">
//           <div class="card-body justify-contnet-center;>
//              <h5 class="card-title">${data.name}</h5>
//              <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
//              <p class"card-text">Weather conditions are ${data.weather[0].description}</p>
//           </div>
//        </div>
       
//        `;
 
//     }
//  }
 
//  var getFetch = new Fetch();
//  var getUi = new UI();
 
//  var userSearch = document.getElementById("submit");
//  var submitButton = document.getElementById("submit-button");
 
//  submitButton.addEventListener("click", () => {
//     var realTimeWeather = userSearch.value;
 
//     getFetch.getCurrentWeather(realTimeWeather).then((data) => {
//        getUi.populateUI(data);
//        getUi.saveToLS(data);
//     });
 
//  });

//  // var myKey = '2484cafe54599b17aa85cab5dfd8b39f';
// // var input = userSearchValue;
// // var userSearchValue = document.getElementById('submit');
// // var submitButton = document.getElementById('submit-button');
// // var requestUrl = (`https://api.openweathermap.org/geo/1.0/weather?q=&appis=${myKey}`);

// // fetch(requestUrl)
// //  .then(function(data){
// //    console.log(data)
// //    return JSON();
// // })
 