document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "6be96954a8b3c1970e0f472dc54c8d89";
    const city = "Львів";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const speed = data.wind.speed;
            const deg = data.wind.deg;

            const iconCode = data.weather[0].icon;

            document.getElementById("temp").textContent = temp;
            document.getElementById("pressure").textContent = pressure;
            document.getElementById("description").textContent = description;
            document.getElementById("humidity").textContent = humidity;
            document.getElementById("speed").textContent = speed;
            document.getElementById("deg").textContent = deg;

            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById("icon").setAttribute("src", iconUrl);
        })
        .catch(error => {
            console.error("Помилка запиту до API OpenWeatherMap:", error);
        });
});
