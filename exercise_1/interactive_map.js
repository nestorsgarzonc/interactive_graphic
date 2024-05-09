// Definición de la matriz 'items' que contiene los elementos interactivos.
const items = [
    // Cada objeto dentro de la matriz representa un elemento interactivo en el mapa.
    {
        type: "text", // Tipo de elemento, en este caso es texto.
        "customClassName": "interactive-map-item", // Clase CSS personalizada para estilos adicionales.
        title: "Andrew Ng", // Título del elemento, que es el nombre de una figura prominente en IA.
        description: "Es un pionero en el campo de la inteligencia artificial, conocido por su trabajo en el aprendizaje profundo. Co-fundó Google Brain y Coursera, y ha sido fundamental en la democratización del conocimiento de la IA a través de sus cursos en línea.", // Descripción del elemento, proporcionando información sobre Andrew Ng.
        "picturePath": "./assets/andrew.png", // Ruta al archivo de imagen asociado con el elemento.
        position: { // Posición del elemento en el mapa interactivo.
            left: 400, // Posición horizontal desde el borde izquierdo.
            top: 50 // Posición vertical desde el borde superior.
        },
        sticky: false, // Si el elemento es 'sticky' o fijo en la pantalla al desplazarse.
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Demis Hassabis",
        description: "Co-fundador y CEO de DeepMind, Hassabis ha liderado avances significativos en IA, incluyendo el desarrollo de AlphaGo y AlphaFold. Su trabajo ha impulsado los límites de la IA y sus aplicaciones prácticas.",
        "picturePath": "./assets/Demis.jpeg",
        position: {
            left: 410,
            top: 65
        },
        sticky: false,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Yann LeCun",
        description: "Profesor en la Universidad de Nueva York y pionero en el aprendizaje profundo, LeCun ha contribuido significativamente al desarrollo de las redes neuronales convolucionales (CNN), fundamentales para el reconocimiento de imágenes. Recibió el prestigioso Premio Turing por su trabajo.",
        "picturePath": "./assets/Yann.jpeg",
        position: {
            left: 430,
            top: 75
        },
        sticky: false,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Ian Goodfellow",
        description: "Conocido por inventar las redes generativas antagónicas (GANs), Goodfellow ha abierto nuevas posibilidades en el aprendizaje no supervisado y la generación de datos sintéticos realistas.",
        "picturePath": "./assets/Ian.jpeg",
        position: {
            left: 200,
            top: 95
        },
        sticky: true,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Fei-Fei Li",
        description: "Profesora en la Universidad de Stanford, Fei-Fei Li es reconocida por su trabajo en visión por computadora y neurociencia cognitiva. Co-fundó AI4ALL, una organización dedicada a aumentar la diversidad e inclusión en la IA.",
        "picturePath": "./assets/Fei.jpeg",
        position: {
            left: 670,
            top: 110
        },
        sticky: false,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Kai-Fu Lee",
        description: "Como presidente y CEO de Sinovation Ventures, Kai-Fu Lee es una figura prominente en la comunidad global de IA. Ha sido influyente en impulsar la innovación y la inversión en IA, especialmente en China.",
        "picturePath": "./assets/Kai.jpeg",
        position: {
            left: 706,
            top: 142
        },
        sticky: true,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Lex Fridman",
        description: "Investigador y podcaster, Fridman trabaja en la interacción humano-IA y vehículos autónomos. Su trabajo busca comprender el comportamiento humano e integrar sistemas de IA de manera fluida en la vida diaria.",
        "picturePath": "./assets/Lex.jpeg",
        position: {
            left: 606,
            top: 42
        },
        sticky: false,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Andrej Karpathy",
        description: "Como Director de IA en Tesla, Karpathy se enfoca en visión por computadora y aprendizaje profundo, particularmente en el contexto de tecnologías de conducción autónoma.",
        "picturePath": "./assets/Andrewj.jpeg",
        position: {
            left: 465,
            top: 62
        },
        sticky: false,
    },
    {
        type: "text",
        "customClassName": "interactive-map-item",
        title: "Kate Crawford",
        description: " Académica e investigadora, Crawford es conocida por su trabajo en las implicaciones sociales de los sistemas de datos, aprendizaje automático e inteligencia artificial. Co-fundó el Instituto AI Now, que estudia el impacto social de la IA.",
        "picturePath": "./assets/Kate.jpeg",
        position: {
            left: 465,
            top: 72
        },
        sticky: false,
    },
    {
        type: "provider", // Define el tipo de elemento, en este caso un proveedor de contenido.
        providerName: "youtube", // Especifica el nombre del proveedor, que es YouTube.
        parameters: {
            videoId: "CTazANzywSA" // Parámetros requeridos por el proveedor, aquí es el ID del video de YouTube.
        },
        position: { // Define la posición del elemento proveedor en la imagen interactiva.
            left: 200, // Posición horizontal desde el borde izquierdo.
            top: 200 // Posición vertical desde el borde superior.
        },
        sticky: true, // Indica si el elemento debe permanecer fijo en la pantalla al desplazarse.
    }

];

// Opciones para la imagen interactiva, en este caso deshabilitando la 'shareBox'.
const options = { shareBox: false };

// Inicialización de la imagen interactiva cuando el documento esté listo.
$(document).ready(function () {
    // Selecciona el elemento con id 'my-interactive-image' y le aplica la función 'interactiveImage'.
    $("#my-interactive-image").interactiveImage(items, options);
});