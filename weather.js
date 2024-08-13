let cityInput = document.getElementById("cityInput")
let form = document.getElementById("form")
let APIKEY = "da3ee8d783d3907151616f952f02d3f1"
let weatherResultContainer = document.getElementById("weather-result-container")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let city = cityInput.value
    collectWeatherReport(city)
    form.reset()
})

function collectWeatherReport(city){
    let weatherRequest = new XMLHttpRequest()
    weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)

    weatherRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText)
            printWeatherOnUI(data)
        }
    }
    weatherRequest.send()
}

function printWeatherOnUI(data){
    weatherResultContainer.innerHTML = ``
    let temperature = data.main.temp
    let humidity = data.main.humidity
    let nameOfCity = data.name 

    let nameOfCityContainer = document.createElement("div")
    nameOfCityContainer.classList.add("name-of-city-container")

    let nameOfCityText = document.createElement("h1")
    nameOfCityText.textContent = nameOfCity

    let currentTempContainer = document.createElement("div")
    currentTempContainer.classList.add("current-temperature-container")

    let displayTempTitle = document.createElement("p")
    displayTempTitle.textContent = `Current Temperature`

    let displayCurrentTemp = document.createElement("h5")
    displayCurrentTemp.textContent = `${(temperature - 273.15).toFixed()}°C`

    let humidityContainer = document.createElement("div")
    humidityContainer.classList.add("humidity-container")

    let humidityTitle = document.createElement("p")
    humidityTitle.textContent = `Humidity`

    let displayHumidity = document.createElement("h5")
    displayHumidity.textContent = humidity


    nameOfCityContainer.append(nameOfCityText)
    currentTempContainer.append(displayTempTitle, displayCurrentTemp)
    humidityContainer.append(humidityTitle, displayHumidity)
    weatherResultContainer.append(nameOfCityContainer, currentTempContainer, humidityContainer)
}