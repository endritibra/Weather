let weather = {
    "apiKey":"2f1eafe8696bfb891cb68618ce23e106",
    fetchWeather:async function(city){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
        console.log(response)
        let data = await response.json()
        
        
        console.log(data);
        this.displayWeather(data)
       //this.displayWeather(data)
       
    },
    displayWeather:function(data){
       
       
        const {name} = data;
        const {temp,humidity} = data.main;
        
        const {icon,description}=data.weather[0];
       
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText="Weather in "+ name;
        document.querySelector(".temp").innerHTML=`${temp} <span>&#8451;</span>`
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
}







const inValue=document.querySelector('.search-bar');
const but=document.getElementById('buti');


but.addEventListener('click',function(){
        weather.fetchWeather(inValue.value);
         }

        
        );




/*
const fetchWeather = async () => {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=skopje&appid=2f1eafe8696bfb891cb68618ce23e106&units=metric)
    console.log(response)
    let data = response.json()
    console.log(data)

  }


  fetchWeather()*/