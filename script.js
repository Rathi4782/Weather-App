const search = document.querySelector('.search-box input');
const searchbtn = document.querySelector('.search-box button');
// const apiKey = 'c701d942129df42627831010b2c2f003';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const image = document.querySelector(".icons");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + "&appid=c701d942129df42627831010b2c2f003");

        if(response.status == 404){
            document.querySelector(".container").style.height="400px";
            document.querySelector(".weather-box").style.visibility="hidden";
            document.querySelector(".weather-details").style.visibility="hidden";
            document.querySelector(".not-found").style.visibility="visible";
        }
        else{
            var data = await response.json();
            console.log(data);
            
            document.querySelector(".description").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"<span>°C</span>";
            document.querySelector(".info-humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".info-wind").innerHTML = data.wind.speed + " Km/h";
    
            switch (data.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
    
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
    
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
    
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
    
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
    
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
    
                // default:
                //     image.src = 'images/cloud.png';
            }
            document.querySelector(".container").style.height="555px";
            document.querySelector(".weather-box").style.visibility="visible";
            document.querySelector(".weather-details").style.visibility="visible";
            document.querySelector(".not-found").style.visibility="hidden";
        }
        

    }
    searchbtn.addEventListener("click", ()=>{
        checkWeather(search.value);

    })
