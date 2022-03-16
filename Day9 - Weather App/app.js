var search = document.querySelector('.search')
var content = document.querySelector('.content')
var city = document.querySelector('.place .city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temperature = document.querySelector('.temperature')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sunny = document.querySelector('.sunny')

function changeWeatherUi(data) {
   if (data.cod === 200) {
    city.innerHTML = data.name
    country.innerHTML = data.sys.country
    time.innerHTML = new Date().toLocaleString()
    temperature.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>
    C `
    shortDesc.innerHTML = data.weather[0].main
    visibility.innerHTML = `<i class="fa-solid fa-eye"></i>${data.visibility} (m)`
    wind.innerHTML = `<i class="fa-solid fa-wind"></i>${data.wind.speed} (m/s)`
    sunny.innerHTML = ` <i class="fa-solid fa-cloud-sun"></i>${data.main.humidity} (%)`
   } else {
       content.classList.add('hide')
   }
}

async function getDataWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    const data = await fetch(url).then(res => res.json())
    console.log(data)
    changeWeatherUi(data)

    if (data.main.temp > 18) {
        document.body.className = 'hot'
    } else {
        document.body.className = 'cold'
    }
} 

getDataWeather('hanoi')


search.addEventListener('keydown', function(e) {
    if (e.key.trim() === "Enter") {
        getDataWeather(search.value.trim())
    }
})




