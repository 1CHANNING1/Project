const d = document;

const btnEnviar = d.getElementById('btn-enviar');
const usuario = d.getElementById('nombre');
const email = d.getElementById('email');
const edad = d.getElementById('edad');
const turno = d.getElementById('date');

function onClick (){
  window.location.href= "form_thanks-page.html"
}



function validar(e) {
  

  
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }

  if (email.value === "@" || email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (edad.value === "") {
    alert("Por favor, escribe tu edad");
    edad.focus();
    return false;
  }

  if (edad.value < "18") {
    alert("Podrás asistir a tu turno sólo si vienes acompañado con un mayor, deberás gestionar tu turno a su nombre");
    edad.focus();
    return false;
  }

  if (turno.value === "") {
    alert("Por favor, ingrese la fecha en la que desea asistir a nuestra estética");
    turno.focus();
    return false;
  } else {
    onClick()
    return true;
    
  }
}
btnSubmit = document.querySelector('[type="submit"]')
btnSubmit.addEventListener('click', validar);


