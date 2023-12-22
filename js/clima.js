
/*Vamos con el fondo aleatorio*/
//traemos el body
const body =document.querySelector('body')
//creamos una funcion que nos de fondos aleatorios
const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 11)+1;
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
//le damos intervalo de tiempo para que se vaya repitiendo la funcion fondo
setInterval(()=>fondo(),15000)
fondo()


const clima=document.getElementById('clima')
let btnClima=document.getElementById('btn-clima')

const apiKey ='a78be1ba806b4b74b6a144750231912' 
let ciudad = 'A Coruna'


async function obtenerClima(){
    try{
        const respuesta = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&aqi=yes&alerts=yes`)
        const datos= await respuesta.json()
console.log(datos)
       pintarClima(datos)
}catch (error){
    console.log('Se ha producido un error', error)
}}

async function pintarClima(datos){
      
      let location=datos.location.name
      let locationRegion=datos.location.region
      let locationCountry=datos.location.country
      let condicion=datos.current.condition.text
      let iconCondicion =datos.current.condition.icon
      let {humidity, feelslike_c, wind_kph, precip_mm, temp_c} = datos.current; 
      
      let localizacion=`${location}/${locationRegion}/${locationCountry}`
      
      
      const divClima= document.createElement('div')
      divClima.classList.add("clima_Actual")
      let html= `<div class='clima_basico'><h3>${localizacion}</h3>
                  <p>${condicion}</p>
                  </div>
                  <div class='clima_profundo'>
                  <img src='${iconCondicion}'> 
                  <h3>${temp_c}ºC</h3>
                  <div class='climatexto'>
                  <p>Humedad: ${humidity}%</p>
                  <p>Sensacion: ${feelslike_c}ºC</p>
                  <p>Viento: ${wind_kph}Km/h</p>
                  <p>Precipitaciones: ${precip_mm}%</p>
                  </div>
                  </div>
                  `
                  
        divClima.innerHTML=html
        let horas = datos.forecast.forecastday[0].hour;
const divHoras= document.createElement('div')
divHoras.classList.add('climaXhoras')
        horas.forEach(hora => {
            let time = hora.time;
            let hour = time.slice(-5);
    
            let templateHoras = `
                <div class='climaHorario' >
                    <p>${hour}</p>
                    <img src="${hora.condition.icon}">
                    <p>${hora.temp_c} ºC</p>
                </div>
            `;
            divHoras.innerHTML += templateHoras; 
        })


clima.appendChild(divClima)
clima.appendChild(divHoras)
}
obtenerClima()