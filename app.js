var button = document.querySelector('.button');
var city = document.querySelector('.city');
var resultcity = document.querySelector('.resultcity');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var base = document.querySelector('.base');


button.addEventListener('click', fetchweather);

function fetchweather() {
    event.preventDefault();
    var api_key="c1ff2cb016ee3cc0be75ea84f34c24dc";
    var api = 'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid='+api_key+'&units=metric';
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var tempValue = data.main.temp;
        var descValue = data.weather[0].description;
        var resultcityValue = data.name;
        var celcius = tempValue;

        resultcity.innerHTML = `Weather at ${resultcityValue} is:`;
        desc.innerHTML = `${descValue}`;
        temp.innerHTML = `temprature: ${celcius}℃`;

    })
    .catch(err =>{ 
       // alert(`${city.value} is a Wrong city name`);
        resultcity.innerHTML = `${city.value} is a not city name please try again.`;
        desc.innerHTML = null;
        temp.innerHTML = null;

    }) ; 
}

