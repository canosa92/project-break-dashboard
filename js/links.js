/*Vamos con el fondo aleatorio*/
const body =document.querySelector('body')

const fondo =()=>{
    const numAleat = Math.floor(Math.random() * 11)+1;
    body.style.backgroundImage = `url("../assets/img/${numAleat}.jpg")`;
}
setInterval(()=>fondo(),15000)

//traemos los elementos del dom que nos interesa

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
    <p><a href='${link}'>${nombreLink}</a></p>
    <button class="btnLink" onclick="eliminarLinks(this)">X</button>
    </div>`

    divLink.innerHTML=html
    favoritos.appendChild(divLink)
    console.log(html)

}
function mostrarLinks(){
    const linksGuardados= JSON.parse(localStorage.getItem('links'));
    linksGuardados.forEach((nombreLink) => {
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

