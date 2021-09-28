document.getElementById("nombre").addEventListener("mouseover", encima);
document.getElementById("nombre").addEventListener("mouseout", fuera);


function encima() {
    document.getElementById("nombre").style.color= "green";
    var texto=document.getElementById("nombre").innerText.toUpperCase();
    document.getElementById("nombre").innerText=texto;
}

function fuera() {
    document.getElementById("nombre").style.color= "black";
    var texto=document.getElementById("nombre").innerText.toLowerCase();
    document.getElementById("nombre").innerText=texto;
}
