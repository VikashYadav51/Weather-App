let h1 = document.querySelector(".temprature-details").querySelector('.heading1');

let h2 = document.querySelector('.temprature-details').querySelector('.heading2');

let humidityPara = document.querySelector('.humidity-details');

let windPara = document.querySelector('.wind_details');

let btn = document.querySelector('button');

let BASE_URL = `https://api.weatherstack.com/current?access_key=03fc81745ffeb2e031b8308a7d32da85&query=${CityName}`

