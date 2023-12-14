/*Vamos con el fondo aleatorio*/
const body =document.querySelector('body')

const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 11)+1;
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
setInterval(()=>fondo(),15000)

//traemos los elementos del dom que nos interesa
const nombre= document.getElementById('nombre')
const enlace= document.getElementById('')
















fondo()

