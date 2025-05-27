document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('Nombre');
    if (nombre) {
        const text = "AdriHDZ-DV";
        let index = 0;

        function writeText() {
            nombre.textContent = text.slice(0, index);
            index++;

            if (index > text.length) {
                index = text.length;
            } else {
                setTimeout(writeText, 150);
            }
        }

        writeText();
    }
});

// let nombre;

// do {
//     nombre = prompt("Ingresa Tu Nombre: ");
//     if (nombre == null) {
//         alert("Por favor, ingresa tu nombre");
//     } else {
//         document.getElementById('Nombre').innerHTML = "Hola " + nombre;
//     }
// } while (nombre == null);