let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue').value;
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=YOUR_API_KEY`;


const fetchweather = ()=>{
    fetch(api)
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(err => alert(`${inputValue}is a Wrong city name`)) ; 
}

