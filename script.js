const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");

//weather parameters
const weathercard = document.getElementById("main-weather-card");
const cityname = document.getElementById("city-name");
const conditionicon = document.getElementById("condition-icon");
const tempc = document.getElementById("temp-c");
const conditiontext = document.getElementById("condition");
const feekslike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const localtime = document.getElementById("local-time");
const windkph = document.getElementById("wind-kph");
const winddirection = document.getElementById("wind-dir");
const pressuremb = document.getElementById("pressure");
const pressiptionmm = document.getElementById("precip");
const lastupdated = document.getElementById("last-updated");
const visibility = document.getElementById("visibility");
const uv = document.getElementById("uv");
const cloud = document.getElementById("cloud");
const dewpoint = document.getElementById("dewpoint");



const getData = async (cityname) => {
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=ae49461f70d34fd3b1f105944251711&q=${cityname}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result)

    const weatherData = {
        cityName: `${result.location.name}, ${result.location.country}`,
        tempC: result.current.temp_c,
        conditionText: result.current.condition.text,
        feelsLike: result.current.feelslike_c,
        humidity: result.current.humidity,
        localTime: result.location.localtime,
        windKph: result.current.wind_kph,
        windDir: result.current.wind_dir,
        pressureMb: result.current.pressure_mb,
        precipMm: result.current.precip_mm,
        lastUpdated: result.current.last_updated,
        visibility: result.current.vis_km,
        uv: result.current.uv,
        cloud: result.current.cloud,
        dewpoint: result.current.dewpoint_c,
        timestamp: Date.now() // Store when data was saved
    };

    localStorage.setItem("weatherData", JSON.stringify(weatherData));

    cityname.innerText = weatherData.cityName;
    tempc.innerText = `${weatherData.tempC}°C`;
    conditiontext.innerText = weatherData.conditionText;
    feekslike.innerText = `${weatherData.feelsLike}°C`;
    humidity.innerText = `${weatherData.humidity}`;
    localtime.innerText = weatherData.localTime;
    windkph.innerText = `${weatherData.windKph} kph`;   
    winddirection.innerText = weatherData.windDir;
    pressuremb.innerText = `${weatherData.pressureMb} mb`;
    pressiptionmm.innerText = `${weatherData.precipMm} mm`;
    lastupdated.innerText = `Last Updated: ${weatherData.lastUpdated}`;
    visibility.innerText = `${weatherData.visibility} km`;
    uv.innerText = `${weatherData.uv}`;
    cloud.innerText = `${weatherData.cloud} %`;
    dewpoint.innerText = `${weatherData.dewpoint} °C`;
    
});

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('weatherData');
    
    if (savedData) {
        const weatherData = JSON.parse(savedData);
        
        // Populate UI with saved data
        cityname.innerText = weatherData.cityName;
        tempc.innerText = `${weatherData.tempC}°C`;
        conditiontext.innerText = weatherData.conditionText;
        feekslike.innerText = `${weatherData.feelsLike}°C`;
        humidity.innerText = `${weatherData.humidity}`;
        localtime.innerText = weatherData.localTime;
        windkph.innerText = `${weatherData.windKph} kph`;
        winddirection.innerText = weatherData.windDir;
        pressuremb.innerText = `${weatherData.pressureMb} mb`;
        pressiptionmm.innerText = `${weatherData.precipMm} mm`;
        lastupdated.innerText = `Last Updated: ${weatherData.lastUpdated}`;
        visibility.innerText = `${weatherData.visibility} km`;
        uv.innerText = `${weatherData.uv}`;
        cloud.innerText = `${weatherData.cloud} %`;
        dewpoint.innerText = `${weatherData.dewpoint} °C`;
    }
});