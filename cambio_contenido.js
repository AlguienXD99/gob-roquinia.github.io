document.addEventListener("DOMContentLoaded", function() {
    const horaActual = new Date().getHours(); // Obtiene la hora actual
    
    const horaInicio = 16; // Cambia aquí la hora de inicio (ejemplo: 12 PM)
    const horaFin = 17; // Cambia aquí la hora de fin (ejemplo: 1 PM)
    
    const contenido = document.getElementById('contenido');

    // Si la hora actual está dentro del rango definido, cambia el contenido a una imagen
    if (horaActual >= horaInicio && horaActual < horaFin) {
        contenido.innerHTML = '<img src="imagen_secreta.jpg" alt="Imagen especial" style="display: block; margin: 0 auto; width: 100%; height: auto;">';
    }
});
