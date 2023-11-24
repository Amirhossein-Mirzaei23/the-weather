
//date array
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
///variable
let cityInputElem=document.querySelector("input")
let citynameElem=document.querySelector(".city")
let dateElem=document.querySelector(".date")
let citytemp=document.querySelector(".temp")
let feeltemp=document.querySelector(".feel")
let cityweather=document.querySelector(".weather")
let cityhiLow=document.querySelector(".hi-low")
let cityname="mashhad"
let date =new Date
//set city and get new data from the API 
cityInputElem.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        cityname=cityInputElem.value
    getData()
    }
})
// get data from API
function getData(){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6bc9aef977cba03d9e296cb75c99fed0&units=metric`,{
       method:"GET"
   }).then(res=>res.json())
   .then(data=>{
       console.log(data);
       dateElem.innerHTML=`${days[date.getDay()]} ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`
       citynameElem.innerHTML=`${data.name},${data.sys.country}`
       cityweather.innerHTML=`${data.weather[0].main}`
       feeltemp.innerHTML=`${data.main.feels_like}`
       citytemp.innerHTML=`${data.main.temp}°c`
       cityhiLow.innerHTML=`${Math.round(data.main.temp_max)}°c/${Math.round(data.main.temp_min)}°c`
       cityInputElem.value=""
   }).catch(()=>{
       alert("city is not found")
       cityInputElem.value=""
   })
}
getData()

