
let weather = {
    apikey: "e5b90d38dd3f7f36a7cfca9b631ced9a",
    getweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.display_weather(data));
    },
    display_weather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".weather-city").innerHTML = "Weather in " + name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+ icon +"@4x.png";
        document.querySelector(".weather-temp").innerHTML = temp + " ℃";
        document.querySelector(".weather-desc").innerHTML = description;


        // Clothes info
        if(temp > 20) {
            document.querySelector(".top-clothes-type").innerHTML = "Short-Tshirt";
            document.querySelector(".bottom-clothes-type").innerHTML = "Short-Pants";
        };

        if(temp < 21) {
            document.querySelector(".top-clothes-type").innerHTML = "Long-Shirt";
            document.querySelector(".bottom-clothes-type").innerHTML = "Long-Pants";
        };

        if(temp < 17) {
            document.querySelector(".top-clothes-type").innerHTML = "Long-Shirt+Jacket";
            document.querySelector(".bottom-clothes-type").innerHTML = "Long-Pants";
        };

    },
    search: function (){
        this.getweather(document.getElementById("search-bar").value);

        // If no city error
        if(this.getweather() == undefined){
            document.querySelector(".weather-city").innerHTML = "NO THIS CITY";
            document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/01n@2x.png";
            document.querySelector(".weather-temp").innerHTML = "Error";
            document.querySelector(".weather-desc").innerHTML = "Error";
            document.querySelector(".top-clothes-type").innerHTML = "Erorr";
            document.querySelector(".bottom-clothes-type").innerHTML = "Error";
        }    
    },
};

document.querySelector(".search-btn").addEventListener("click", function() {
    weather.search();
});

document.getElementById("search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});


