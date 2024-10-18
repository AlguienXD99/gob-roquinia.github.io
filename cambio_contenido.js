document.addEventListener("DOMContentLoaded", function() {
    const horaActual = new Date().getHours(); // Obtiene la hora actual
    const contenido = document.getElementById('contenido');

    // Cambia la hora aquí (ejemplo: de 3 PM a 4 PM solo se muestra la imagen)
    if (horaActual >= 15 && horaActual < 16) {
        contenido.innerHTML = '<img src="imagen_secreta.jpg" alt="Imagen especial" style="display: block; margin: 0 auto; width: 100%; height: auto;">';
    }
});
