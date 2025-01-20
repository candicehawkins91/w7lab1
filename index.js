"use strict";

let weekWeather = document.getElementById("daysWeather");

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

  let dayWeatherElement = document.createElement("tr");
  dayWeatherElement.innerHTML = `<th scope="row">${i + 1}</th>
  <td>${day}</td>
  <td>${temperature}</td>
  <td>${rainfall}</td>`;

  weekWeather.appendChild(dayWeatherElement);
}

function calculateavgTemp() {
  let avgTempP = document.getElementById("avgTempP");
  avgTempP.innerText =
    daysWeather.reduce((acc, curr) => acc + curr.temperature,0) /
    daysWeather.length;
}

  let avgTempB = document.getElementById("avgTemp");
  avgTempB.addEventListener("click",calculateavgTemp)

  let maxRainB = document.getElementById("maxRain");

  
  function calculateavgTemp() {
  let maxRainDay = document.getElementById("maxRain");
  maxRainDay.innerText =
  daysWeather.length;
}
    daysWeather.reduce((acc, curr) => acc + curr.temperature,0) /
    
    const maxRainP =daysWeather.reduce(maxDay, currentDay) => currentDay.rainfall > maxDay.rainfall ? currentDay : maxDay);
    
    document.getElementById("maxRainP").textContent = `Day with Max Rain: ${maxRainDay.day {$maxRainDay.rainfall} in`;
