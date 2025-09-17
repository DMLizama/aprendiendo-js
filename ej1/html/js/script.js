function colorAleatorio() {
    let letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) { //itera 6 veces para formar un color tipo #123ABC de 6 caracteres
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boton = document.getElementById("randomBackgrBtn");

boton.addEventListener("click", () => { //evento dee click->asigna un color aleatorio al background del HTMLbody
    document.body.style.backgroundColor = colorAleatorio(); //el botón debe ser llamado como elemento del document, no por la contaste declarada.
});