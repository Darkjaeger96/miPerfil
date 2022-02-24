window.onload = iniciar; //Sin paréntesis


function iniciar(){
    document.getElementById("enviar").addEventListener('click',validar, false);
}

function validaEmail(){
    let elemento = document.getElementById("mail");
    limiarError(elemento);
    if(elemento.value == ""){
        alert("El email no puede estar vacío");
        error(elemento);
        return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elemento.value) || !/(.com)$/.test(elemento.value)
    && !/(.es)$/.test(elemento.value) && !/(.net)$/.test(elemento.value) && !/(.org)$/.test(elemento.value)){
        alert("Email no válido");
        error(elemento)
        return false;
    }

    return true;
}

function validaTelefono(){
    let elemento = document.getElementById("telefono");
    limiarError(elemento);
    if(isNaN(elemento.value) || elemento.value == "" || /^\d{1,8}$/.test(elemento.value)){
        alert("El teléfono no es correcto");
        error(elemento);
        return false
    }
    return true;
}


function validaCheck(){
    let dataCheck = document.getElementById("data");
    if(dataCheck.checked == false){
       alert("Debes aceptar el envío de datos personales.");
       return false
    }
    return true;
}

function validar(e){
    if(!e) e = window.event; // Por si IE
    if(validaEmail()&&validaTelefono()&&validaCheck()&&confirm("¿Enviar el formulario?")){
        document.getElementById("miFormulario").style.visibility = "hidden";
        document.getElementById("loadingImage").style.display = "block";
        setTimeout('completado()',5000);
        localStorage.setItem('mail', document.getElementById("mail").value);
        localStorage.setItem('phone', document.getElementById("telefono").value);
        return true;
        
    } else {
        e.preventDefault();
        return false;
    }
}


function completado(){
    document.getElementById("msgComplete").innerHTML = "Su solicitud ha sido enviada, en breve le contestaremos al email facilitado";
    document.getElementById("btnComplete").style.display = "block";
    document.getElementById("loadingImage").style.display = "none";
}

function error(elemento){
    elemento.className = "error";
    document.getElementById("msgerror").innerHTML = "El formulario tiene errores";
    elemento.focus();
}
function limiarError(elemento){
    elemento.className = "";
    document.getElementById("msgerror").innerHTML = "";
}


