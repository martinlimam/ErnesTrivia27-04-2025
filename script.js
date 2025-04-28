// ============================================================
//           SCRIPT COMPLETO PARA TRIVIA v6 - Fanfarria Condicional
// ============================================================

// --- Base de Datos de Preguntas (AGRUPADAS POR TEMA - Actualizado) ---
const baseDePreguntasPorTema = {
    // Clave 'tema2' corresponde a Tema 2 - Miembros de la comunidad escolar
    tema2: [
        { pregunta: "¿Quién enseña y orienta a los estudiantes en la escuela?", opciones: ["Director", "Secretario", "Profesor", "Bibliotecario"], respuesta: 2 },
        { pregunta: "¿Cuál es la función principal de los directores en la escuela?", opciones: ["Organizar documentos", "Administrar el colegio", "Enseñar a los alumnos", "Mantener la limpieza"], respuesta: 1 },
        { pregunta: "¿Quién organiza toda la documentación de la escuela?", opciones: ["Personal de servicios", "Profesor", "Secretario", "Alumno"], respuesta: 2 },
        { pregunta: "¿Qué hacen los estudiantes en la comunidad escolar?", opciones: ["Administran el colegio", "Reciben las enseñanzas", "Organizan libros", "Enseñan nuevas lecciones"], respuesta: 1 },
        { pregunta: "¿Quién ayuda a mantener limpia la escuela?", opciones: ["Personal de servicios", "Director", "Bibliotecario", "Profesor"], respuesta: 0 },
        { pregunta: "¿Quién orienta el trabajo en la biblioteca escolar?", opciones: ["Secretario", "Estudiante", "Director", "Bibliotecario"], respuesta: 3 },
        { pregunta: "¿Cuál es el trabajo principal del bibliotecario?", opciones: ["Enseñar ciencias", "Organizar y orientar en la biblioteca", "Administrar el colegio", "Supervisar la limpieza"], respuesta: 1 },
        { pregunta: "¿A quién debes acudir si necesitas un libro en la escuela?", opciones: ["Profesor", "Director", "Bibliotecario", "Personal de servicios"], respuesta: 2 },
        { pregunta: "El personal de servicios se encarga principalmente de:", opciones: ["Orientar a los estudiantes", "Mantener limpia la escuela", "Enseñar materias", "Organizar reuniones escolares"], respuesta: 1 },
        { pregunta: "¿Quiénes reciben enseñanzas para aplicarlas a su vida diaria?", opciones: ["Profesores", "Secretarios", "Estudiantes", "Directores"], respuesta: 2 }
    ],
    // Clave 'tema3' corresponde a Tema 3 - Deberes y Derechos en la escuela
    tema3: [
        { pregunta: "Según los derechos de los estudiantes, ¿cómo deben ser tratados por todos los miembros de la escuela?", opciones: ["Con indiferencia", "Con respeto", "Con severidad", "Como personas iguales"], respuesta: 1 },
        { pregunta: "¿Cuál de las siguientes opciones es un deber de los estudiantes?", opciones: ["Ser valorados como personas únicas", "Ser protegidos contra todo tipo de maltrato", "Estudiar y cumplir con las tareas escolares", "Expresar su opinión y ser escuchados"], respuesta: 2 },
        { pregunta: "Además de ser respetados en sus opiniones, ¿en qué otra cosa deben ser respetados los estudiantes según los derechos mencionados?", opciones: ["En sus posesiones materiales", "En sus diferencias individuales", "En sus habilidades artísticas", "En su estatus social"], respuesta: 1 },
        { pregunta: "¿Con quiénes deben ser solidarios y cooperativos los estudiantes según sus deberes?", opciones: ["Solo con los profesores", "Solo con los compañeros más populares", "Con los compañeros que necesitan ayuda", "Con nadie, cada uno debe valerse por sí mismo"], respuesta: 2 },
        { pregunta: "¿Cuál de estas opciones NO es un derecho de los estudiantes?", opciones: ["Recibir nuevos conocimientos y ser orientados en valores", "Respetar a todos los miembros de la familia escolar", "Ser valorados como personas únicas", "Ser protegidos contra todo tipo de maltrato"], respuesta: 1 },
        { pregunta: "Seguir las indicaciones de los maestros es considerado un...", opciones: ["Derecho del estudiante", "Deber del estudiante", "Sugerencia opcional", "Regla solo para los alumnos con bajo rendimiento"], respuesta: 1 },
        { pregunta: "Uno de los derechos de los estudiantes es poder expresar su opinión y ser escuchados por...", opciones: ["Solo sus amigos cercanos", "Los profesores y compañeros", "Únicamente el director", "Nadie, deben guardar silencio"], respuesta: 1 },
        { pregunta: "Cuidar las cosas propias y ajenas es un...", opciones: ["Derecho de los profesores", "Deber de los padres", "Deber del estudiante", "Derecho del personal de limpieza"], respuesta: 2 }
    ],
    // Clave 'tema4' corresponde a Tema 4 - Normas de convivencia en la escuela
    tema4: [
        { pregunta: "Según la respuesta escrita en la página, ¿qué significa \"normas\"?", opciones: ["Juegos que se juegan en grupo", "Reglas que tengo que cumplir", "Canciones que se cantan en clase", "Tareas para el hogar"], respuesta: 1 },
        { pregunta: "¿Cuál es una acción considerada importante para convivir armónicamente con los demás, según lo escrito en la página?", opciones: ["Ignorar a los compañeros", "Ser amable con todos", "Jugar solo durante el recreo", "Llegar tarde a clase"], respuesta: 1 },
        { pregunta: "Según lo escrito en la página, ¿cuál es otra acción considerada importante para convivir armónicamente con los demás?", opciones: ["Gritar en el aula", "No compartir los materiales", "No regañarle a mis compañeros", "Quitar las cosas a otros"], respuesta: 2 },
        { pregunta: "La actividad número 3 en la página consiste en observar imágenes para identificar actitudes que favorecen:", opciones: ["El desorden en el aula", "La mala conducta", "La buena convivencia escolar", "Los conflictos entre amigos"], respuesta: 2 },
        { pregunta: "Según la pregunta número 4 de la página, ¿a quién se busca ayudar en una situación mencionada previamente?", opciones: ["Al profesor", "A los padres", "A Anita", "Al director"], respuesta: 2 },
        { pregunta: "¿Cuál es la sugerencia escrita en la página para ayudar a Anita en su situación?", opciones: ["Decirle a Anita que se vaya a casa", "Organizar un juego sin ella", "Decirle a la profesora que no quieren jugar con ella", "Pedirle a Anita que cambie de amigos"], respuesta: 2 },
        { pregunta: "¿Cuál es el tema principal de la sección o capítulo al que pertenece la página 39, según el título en la parte superior?", opciones: ["Las matemáticas divertidas", "Los animales del zoológico", "Normas de convivencia en la escuela", "La historia de mi país"], respuesta: 2 },
        { pregunta: "La primera actividad en la página pide al estudiante que explique con sus propias palabras qué entiende por:", opciones: ["Vacaciones", "Exámenes", "Normas", "Recreo"], respuesta: 2 },
        { pregunta: "La segunda actividad en la página pide al estudiante que escriba dos acciones importantes para:", opciones: ["Ganar un partido de fútbol", "Convivir armónicamente con los demás", "Resolver problemas matemáticos", "Decorar el aula"], respuesta: 1 },
        { pregunta: "La actividad número 3 requiere que el estudiante observe imágenes y encierre en círculo:", opciones: ["Los objetos perdidos", "Las actitudes que favorecen la buena convivencia escolar", "Los animales", "Los números"], respuesta: 1 },
        { pregunta: "La actividad número 4 pide al estudiante que piense en cómo ayudar a Anita en una situación leída en:", opciones: ["Una carta", "La página anterior", "Un libro de cuentos", "El periódico"], respuesta: 1 },
        { pregunta: "La sugerencia para ayudar a Anita debe ser escrita:", opciones: ["Con dibujos solamente", "En un largo ensayo", "Brevemente", "En otro idioma"], respuesta: 2 }
    ],
    // Clave 'tema8' corresponde a Tema 8 - El trabajo en mi comunidad
    tema8: [
        { pregunta: "¿Quién trabaja en la Comisaría según el fuente?", opciones: ["Maestros", "Bomberos", "El comisario y los agentes policiales", "Secretarios"], respuesta: 2 },
        { pregunta: "Según el fuente, ¿dónde trabajan los Maestros y Directores?", opciones: ["Iglesia", "Comisaría", "Escuela", "Estación de bomberos"], respuesta: 2 },
        { pregunta: "¿Qué personas trabajan en la Estación de bomberos según el fuente?", opciones: ["Agentes policiales", "Bomberos", "Secretarios", "Maestros"], respuesta: 1 },
        { pregunta: "Según el fuente, ¿quiénes trabajan en la Iglesia?", opciones: ["Maestros", "Bomberos", "El Papa/Padre y Secretarios", "Agentes policiales"], respuesta: 2 },
        { pregunta: "El comisario trabaja en la siguiente institución según el fuente:", opciones: ["Escuela", "Iglesia", "Comisaría", "Estación de bomberos"], respuesta: 2 },
        { pregunta: "Según el fuente, ¿dónde trabaja el Personal de limpieza?", opciones: ["Comisaría", "Escuela", "Iglesia", "Estación de bomberos"], respuesta: 1 },
        { pregunta: "¿En qué instituciones mencionadas en el fuente trabajan Secretarios o Secretaria?", opciones: ["Solo Comisaría", "Solo Iglesia", "Solo Escuela", "Escuela o Iglesia"], respuesta: 3 },
        { pregunta: "Según el fuente, ¿por qué es importante el trabajo para la vida de las personas?", opciones: ["Para viajar por el mundo", "Para comprar coches de lujo", "Para vivir, comer, tener ropa", "Para volverse famoso"], respuesta: 2 },
        { pregunta: "¿Cuál de los siguientes es un ejemplo de institución comunitaria mencionado en el fuente?", opciones: ["Hospital", "Supermercado", "Comisaría", "Biblioteca"], respuesta: 2 },
        { pregunta: "Además de Maestros y Directores, ¿qué otra persona se menciona trabajando en la Escuela según el fuente?", opciones: ["Bomberos", "Papa", "Agentes policiales", "Secretaria"], respuesta: 3 },
        { pregunta: "Según el fuente, ¿quién es una persona que trabaja en la Iglesia?", opciones: ["Un Agente policial", "Un Director", "Un Bombero", "El Papa/Padre"], respuesta: 3 }
    ]
};

