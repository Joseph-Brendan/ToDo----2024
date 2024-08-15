// fetch("GET", "./data.json").then((data)=>{
//     console.log(data)
// })

let city = "Lagos"
let APIKEY = "da3ee8d783d3907151616f952f02d3f1"

function collectWeatherData(){
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`

    fetch(endPoint).then().then().catch()
}
collectWeatherData()

