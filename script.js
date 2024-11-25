const form = document.getElementById('cinema-form');
const movieNameInput = document.getElementById('movie-name');
const dateInput = document.getElementById('date');
const priceInput = document.getElementById('price');
const functionsList = document.getElementById('functions-list');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar que el formulario se recargue

    const movieName = movieNameInput.value;
    const date = dateInput.value;
    const price = parseFloat(priceInput.value);

    const funcion = {
        pelicula: movieName,
        fecha: date,
        precio: price
    };

    const response = await fetch('/api/funciones/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcion)
    });

    const result = await response.json();
    console.log('Función agregada:', result);
    
    // Limpiar el formulario
    movieNameInput.value = '';
    dateInput.value = '';
    priceInput.value = '';

    obtenerFunciones();
});

async function obtenerFunciones() {
    const response = await fetch('/api/funciones/todas');
    const funciones = await response.json();

    functionsList.innerHTML = '';

    funciones.forEach(funcion => {
        const li = document.createElement('li');
        li.textContent = `${funcion.pelicula} - ${funcion.fecha} - $${funcion.precio}`;
        functionsList.appendChild(li);
    });
}

obtenerFunciones();
