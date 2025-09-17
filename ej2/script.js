const input = document.getElementById("tareaInput");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");



boton.addEventListener("click", function() {
    const texto = input.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        li.addEventListener("click", function() {
            lista.removeChild(li);
        });
        lista.appendChild(li);

        input.value = "";
    }
});