// --- Variables de Estado del Juego ---
let preguntasJuegoActual = [];
let indicePreguntaActual = 0;
let puntaje = 0;
let preguntasRespondidas = 0;
let totalPreguntasJuego = 0;

// --- Referencias a Elementos del DOM ---
const pantallaInicio = document.getElementById('pantalla-inicio');
const dropdownTema = document.getElementById('tema');
const btnEmpezar = document.getElementById('btn-empezar');

const contenedorJuego = document.getElementById('contenedor-juego');
const elementoProgreso = document.getElementById('progreso');
const elementoPuntaje = document.getElementById('puntaje');
const elementoPregunta = document.getElementById('pregunta');
const contenedorOpciones = document.getElementById('opciones');
const btnSiguiente = document.getElementById('btn-siguiente');

const contenedorResultado = document.getElementById('resultado');
const btnReiniciar = document.getElementById('btn-reiniciar');

// --- Cargar Sonidos ---
let sonidoCorrecto, sonidoIncorrecto, sonidoFanfarria, musicaFondo;
try {
    sonidoCorrecto = new Audio('sounds/correct.wav');
    sonidoIncorrecto = new Audio('sounds/incorrect.wav');
    sonidoFanfarria = new Audio('sounds/fanfare.mp3');
    musicaFondo = new Audio('sounds/background_music.mp3');
    musicaFondo.loop = true;
    musicaFondo.volume = 0.3;
} catch (e) {
    console.error("Error al cargar los archivos de audio:", e);
    sonidoCorrecto = sonidoIncorrecto = sonidoFanfarria = musicaFondo = { play: () => {}, pause: () => {}, currentTime: 0 };
}


