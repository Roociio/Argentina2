//boton que te lleva a abajp
document.getElementById("btn1")
addEventListener("click",function(){
    window.scrollTo({
        top:
        this.document.body.scrollHeight,behavior:"smooth"
    });
})

// carrusel
let imagenes = [
    {
        "url": "imagenes/legado jesuita cordoba.jpg",
        "nombre": "Legado Jesuita Cordoba",
        "descripcion": "Una parte de la historia cordobesa la escribieron los jesuitas. ¿Te atreves a seguir sus pasos? Comienza en la Manzana Jesuítica de la ciudad de Córdoba. Aquí, al compás de las campanas que suenan en las iglesias, recorre un tesoro declarado Monumento Histórico Nacional: el Colegio de las Huérfanas, la Iglesia de la Compañía, la Cripta Jesuítica del Antiguo Noviciado, la Capilla Doméstica, la Universidad Nacional de Córdoba y el Colegio Monserrat, que convoca a estudiantes de todo el mundo."
    },
    {
        "url": "imagenes/los alerces chubut.jpg",
        "nombre": "Parque Nacional los alarces, Chubut",
        "descripcion": "En plena cordillera, entre lagos y ventisqueros, te esperan bosques frondosos y milenarios. Descubre los ejemplares más australes de alerces, coihues, arrayanes y cañas coligüe. Siente la emoción de caminar por el alerzal más longevo del mundo. Sorpréndete con un ejemplar de más de 2 metros de diámetro, casi 60 metros de altura y 2.600 años de vida. Recorre la mayor porción de selva valdiviana del suelo argentino."
    },
    {
        "url": "imagenes/mendoza.jpg",
        "nombre": "Mendoza al pie de la Cordillera de los Andes",
        "descripcion": "Cumbres nevadas. Ríos furiosos. Caminos entre valles. Planicies cubiertas de lava. Mendoza te ofrece un escenario natural para la aventura: rafting y canopy, kayak y buceo, escalada y rappel, trekking y mountain bike, cabalgatas y paracaidismo. Y en los ocho embalses de la provincia, la navegación a vela, el windsurf, el esquí acuático y la pesca deportiva. En el agua y en la montaña, vive la adrenalina. O siente la tranquilidad."
    },
    { 
        "url": "imagenes/reserva ibera corrientes.jpg",
        "nombre": "Reserva Natural Ibera",
        "descripcion": "Descubre una de las reservas de agua dulce más importantes de Sudamérica. Recorre la Reserva Natural Iberá. Un millón trescientas mil hectáreas de sensaciones únicas, de naturaleza conservada, de experiencias donde es posible encontrar 85 especies de mamíferos, 35 de reptiles y 45 de anfibios."
    },
    {
    "url": "imagenes/shincal.jpg",
        "nombre": "Qhapaq Ñan: El Shincal",
        "descripcion": "Visita el conjunto arqueológico incaico más valioso de Catamarca. El Shincal de Quimivil te espera. Recorre lo que fue la ciudad más austral de los incas. Explora los restos de su casco urbano recostado en un valle, rodeado de montañas orientadas a los cuatro puntos cardinales. Detente en la plaza donde más de quince mil personas celebraban el ritual del Inti Raymi hace quinientos años.  "
    },
    {
        "url": "imagenes/tango.jpg",
        "nombre": "Tango en Buenos Aires",
        "descripcion": "Disfruta la cadencia del bandoneón, la sensualidad de la danza, las parejas que bailan abrazadas en el glamour de la noche porteña. Más que una música típica, más que un baile con raíces, más que un espectáculo único, el tango es historia y es vanguardia, es cultura y es pasión de Buenos Aires. Un fenómeno cultural que trasciende fronteras. Un ícono del Río de la Plata declarado Patrimonio Cultural de la Humanidad por la Unesco."
    }
];


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imgContainer = document.getElementById('img-container');
let texto = document.getElementById('texto');
let puntos = document.getElementById('puntos');
let actual = 0;

// Inicio del  carrusel
posicionCarrusel();

// Evento para mover hacia atrás
atras.addEventListener('click', function(){
    actual = (actual === 0) ? imagenes.length - 1 : actual - 1;
    actualizarCarrusel();
    posicionCarrusel();
});

// para mover hacia adelante
adelante.addEventListener('click', function(){
    actual = (actual === imagenes.length - 1) ? 0 : actual + 1;
    actualizarCarrusel();
    posicionCarrusel();
});

// Actualizar
function actualizarCarrusel() {
    imgContainer.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="${imagenes[actual].nombre}" loading="lazy">`;
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;
}

// Actualizar los indicadores
function posicionCarrusel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i === actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}

//textos aleatorios
const dato =[
    "La pelicula Seven Years in Tibet, protagonizada por Brad Pitt, la mayoria de la pelicula fue grabada en Mendoza.",
    "El Glaciar Perito Moreno en la Patagonia es uno de los pocos glaciares del mundo que sigue avanzando en lugar de retroceder. Es famoso por sus rupturas espectaculares, cuando bloques de hielo se desprenden y caen al agua.",
    "Natalie Portman también rodó escenas en Argentina para la película The Other Woman (2009), filmando en la ciudad de Buenos Aires.",
    "El Secreto de sus Ojos dirigida por Juan José Campanella, ganó el Oscar a Mejor Película Extranjera. Esta película es uno de los mayores éxitos del cine argentino a nivel internacional. ",
    "El Aconcagua, ubicado en la provincia de Mendoza, es la montaña más alta de América y el pico más alto fuera de Asia, con una altura de 6.959 metros sobre el nivel del mar.",
    "En la provincia de Santa Cruz, el Bosque Petrificado de Jaramillo es uno de los yacimientos fósiles más impresionantes del mundo. Este bosque data de unos 150 millones de años, y los troncos de los árboles petrificados tienen hasta 35 metros de largo.",
    "En la provincia de La Rioja, el Parque Nacional Talampaya es famoso por sus impresionantes formaciones rocosas y cañones. Este parque, junto con el vecino Valle de la Luna (Ischigualasto), es un sitio arqueológico y paleontológico de gran importancia, donde se han encontrado fósiles de los primeros dinosaurios del periodo Triásico.",
    "La Quebrada de Humahuaca, en la provincia de Jujuy, es una espectacular formación geológica con coloridos cerros, como el famoso Cerro de los Siete Colores. Esta región ha sido habitada durante más de 10,000 años y es Patrimonio de la Humanidad por su valor cultural y natural.",

];
//funcion para los datos aleatorios
function datorandom() {
    const aleatorio = Math.floor(Math.random() * dato.length);
    document.querySelector(".textoAleatorio").innerText = dato[aleatorio];
}