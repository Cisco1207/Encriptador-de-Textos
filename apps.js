//modo oscuro
let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change', (event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if(checked==true){
        label_toggle.innerHTML= '<i class="gg-sun"></i>';
        label_toggle.style.color = "#85C1E9";
    } else{
        label_toggle.innerHTML= '<i class="gg-moon"></i>';
        label_toggle.style.color = "rebeccapurple"; 
    }
});

// ----- seleccion de elemento ---- //
const encriptar = document.querySelector(".Encriptar");
const textoEncriptado = document.querySelector("#texto");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector("#txt-enviado");
const copiar = document.querySelector(".Copiar");
const desencriptar = document.querySelector(".Desencriptar");

// ----- boton de encriptar ---- //
encriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptado.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El campo no debe estar vacio!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡No debe terner acentos y caracteres especiales!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    } 
    
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El texto debe ser todo en minuscula!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
    }
})

// ----  boton de Desencriptar ----//
desencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptado.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El campo no debe estar vacio!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡No debe terner acentos y caracteres especiales!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    } 
    
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El texto debe ser todo en minuscula!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        copiar.style.Visibility = "inherit";
    }
})

// ----  boton de Copiar ----//
copiar.addEventListener("click", e=>{
    e.preventDefault();
    let Copiar = respuesta;
    Copiar.select();
    document.execCommand("copy");
})