// --- Funciones del Juego ---

function mostrarPantallaInicio() {
    if (pantallaInicio) pantallaInicio.style.display = 'block';
    if (contenedorJuego) contenedorJuego.style.display = 'none';
    if (contenedorResultado) contenedorResultado.style.display = 'none';
    if (btnReiniciar) btnReiniciar.style.display = 'none';
    if (musicaFondo && !musicaFondo.paused) {
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
    }
    actualizarContadorPreguntasDropdown();
}

function actualizarContadorPreguntasDropdown() {
    const opcionesTema = dropdownTema.options;
    for (let i = 0; i < opcionesTema.length; i++) {
        const opcion = opcionesTema[i];
        const valorTema = opcion.value;
        let numPreguntas = 0;
        let textoOriginal = opcion.text.split(' (')[0];

        if (valorTema === 'todos') {
            numPreguntas = 10; // Número fijo para 'todos'
            opcion.text = `${textoOriginal} (${numPreguntas} Preguntas al Azar)`;
        } else if (baseDePreguntasPorTema[valorTema]) {
            numPreguntas = baseDePreguntasPorTema[valorTema].length;
            opcion.text = `${textoOriginal} (${numPreguntas} Preguntas)`;
        }
    }
}


function iniciarJuego() {
    const temaSeleccionado = dropdownTema.value;
    const NUM_PREGUNTAS_TODOS = 10;

    if (temaSeleccionado === 'todos') {
        let todasLasPreguntas = [].concat(...Object.values(baseDePreguntasPorTema));
        todasLasPreguntas.sort(() => Math.random() - 0.5);
        preguntasJuegoActual = todasLasPreguntas.slice(0, NUM_PREGUNTAS_TODOS);
        totalPreguntasJuego = NUM_PREGUNTAS_TODOS;

    } else if (baseDePreguntasPorTema[temaSeleccionado]) {
        preguntasJuegoActual = [...baseDePreguntasPorTema[temaSeleccionado]];
        preguntasJuegoActual.sort(() => Math.random() - 0.5);
        totalPreguntasJuego = preguntasJuegoActual.length;
    } else {
        console.error("Tema seleccionado inválido:", temaSeleccionado);
        mostrarPantallaInicio();
        return;
    }

    indicePreguntaActual = 0;
    puntaje = 0;
    preguntasRespondidas = 0;

    if (pantallaInicio) pantallaInicio.style.display = 'none';
    if (contenedorJuego) contenedorJuego.style.display = 'block';
    if (contenedorResultado) contenedorResultado.style.display = 'none';
    if (btnReiniciar) btnReiniciar.style.display = 'none';

    actualizarEstadoJuego();
    cargarPregunta();

    if (musicaFondo && musicaFondo.play) {
        musicaFondo.play().catch(e => console.log("Reproducción automática de música de fondo bloqueada."));
    }
}

