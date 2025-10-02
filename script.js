document.addEventListener("DOMContentLoaded", ()=> {
    const apiKey = "2f1ac9f33b3a53a63a9c1a4949757a5c";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-image");
    const searchBox = document.querySelector(".searchbox");

    async function checkWeather (city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "˚C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";

        console.log(data);

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
        
    }

    
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchInput.value);
        searchBox.value = '';
    });

})