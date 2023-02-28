const entrada = document.querySelector(".entrada__text");
const salida = document.querySelector(".salida__text");
const btnEncript = document.getElementById("encriptar")
const btnDesencript = document.getElementById("desencriptar")
const btncopy = document.getElementById("copiar")
const mensaje=document.querySelector(".entrada__alerta")
const msj = document.getElementById("quitar")
const quitar =()=>{
    msj.style.display="none";
};
const poner=()=>{
    msj.style.display="block"
}
const verificacion=()=>{
    let msgVal=entrada.value;
    let palabras="abcdefghijklmnñopqrstuvwxyz " 
    let mesError=""
    for(letra of msgVal){
        if(!palabras.includes(letra)){
            mesError="No se permite mayusculas ni otros caracteres especiales"
            mensaje.innerHTML=mesError;
            poner();
        }
        if(mesError.length===0){
            mesError=""
            mensaje.innerHTML=mesError;
            poner();
            return true
        }
        return false
    }
};

const encriptarPalabra = ()=>{
    if(!verificacion(entrada.value))return;
    let msg= entrada.value;
    let msgEncript = msg.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    salida.value=msgEncript;
    quitar();
};
const desencriptarPalabra=()=>{
    if(!verificacion(entrada.value))return;
    let msg= entrada.value;
    let msgDesencript = msg
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    salida.value=msgDesencript;
    quitar();
};
const copiar = ()=>{
    var msgEncrip = salida.value;
    navigator.clipboard.writeText(msgEncrip);
};
btnEncript.addEventListener("click",()=>{
    encriptarPalabra();
});
btnDesencript.addEventListener("click",()=>{
    desencriptarPalabra();
});
btncopy.addEventListener("click",()=>{
    copiar();
});