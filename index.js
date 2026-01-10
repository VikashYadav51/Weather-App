let tempratue = document.querySelector(".temprature-details").querySelector('h1');

let cityinput = document.querySelector('.city-input');

let h2 = document.querySelector('.temprature-details').querySelector('.heading2');

let humidityPara = document.querySelector('.humidity-details');

let windPara = document.querySelector('.wind_details');

let btn = document.querySelector('button');

let Base_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore';

let API_KEY = '1be2e36560ec3fd4cdadfad278eeac83';

btn.addEventListener('click', (evt) =>{
    checkWeather(cityinput.value);
})




async function checkWeather(){
    let response = await fetch(Base_URL + `&appid=${API_KEY}`);
    let data = response.json();

    humidityPara.innerHTML = data
    cityinput.innerHTML = 
    windPara.innerHTML = 
    tempratue.innerHTML = 

}

checkWeather();



