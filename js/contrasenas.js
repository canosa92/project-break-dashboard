/*Vamos con el fondo aleatorio*/
const body =document.querySelector('body')

const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 11)+1;
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
setInterval(()=>fondo(),15000)

//Nos traemos los elementos del Dom que nos interesa
const number =document.getElementById('number')
const btnContra= document.getElementById('btn_contraseña')
const divContra =document.getElementById('div_contra')
 let password =''
 
const may='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arrMay = may.split('')

const min ='abcdefghijklmnopqrstuvwxyz'
const arrMin = min.split('')

const num ='0123456789'
const arrNum= num.split('')

const simb = '!@#$%^&*()-_=+'
const arrSimb= simb.split('')





btnContra.addEventListener('click',(e)=>{
    e.preventDefault();
    divContra.innerHTML =''
})