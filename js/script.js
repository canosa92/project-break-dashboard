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

//creamos el scrpit para el reloj
const reloj =document.getElementById('reloj')

const horaActual =()=>{
    setInterval(()=>{
    reloj.innerHTML=''
    //creamos la fecha actual
    let fecha= new Date();

    //Traducimos al español la fecha
    let mes =['1','2','3','4','5','6','7', '8','9','10','11','12']   

    //creamos la hora, minutos y segundos
    let horas=fecha.getHours();
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();

    //agregando el 0 a los valores si son menores de 10
   horas= (horas <10) ? "0" + horas : horas;
   minutos= (minutos <10)? "0" + minutos: minutos;
   segundos= (segundos <10)?"0" + segundos : segundos

   /*Creamos un texto alternativo segun que hora sea
   Vamos a crear una variable que una horas y dias
   Creamos las condiciones para que ponga un texto u otro */
   let horayMin=`${horas}:${minutos}`
   let textoAlt=''

   if(horayMin >= '00:01' && horayMin <= '07:00'){
    textoAlt='Es hora de descansar. Apaga y sigue mañana'
   } else if(horayMin >='07:01' && horayMin <='12:00'){
    textoAlt='Buenos días, desayuna fuerte y a darle al código'
   }else if(horayMin >='12:01' && horayMin <='14:00'){
    textoAlt='Echa un rato más pero no olvides comer'
   }else if(horayMin >='14:01' && horayMin<= '16:00'){
    textoAlt='Espero que hayas comido'
   } else if (horayMin >= '16:01' && horayMin <= '18:00'){
    textoAlt = 'Buenas tardes, el último empujón'
   } else if (horayMin >= '18:01' && horayMin <= '22:00'){
    textoAlt ='Esto ya son horas extras, ... piensa en parar pronto'
   }else{
    textoAlt ='Buenas noches, es hora de pensar en parar y descansar'
   }

   console.log(textoAlt)
    //mostrando la hora en el html
const divDia= document.createElement('div')
divDia.classList.add('divDia')
const divHora = document.createElement('div')
divHora.classList.add('divHora')
const containerReloj = document.createElement('div')
containerReloj.classList.add('containerReloj')

divDia.innerHTML=`${fecha.getDate()}/${mes[fecha.getMonth()]}/${fecha.getUTCFullYear()}`
divHora.innerHTML=`${horas}:${minutos}:${segundos}`
containerReloj.innerText=textoAlt
containerReloj.appendChild(divDia)
containerReloj.appendChild(divHora)

reloj.appendChild(containerReloj)
},1000)
}

//

const btnguardar= document.getElementById('btn_guardar')
const favoritos=document.getElementById('favoritos')



btnguardar.addEventListener('click',(e)=>{
     e.preventDefault()
    let nombreLink =document.getElementById('nombre').value
    let link=document.getElementById('enlace').value
 
    if (!nombreLink || !link) {
        alert('Debes introducir el Nombre del enlace y el Enlace');
        return;
    }
    dibujarLink(nombreLink,link) 
    let guardarLinks=JSON.parse(localStorage.getItem('links'))||[]
    guardarLinks.push({nombreLink,link})
    localStorage.setItem(`links`,JSON.stringify(guardarLinks))
})
function dibujarLink(nombreLink,link){ 
    let  divLink=document.createElement('li') 

    let html =`<div class='divLink'>
    <button class="btnLink" onclick="eliminarLinks(this)">X</button>
    <p><a href='${link}'>${nombreLink}</a></p>
    </div>`

    divLink.innerHTML=html
    favoritos.appendChild(divLink)

}
function mostrarLinks(){
    const linksGuardados= JSON.parse(localStorage.getItem('links'));
    linksGuardados.forEach((nombreLink,) => {
        dibujarLink(nombreLink.nombreLink,nombreLink.link);
        
    });
}
mostrarLinks()
function eliminarLinks(elemento){
    const linksGuardados= JSON.parse(localStorage.getItem("links"))
    const linkIndex=Array.from(favoritos.children).indexOf(elemento.parentNode)
    elemento.parentNode.remove()
    linksGuardados.splice(linkIndex,1)
    localStorage.setItem("links",JSON.stringify(linksGuardados))
}
//Nos traemos los elementos del Dom que nos interesa
const number =document.getElementById('number')
const btnContra= document.getElementById('btn_contraseña')
const divContra =document.getElementById('div_contra')

const may='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const min ='abcdefghijklmnopqrstuvwxyz'
const num ='0123456789'
const simb = '!@#$%^&*()-_=+'
const total= may +min +num +simb

btnContra.addEventListener('click',(e)=>{
    let limite =number.value
    divContra.innerHTML=''
   let password=''
e.preventDefault()
    password += may[Math.floor(Math.random()*may.length)]
    password += min[Math.floor(Math.random()*min.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += simb[Math.floor(Math.random()*simb.length)]
    do 
        password +=total[Math.floor(Math.random()*total.length)]
        while (password.length <= limite)
        divContra.innerHTML=`<h4>tu contraseña es:<br>
                        <span>${password}</span></h4>`   
})

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
                  <div>
                  <p>Humedad: ${humidity}%</p>
                  <p>Sensacion: ${feelslike_c}ºC</p>
                  <p>Viento :${wind_kph}Km/h</p>
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
                <div class >
                    <p>${hour}</p>
                    <img src="${hora.condition.icon}" alt="">
                    <p>${hora.temp_c}ºC</p>
                </div>
            `;
            divHoras.innerHTML += templateHoras; })


clima.appendChild(divClima)
clima.appendChild(divHoras)
}
obtenerClima()
horaActual()
fondo()