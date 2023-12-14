// Arreglo con los nombres de las imágenes en el orden deseado
const imageNames = ["1.png", "2.png", "3.png"];

// Elemento <image> que queremos cambiar
const imageElement = document.getElementById("image");

// Función para cambiar la imagen después de un retraso
function changeImageWithDelay(index) {
    setTimeout(() => {
        if (index < imageNames.length) {
            imageElement.setAttribute("xlink:href", imageNames[index]);
            changeImageWithDelay(index + 1); // Cambiar a la siguiente imagen después de 3 segundos
        }
    }, 3000); // 3000 milisegundos = 3 segundos
}

// Comenzar con la primera imagen
changeImageWithDelay(1); // Empieza desde 1.png
