const container = document.querySelector(".container");
const search = document.querySelector(".searchbox button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click', () => {
  const APIKey = '4c1b79ba8e8e8380970cb105dd818a5a';
  const city = document.querySelector('.searchbox input').value;

  if (city === '') {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0].main) {
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

        default:
          image.src = 'images/cloud.png';
          break;
      }

      temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${Math.round(json.wind.speed)} km/h`;

      weatherBox.style.display = '';
      weatherDetails.style.display = '';
    });
});
