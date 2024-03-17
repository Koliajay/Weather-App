const apiKey="65f9f808183220f7ecd9691594df3e9e"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search=document.querySelector(".input")
const  btn=document.querySelector(".btn")
const photo=document.querySelector(".rain")
async function checkWeather(city){
           
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`); 
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".Humidity").innerHTML=data.main.humidity +  "%"
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h"
    if(data.weather[0].main=="clouds")
    {
        photo.src="img/cloudyr1.png"
    }
    else if(data.weather[0].main=="clear")
    {
        photo.src="img/clear1.png"

    }
    else if(data.weather[0].main=="clear")
    {
        photo.src="img/ra.png"

    }

}

btn.addEventListener("click",()=>
{
    checkWeather(search.value)
})
