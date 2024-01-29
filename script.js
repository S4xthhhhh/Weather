let latitude;
let longitude;

async function sucess(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  getWeather(longitude, latitude);
  await getQuote();
}

const error = () => {
  alert("Allow location to get weather");
};

navigator.geolocation.getCurrentPosition(sucess, error);

async function getWeather(longitude, latitude) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=701a799e3d7e55b85f203bf41968344b`
  );
  let response = await data.json();

  document.getElementById("temp").innerHTML = response.main.feels_like;
  document.getElementById("condition").innerHTML =
    response.weather[0].main;

  document.getElementById("humidity").innerHTML = response.main.humidity;
  document.getElementById("wind").innerHTML = response.wind.speed;
  document.getElementById("place").innerHTML = response.name;

  const condition = response.weather[0].main;

  if (condition === "Clear") {
    document.getElementById("condition-pic").src = "./Assets/clear.png";
  } else if (condition === "Rain") {
    document.getElementById("condition-pic").src = "./Assets/rain.png";
  } else if (condition === "Snow") {
    document.getElementById("condition-pic").src = "./Assets/snow.png";
  } else if (condition === "Clouds") {
    document.getElementById("condition-pic").src = "./Assets/cloud.png";
  } else if (condition === "Drizzle") {
    document.getElementById("condition-pic").src = "./Assets/drizzle.png";
  }
}

async function getQuote() {
  const response = await fetch(`https://api.quotable.io/random`);
  let data = await response.json();
  document.getElementById("quote").textContent = data.content;
  document.getElementById("author-name").textContent = data.author;
}

async function getWeatherbyCity() {
  let cityName = document.getElementById("search-input").value;
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName.trim()}&appid=701a799e3d7e55b85f203bf41968344b`
  );
  let response = await data.json();

  if (response.cod == 404) {
    
  } else {
    document.getElementById("temp").innerHTML = response.main.feels_like;
    document.getElementById("condition").innerHTML =
      response.weather[0].main;
    document.getElementById("humidity").innerHTML = response.main.humidity;
    document.getElementById("wind").innerHTML = response.wind.speed;
    document.getElementById("place").innerHTML = response.name;

    async function getQuote() {
      const response = await fetch(`https://api.quotable.io/random`);
      let data = await response.json();
      document.getElementById("quote").textContent = data.content;
      document.getElementById("author-name").textContent = data.author;
    }

    const condition = response.weather[0].main;

      if (condition === "Clear") {
        document.getElementById("condition-pic").src = "./Assets/clear.png";
      } else if (condition === "Rain") {
        document.getElementById("condition-pic").src = "./Assets/rain.png";
      } else if (condition === "Snow") {
        document.getElementById("condition-pic").src = "./Assets/snow.png";
      } else if (condition === "Clouds"||condition==="Mist") {
        document.getElementById("condition-pic").src = "./Assets/cloud.png";
      } else if (condition === "Drizzle") {
        document.getElementById("condition-pic").src = "./Assets/drizzle.png";
      }
      getQuote()
  }
}
