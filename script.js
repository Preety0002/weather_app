const apiKey ="9aee9b00a389f25a52c2f5c8ae9336c9";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ;

    if(data.weather[0].main == "clouds"){
        weatherIcon.src ="cloud-png-isolated-transparent-background_191095-18056.avif";  
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src ="https://w7.pngwing.com/pngs/530/127/png-transparent-weather-forecasting-national-weather-service-weather-radar-weather-atmosphere-cloud-weather-forecasting-thumbnail.png";
    }
}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})












