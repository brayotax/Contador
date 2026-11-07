let numero = 0;
const pantalla = document.getElementById("Contador");

function aumentar() {
    numero++;
    pantalla.textContent = numero;
}

function disminuir() {
    numero--;
    pantalla.textContent = numero
}