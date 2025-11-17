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
    cityname.innerText = `${result.location.name}, ${result.location.country}`
    tempc.innerText = `${result.current.temp_c}°C`;
    conditiontext.innerText = `${result.current.condition.text}`;
    feekslike.innerText = `${result.current.feelslike_c}°C`;
    humidity.innerText = `${result.current.humidity}`
    // conditionicon.src = `https:${result.current.condition.icon}`;
    localtime.innerText = `${result.location.localtime}`;
    windkph.innerText = `${result.current.wind_kph} kph`;   
    winddirection.innerText = `${result.current.wind_dir}`;
    pressuremb.innerText = `${result.current.pressure_mb} mb`;
    pressiptionmm.innerText = `${result.current.precip_mm} mm`;
    lastupdated.innerText = `Last Updated: ${result.current.last_updated}`;
    visibility.innerText = `${result.current.vis_km} km`;
    uv.innerText = `${result.current.uv}`;
    cloud.innerText = `${result.current.cloud} %`;
    dewpoint.innerText = `${result.current.dewpoint_c} °C`;

    //set bg image based on weather condition
    // weathercard.style.backgroundImage = `url('https:${result.current.condition.icon}')`;
})