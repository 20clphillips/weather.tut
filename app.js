window.addEventListener('load', ()=> {
    let long;
    let lat;
let temperatureDescription = document.querySelector (

"temperature-description"
);
    
let temperatureDescription = document.querySelector(".temperature-Description");
    
let temperatureDegree = document.querySelector(".temperature-Degree");
    let locationTimezone = document.querySelector(".location-Timezone");
    let temperatureSection = document.querySelector(".temperature");
const temperatureSpan = document.querySelector(".temperature span");
         if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition 
         (position=> {
long = position.coords.longitude;
lat = position.coords.latitude;
        
    
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = '${proxy}https://api.darksky.net/forecast/f969649693dd84fb17abe9d6f8becdd1/${lat},${long}';
        });
    }
});
fetch(api)
.then(response => {
    return Response.json();
})
.then(data =>{
    //Set DOM Elements from the API
    const {temperature, summary, icon}= data.currently;
//Set Dom Elements from the API
temperatureDegree.textContent = temperature;
temperatureDescription.textContent = summary;
location.Timezone.textContent = data.timezone;
//FORMULA FOR CELSIUS
let celsius = (temperature - 32) * (5 / 9);
//Set Icon
setIcons(icon, document.querySelector(".icon"));
//Set Icon
//Change temperature to Celsius/Farenheight
 temperatureSection.addEventListener('click', ()=>{
     if(temperatureSpan.textContent === "F"){
         temperatureSpan.textContent = "C";
         temperatureDegree.textContent = Math.floor(celsius);
     }else{
         temperatureSpan.textContent ="C";
temperatureDegree.textContent = temperature;
    }
}); 
    
        });
    ;

    function setIcons(icon,ID){
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        skycons.set(iconID, Skycons[currentIcon]);
    };