function cargarPregunta() {
     if (!preguntasJuegoActual || preguntasJuegoActual.length === 0 || indicePreguntaActual >= totalPreguntasJuego ) {
        terminarJuego();
        return;
    }
    const preguntaActual = preguntasJuegoActual[indicePreguntaActual];
    elementoPregunta.textContent = preguntaActual.pregunta;
    contenedorOpciones.innerHTML = '';

    preguntaActual.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('boton-opcion');
        boton.dataset.index = index;
        boton.classList.remove('correcta', 'incorrecta');
        boton.disabled = false;
        boton.style.opacity = "1";
        boton.addEventListener('click', () => seleccionarOpcion(index, boton));
        contenedorOpciones.appendChild(boton);
    });

    actualizarEstadoJuego();
    if (btnSiguiente) btnSiguiente.style.display = 'none';
}

function seleccionarOpcion(indiceSeleccionado, botonSeleccionado) {
    if (preguntasRespondidas > indicePreguntaActual) return;
    preguntasRespondidas++;

    const preguntaActual = preguntasJuegoActual[indicePreguntaActual];
    const indiceCorrecto = preguntaActual.respuesta;

    const botones = contenedorOpciones.querySelectorAll('button');
    botones.forEach(boton => {
        boton.disabled = true;
        let indexBoton = parseInt(boton.dataset.index);

        if (indexBoton === indiceCorrecto) {
            boton.classList.add('correcta');
        }
        if (indexBoton === indiceSeleccionado && indexBoton !== indiceCorrecto) {
             boton.classList.add('incorrecta');
        }
        if(indexBoton !== indiceCorrecto && indexBoton !== indiceSeleccionado) {
             boton.style.opacity = "0.6";
        }
    });

    if (indiceSeleccionado === indiceCorrecto) {
        puntaje++;
        if (sonidoCorrecto && sonidoCorrecto.play) sonidoCorrecto.play();
    } else {
        if (sonidoIncorrecto && sonidoIncorrecto.play) sonidoIncorrecto.play();
    }

    actualizarEstadoJuego();
    if (btnSiguiente) btnSiguiente.style.display = 'block';
}

