let valor = 0;

const span = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");

btnIncrementar.addEventListener("click", function(){
    valor++;
    span.textContent = valor;
});

btnDecrementar.addEventListener("click", function(){
    valor--;
    span.textContent = valor;
});