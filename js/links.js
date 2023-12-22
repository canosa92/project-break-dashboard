
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
    <p><a href='${link}' target='_blank'>${nombreLink}</a></p>
  
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

fondo()








fondo()