function siguientePregunta() {
    indicePreguntaActual++;
    cargarPregunta();
}


// --- Función Modificada ---
function terminarJuego() {
    // Detener música de fondo primero
    if (musicaFondo && !musicaFondo.paused) {
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
    }

    // Calcular porcentaje ANTES de decidir si reproducir fanfarria
    let porcentaje = totalPreguntasJuego > 0 ? Math.round((puntaje / totalPreguntasJuego) * 100) : 0;

    // --- INICIO MODIFICACIÓN ---
    // Reproducir fanfarria SOLO si el porcentaje es 70% o más
    if (porcentaje >= 70) {
        if (sonidoFanfarria && sonidoFanfarria.play) {
             sonidoFanfarria.play();
        }
    }
    // --- FIN MODIFICACIÓN ---


    // Ocultar contenedor del juego y mostrar resultados
    if (contenedorJuego) contenedorJuego.style.display = 'none';
    if (contenedorResultado) {
        let mensajeFinal = "¡Tema Completado!";
        let mensajeMotivacion = "";

        // Mensajes basados en el porcentaje ya calculado
        if (porcentaje >= 80) { // Mantener mensaje excelente para 80+
            mensajeMotivacion = "¡Felicidades! ¡Excelente puntaje!";
        } else if (porcentaje >= 70) { // Nuevo rango para buen trabajo (que aún merece fanfarria)
             mensajeMotivacion = "¡Muy bien! ¡Gran esfuerzo!";
        } else if (porcentaje >= 50) {
             mensajeMotivacion = "¡Bien! ¡Sigue aprendiendo!";
        } else {
            mensajeMotivacion = "¡Ánimo! Repasar un poco más te ayudará.";
        }

        contenedorResultado.innerHTML = `
            <h2>${mensajeFinal}</h2>
            <p>Tu puntaje final es: ${puntaje} de ${totalPreguntasJuego} (${porcentaje}%)</p>
            <p>${mensajeMotivacion}</p>
        `;
        contenedorResultado.style.display = 'block';
    }

    // Ocultar/Mostrar botones finales
    if (btnSiguiente) btnSiguiente.style.display = 'none';
    if (btnReiniciar) {
         btnReiniciar.textContent = "Elegir Otro Tema";
         btnReiniciar.style.display = 'block';
    }
}
// --- Fin Función Modificada ---


function actualizarEstadoJuego() {
    if (elementoPuntaje) {
        elementoPuntaje.textContent = `Puntaje: ${puntaje}`;
    }
    if (elementoProgreso && totalPreguntasJuego > 0) {
        if (indicePreguntaActual < totalPreguntasJuego) {
            elementoProgreso.textContent = `Pregunta ${indicePreguntaActual + 1} de ${totalPreguntasJuego}`;
        } else {
             elementoProgreso.textContent = `Pregunta ${totalPreguntasJuego} de ${totalPreguntasJuego}`;
        }
    } else if (elementoProgreso) {
        elementoProgreso.textContent = '';
    }
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', mostrarPantallaInicio);

if (btnEmpezar) {
    btnEmpezar.addEventListener('click', iniciarJuego);
}

if (btnSiguiente) {
    btnSiguiente.addEventListener('click', siguientePregunta);
}

if (btnReiniciar) {
    btnReiniciar.addEventListener('click', mostrarPantallaInicio);
}

// --- FIN DEL SCRIPT ---