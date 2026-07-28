const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const date = document.getElementById("date");
const condition = document.getElementById("condition");
const icon = document.getElementById("icon");

const cloud = document.getElementById("cloud");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

function getCurrentDate() {

    const today = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return day + ", " + date + " " + month + " " + year;
}

function getWeather(cityName) {

    const API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityName}`;

    fetch(API)
        .then(res => res.json())
        .then(data => {

            if (data.error) {
                alert("City Not Found");
                return;
            }

            temperature.innerHTML = data.current.temp_c + "°";
            city.innerText = data.location.name;
            date.innerText = getCurrentDate();
            condition.innerText = data.current.condition.text;
            icon.src = "https:" + data.current.condition.icon;

            cloud.innerText = data.current.cloud + "%";
            humidity.innerText = data.current.humidity + "%";
            wind.innerText = data.current.wind_kph + " km/h";
            pressure.innerText = data.current.pressure_mb + " hPa";

            const weather = data.current.condition.text.toLowerCase();

            const weatherCode = data.current.condition.code;

            if (weatherCode === 1000) {
                document.body.style.backgroundImage = "url('asset/sunny.jpg')";
            }
            else if (weatherCode === 1003 || weatherCode === 1006 || weatherCode === 1009) {
                document.body.style.backgroundImage = "url('asset/cloud.jpg')";
            }
            else if (weatherCode === 1063 || weatherCode === 1150 || weatherCode === 1153) {

                document.body.style.backgroundImage = "url('asset/rain.jpg')";
            }
            else if (weatherCode === 1273 || weatherCode === 1276 || weatherCode === 1279) {
                document.body.style.backgroundImage = "url('asset/thunder.jpg')";
            }
            else if (weatherCode === 1258 || weatherCode === 1255 || weatherCode === 1279 || weatherCode ===1213) {
                document.body.style.backgroundImage = "url('asset/snow.jpg')";
            }
            else if (weatherCode === 1030 || weatherCode === 1135 || weatherCode === 1147) {
                document.body.style.backgroundImage = "url('asset/fog.jpg')";
            }
            else {
                document.body.style.backgroundImage = "url('asset/sea.jpg')";
            }

        })
        .catch(() => {
            alert("Something went wrong!");
        });
}

searchBtn.addEventListener("click", function () {

    const cityName = searchInput.value.trim();

    if (cityName === "") {
        alert("Please Enter City Name");
        return;
    }

    getWeather(cityName);

});

document.querySelectorAll(".cities p").forEach(function (item) {

    item.addEventListener("click", function () {
        searchInput.value = item.innerText;
        getWeather(item.innerText);
    });

});

getWeather("Rajkot");