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
const min ='abcdefghijklmnopqrstuvwxyz'
const num ='0123456789'
const simb = '!@#$%^&*()-_=+'
const total= may +min +num +simb





btnContra.addEventListener('click',(e)=>{
    let limite =number.value
    e.preventDefault();
    divContra.innerHTML =''
    password += may[Math.floor(Math.random()*may.length)]
    password += min[Math.floor(Math.random()*min.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += simb[Math.floor(Math.random()*simb.length)]
    do 
        password +=total[Math.floor(Math.random()*total.length)]
        while (password.length===limite)
    divContra.innerHTML=`tu contraseña es:${password}`
})
