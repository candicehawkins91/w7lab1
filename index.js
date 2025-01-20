'use strict';

let weekWeather = document.getElementById('daysWeather');


const daysWeather = [
  { day: "Sunday", temperature: 39, rainfall: 0 },
  { day: "Monday", temperature: 40, rainfall: 1 },
  { day: "Tuesday", temperature: 34, rainfall: 0.5 },
  { day: "Wednesday", temperature: 40, rainfall: 0 },
];

for (let i = 0; i < daysWeather.length; i++) {
  let dayWeather = daysWeather[i];
  let day = dayWeather.day;
  let temperature = dayWeather.temperature;
  let rainfall = dayWeather.rainfall;

  let dayWeatherElement = document.createElement('tr');
  dayWeatherElement.innerHTML = `<th scope="row">${i + 1}</th>
  <td>${day}</td>
  <td>${temperature}</td>
  <td>${rainfall}</td>`;

  weekWeather.appendChild(dayWeatherElement);
}


