const apiKey = "c89c9637debf2a330ea32620cb7bfe8a"; // apna API key daalo

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        document.getElementById("result").innerHTML = "Please enter city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = "No data found";
            return;
        }

        document.getElementById("result").innerHTML = `
            <div class="box">
                <h2>📍 ${data.name}</h2>
                <h1>🌡️ ${data.main.temp} °C</h1>
                <h3>Min: ${data.main.temp_min} °C | Max: ${data.main.temp_max} °C</h3>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌥️ ${data.weather[0].main}</p>
            </div>
        `;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data";
    }
}