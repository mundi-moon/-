const weatherData =  document.querySelectorAll("#weather span");
const API_KEY = "8541d898aa3b4fbadbb44d0cba4d8f8f";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        
        // //span에 집어 넣는거
        // weatherData[0].innerText = data.name;
        // weatherData[1].innerText = `${data.weather[0].main}`;
        // weatherData[2].innerText = `${data.main.temp}`;
        // //재 이름 설정
        // const city = data.name;
        // const weather = data.weather[0].main;
        // const temp = data.main.temp;

        //재 이름 설정
        const city = weatherData[0];
        const weather =  weatherData[1];
        const temp =weatherData[2];
        
        //span에 집어 넣는거
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}°`;

        
        // console.log(city, weather, temp)
        // setInterval(function(){
        //     onGeoOk(position);
        //     console.log("2초");},1800000);
        // ;
        weatherData.innerText
    });
}

function onGeoError(){
    alert("can't find you. No weather for you");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);