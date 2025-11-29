/*----------------------------------------------------------------------*/
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

/*----------------------------------------------------------------------*/
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

/*----------------------------------------------------------------------*/
// Botón para agregar habilidades
const btnAgregar = document.getElementById("agregarHabilidadBtn");

// Evento al hacer clic en el botón
btnAgregar.addEventListener("click", () => {
    const habilidadIngresada = prompt("¿Cuál es tu nueva habilidad?");

    // Validamos la entrada del usuario
    if (!habilidadIngresada) {
        alert("Debes escribir una habilidad.");
        return;
    }

    const habilidad = habilidadIngresada.trim();

    if (habilidades.includes(habilidad)) {
        alert("Esta habilidad ya existe en la lista.");
        return;
    }

    // Agregar y refrescar la lista
    habilidades.push(habilidad);
    actualizarListaHabilidades();
});

/*----------------------------------------------------------------------*/
// Referencia al input de color
const colorPicker = document.getElementById("colorPicker");

// Cambia el fondo de la landin  page cuando el usuario cambia el color
colorPicker.addEventListener("input", (event) => {
    const color = event.target.value;   // Color seleccionado
    document.body.style.backgroundColor = color;
});

/*----------------------------------------------------------------------*/