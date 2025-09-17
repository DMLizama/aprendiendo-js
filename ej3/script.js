const formulario = document.getElementById("formulario");
const nombre = document.getElementById("inputNombre");
const correo = document.getElementById("inputCorreo");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (nombre.value.trim() == "" || correo.value.trim() == ""){
        mensaje.textContent = "Porfavor, compelta todos los campos.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado correctamente.";
        mensaje.style.color = "green";

        formulario.reset();
    }
});