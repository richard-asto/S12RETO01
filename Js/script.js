let contadorDeClicks = 0;
const habilidades = ["HTML", "CSS", "JavaScript"];

// Cuando carga la página, mostramos la lista
actualizarListaHabilidades();

// Actualiza la lista de habilidades en pantalla
function actualizarListaHabilidades() {
    const lista = document.getElementById("habilidadesLista");
    lista.innerHTML = ""; // Limpiamos la lista

    // Recorremos el arreglo y creamos <li> para cada habilidad
    habilidades.forEach(habilidades => {
        const item = document.createElement("li");
        item.textContent = habilidades;
        lista.appendChild(item);
    });
}

// Referencias a elementos
const btnMostrar = document.getElementById("mostrarMensajeBtn");
const mensaje = document.getElementById("mensaje");

// Evento de clic al botón
btnMostrar.addEventListener("click", () => {
    contadorDeClicks++;

    if (contadorDeClicks === 1) {
        mensaje.style.display = "block"; // Primera vez
    } else {
        alert(`Ya hiciste clic antes. Intentos: ${contadorDeClicks}`);
    }
});