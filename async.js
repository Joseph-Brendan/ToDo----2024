// Set Interval
// Will have an ID
// let text = document.getElementById("text")
// let button = document.getElementById("cancelButton")
// let container = document.getElementById("container")

// const ID = setInterval(function(){
//    let text = document.createElement("h1")
//    text.textContent = "Joseph Brendan"
//    container.append(text)
// }, 3000)

// button.addEventListener("click", function(){
//     clearInterval(ID)
//     text.textContent = "Interval Cleared"
// })



//HTTP - Hyper Text Transfer Protocol
// Client - Server Protocol
// HTTP Requests
// GET
// POST
// PUT
// DELETE

// HTTP STATUS CODES
//404
//200 OK
// 300
// 500



// let countrydiv = document.getElementById("countrydiv")
// const xmlRequest = new XMLHttpRequest()
// xmlRequest.open("GET", "./data.json")

// xmlRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText)
        
//         data.forEach((item)=>{
//             let name = item.name
//             let country = item.country

//             let nameElement = document.createElement("h3")
//             nameElement.textContent = name
//             let countryElement = document.createElement("p")
//             countryElement.textContent = country

//             countrydiv.append(nameElement, countryElement)
//         })
//     }
// }
// xmlRequest.send()
// Ready State status codes
// 0 - Initialization of the request
// 1 - Connection Established  between client and server
// 2 - Receipt of request
// 3 - Processing of request
// 4 - Is the request done processing and is a response about to come ?

let form = document.getElementById("form")
let input = document.getElementById("city")
let countrydiv = document.getElementById("countrydiv")



let city = "Lagos"
console.log(city)
let weatherRequest = new XMLHttpRequest()
let APIKEY = "da3ee8d783d3907151616f952f02d3f1"
weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)

weatherRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let data = JSON.parse(this.responseText)
        printDataOnUI(data)
    }
}

function printDataOnUI(data){
    console.log(data)
    let temperature = data.main.temp
    let convertedTemp = (temperature - 273.15).toFixed()
    console.log(convertedTemp)

    let tempText = document.createElement("p")
    tempText.textContent = `Your City's Temperature Is ${convertedTemp}`
    countrydiv.append(tempText)
}

weatherRequest.send()
