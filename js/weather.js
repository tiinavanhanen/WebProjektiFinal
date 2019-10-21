fetch('http://api.openweathermap.org/data/2.5/weather?q=Vantaa&appid=7c4619e38a85d5aacf6c4cba6e418a0f&units=metric&lang=fi')
    .then(function(vastaus){
    return vastaus.json();
}).then(function(json){
    naytaTiedot(json);
}).catch(function(error){
    console.log(error);
});

const weather = document.getElementById('weather');
const weatherpic = document.getElementById('weatherpic');

function naytaTiedot(tiedot) {
    const desc = tiedot.weather[0].description;
    const temp = (tiedot.main.temp).toFixed(1);
    const main = tiedot.weather[0].main;
    console.log(desc);

    const litemp = document.createElement('p');
    litemp.innerText = "Lämpötila: " + temp + "°C";
    weather.appendChild(litemp);

    switch (main) {
        case 'Clear':
            const clear = document.createElement('img');
            clear.src = 'http://openweathermap.org/img/w/01d.png';
            clear.alt = 'Pilvetön taivas';
            weather.appendChild(clear);
            break;
        case 'Clouds':
            const clouds = document.createElement('img');
            clouds.src = 'http://openweathermap.org/img/w/03d.png';
            clouds.alt = 'Pilvistä';
            weatherpic.appendChild(clouds);
            break;
        case 'Drizzle':
            const shower = document.createElement('img');
            shower.src = 'http://openweathermap.org/img/w/10d.png';
            shower.alt = 'Sadekuuroja';
            weatherpic.appendChild(shower);
            break;
        case 'Rain':
            const rain = document.createElement('img');
            rain.src = 'http://openweathermap.org/img/w/09d.png';
            rain.alt = 'Sateista';
            weatherpic.appendChild(rain);
            break;
        case 'Thunderstorm':
            const thunder = document.createElement('img');
            thunder.src = 'http://openweathermap.org/img/w/11d.png';
            thunder.alt = 'Ukkosta';
            weatherpic.appendChild(thunder);
            break;
        case 'Snow':
            const snow = document.createElement('img');
            snow.src = 'http://openweathermap.org/img/w/13d.png';
            snow.alt = 'Lumisadetta';
            weatherpic.appendChild(snow);
            break;
        case 'Mist':
            const mist = document.createElement('img');
            mist.src = 'http://openweathermap.org/img/w/50d.png';
            mist.alt = 'Sumuista';
            weatherpic.appendChild(mist);
            break;
    }
}