const clima=document.getElementById('clima')
let btnClima=document.getElementById('btn-clima')

const apiKey ='a78be1ba806b4b74b6a144750231912' 
let ciudad = 'A Coruna'

/*btnClima.addEventListener('click',(e)=>{
    e.preventDefault()
  let country=document.getElementById('ciudad').value
  let pais=document.getElementById('pais').value  
  ciudad = `${country} (${pais})`;
  console.log(ciudad)

  const infoClima= obtenerClima(ciudad)
})
*/

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
      let climaActual=datos.current
      let location=datos.location.name
      let locationRegion=datos.location.region
      let locationCountry=datos.location.country
      let timeLocation =datos.location.localtime
      let condicion=datos.current.condition.text
      let iconCondicion =datos.current.condition.icon
    
      let {humidity, feelslike_c, wind_kph, precip_mm, temp_c} = datos.current;
      
      
      let localizacion=`${location}/${locationRegion}/${locationCountry}`
      console.log(localizacion)
      
      const divClima= document.createElement('div')
      divClima.classList.add("container_clima")
      let html= `<h3>${localizacion}</h3>
                  <p>${condicion} <img src='${iconCondicion}'></p>`
        divClima.innerHTML=html
clima.appendChild(divClima)
}
obtenerClima()