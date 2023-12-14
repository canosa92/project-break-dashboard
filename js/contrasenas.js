/*Vamos con el fondo aleatorio*/
const body =document.querySelector('body')

const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 11)+1;
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
setInterval(()=>fondo(),15000)

















fondo()

