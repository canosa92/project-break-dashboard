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

divDia.innerHTML=`${fecha.getDay()}/${mes[fecha.getMonth()]}/${fecha.getUTCFullYear()}`
divHora.innerHTML=`${horas}:${minutos}:${segundos}`
containerReloj.innerText=textoAlt
containerReloj.appendChild(divDia)
containerReloj.appendChild(divHora)

reloj.appendChild(containerReloj)
},1000)
}

horaActual()

/*Vamos con el fondo aleatorio*/
const body =document.querySelector('body')

const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 12);
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
setInterval(()=>fondo(),15000)
fondo()

