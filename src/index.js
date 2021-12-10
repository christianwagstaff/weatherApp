const body = document.body;

async function getCurrentWeather(city) {
    const response = await fetch('api.openweathermap.org/data/2.5/weather?q=ventura,CA&appid=707ee2330d6d3bbdba130f36f9f19e4f', {mode: "cors"});
    console.log(response)
}