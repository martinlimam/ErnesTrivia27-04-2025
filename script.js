// ============================================================
//           SCRIPT COMPLETO PARA TRIVIA v8 - Sin contador en Dropdown
// ============================================================

// --- Base de Datos de Preguntas (AGRUPADAS POR TEMA - Actualizado T4 y T8) ---
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
    // Clave 'tema4' corresponde a Tema 4 - Normas de convivencia en la escuela (NUEVAS PREGUNTAS)
    tema4: [
        { pregunta: "¿Qué son las normas?", opciones: ["Invitaciones a portarse bien.", "Reglas de comportamiento para convivir mejor.", "Sugerencias para ser amable.", "Opiniones sobre la conducta."], respuesta: 1 },
        { pregunta: "¿Qué le sucede a Anita en la escuela?", opciones: ["Es la mejor jugadora de su clase.", "Siempre la eligen para los trabajos en equipo.", "Sus compañeros la excluyen de los juegos y trabajos grupales.", "Es la más popular de la escuela."], respuesta: 2 },
        { pregunta: "¿Cómo nos ayudan las reglas en la escuela?", opciones: ["Nos hacen sentir tristes.", "Nos indican cómo comportarnos y regular nuestra conducta.", "Nos aíslan de los demás.", "Nos hacen diferentes a los demás."], respuesta: 1 },
        { pregunta: "¿Qué facilita el buen cumplimiento de las normas?", opciones: ["La competencia entre compañeros.", "La individualidad.", "La convivencia.", "El aislamiento."], respuesta: 2 },
        { pregunta: "¿Cuál de las siguientes es una regla de convivencia mencionada el libro?", opciones: ["Llegar tarde a la escuela.", "Ignorar las opiniones de los demás.", "Respetar las diferencias individuales.", "Ser descortés con los demás."], respuesta: 2 },
        { pregunta: "¿Qué se debe hacer antes de hablar en clase, según las normas?", opciones: ["Gritar la opinión más fuerte.", "Pedir la palabra.", "Hablar sin parar.", "Quedarse en silencio siempre."], respuesta: 1 },
        { pregunta: "¿Qué tipo de palabras se deben usar según las normas de convivencia?", opciones: ["Palabras groseras.", "Palabras de cortesía.", "Insultos.", "Silencio."], respuesta: 1 },
        { pregunta: "¿Qué ocasiona que Anita se sienta triste?", opciones: ["Que la feliciten constantemente.", "Que la incluyan en todos los juegos.", "Que la aparten de los juegos y trabajos grupales.", "Que sea la más popular."], respuesta: 2 },
        { pregunta: "¿Cuál es una acción importante para convivir armónicamente?", opciones: ["Ignorar a los demás.", "Ser amable.", "Burlarse de los compañeros.", "No escuchar a los demás."], respuesta: 1 },
        { pregunta: "¿Qué debe hacer la escuela para mejorar la convivencia?", opciones: ["Ignorar las reglas.", "Promover el respeto a las diferencias.", "Permitir el aislamiento.", "Fomentar la competencia desleal."], respuesta: 1 }
    ],
    // Clave 'tema8' corresponde a Tema 8 - El trabajo en mi comunidad (NUEVAS PREGUNTAS)
    tema8: [
        { pregunta: "¿Cuál es la diferencia principal entre una profesión y un oficio?", opciones: ["Las profesiones son trabajos manuales y los oficios requieren un título.", "Las profesiones requieren un título y los oficios son trabajos manuales o artesanales.", "No hay diferencia, son lo mismo.", "Los oficios se aprenden en la universidad."], respuesta: 1 },
        { pregunta: "¿Qué tipo de trabajo es el de un carpintero?", opciones: ["Profesión.", "Oficio.", "Ambos.", "Ninguno."], respuesta: 1 },
        { pregunta: "¿Para qué sirve el trabajo en la comunidad?", opciones: ["Solo para tener amigos.", "Para obtener bienes y servicios.", "Solo para ir a la escuela.", "Para jugar todo el día."], respuesta: 1 },
        { pregunta: "¿Qué ejemplos de servicios obtenemos del trabajo de otros?", opciones: ["Casas y muebles.", "Comida y ropa.", "Transporte y atención médica.", "Juguetes y libros."], respuesta: 2 },
        { pregunta: "¿Quiénes trabajan en una escuela?", opciones: ["Comisarios y policías.", "Doctores y enfermeros.", "Maestros y secretarios.", "Bomberos."], respuesta: 2 },
        { pregunta: "Además de los maestros, ¿qué otras personas trabajan en una escuela para ayudar a los estudiantes?", opciones: ["Pintores.", "Bibliotecarios.", "Peluqueros.", "Mecánicos."], respuesta: 1 },
        { pregunta: "¿Qué profesionales trabajan en un hospital para cuidar a los enfermos?", opciones: ["Abogados.", "Doctores y enfermeros.", "Panaderos.", "Taxistas."], respuesta: 1 },
        { pregunta: "¿Cuál de los siguientes es un trabajo que ayuda a mantener limpias las calles de la comunidad?", opciones: ["Bombero.", "Recolector de basura.", "Profesor.", "Zapatero."], respuesta: 1 },
        { pregunta: "¿Qué hace un bombero?", opciones: ["Conduce un taxi.", "Apaga incendios.", "Cose ropa.", "Construye casas."], respuesta: 1 },
        { pregunta: "¿Qué debemos mostrar a las personas que trabajan en nuestra comunidad?", opciones: ["Indiferencia.", "Desagradecimiento.", "Respeto y cortesía.", "Envidia."], respuesta: 2 },
        { pregunta: "¿Por qué es importante el trabajo de un policía?", opciones: ["Porque cocina comida deliciosa.", "Porque ayuda a mantener el orden y la seguridad.", "Porque enseña en la escuela.", "Porque arregla las tuberías."], respuesta: 1 }
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
    // Ya no llamamos a actualizarContadorPreguntasDropdown() aquí si el HTML ya está limpio
    // actualizarContadorPreguntasDropdown(); // Comentado o eliminado
}

// --- FUNCIÓN MODIFICADA/SIMPLIFICADA ---
// Esta función ahora es opcional, ya que el HTML tiene el texto limpio.
// Se deja comentada por si se quisiera reactivar o usar para otra cosa.
/*
function actualizarContadorPreguntasDropdown() {
    const opcionesTema = dropdownTema.options;
    for (let i = 0; i < opcionesTema.length; i++) {
        const opcion = opcionesTema[i];
        // Simplemente nos aseguramos de que use el texto base del HTML
        // Si el HTML ya está limpio, esta función no hace nada visible.
        // Podrías usarla para otras validaciones si fuera necesario.
        // console.log("Verificando opción:", opcion.text);
    }
}
*/

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


function terminarJuego() {
    if (musicaFondo && !musicaFondo.paused) {
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
    }

    let porcentaje = totalPreguntasJuego > 0 ? Math.round((puntaje / totalPreguntasJuego) * 100) : 0;

    if (porcentaje >= 70) {
        if (sonidoFanfarria && sonidoFanfarria.play) {
             sonidoFanfarria.play();
        }
    }

    if (contenedorJuego) contenedorJuego.style.display = 'none';
    if (contenedorResultado) {
        let mensajeFinal = "¡Tema Completado!";
        let mensajeMotivacion = "";

        if (porcentaje >= 80) {
            mensajeMotivacion = "¡Felicidades! ¡Excelente puntaje!";
        } else if (porcentaje >= 70) {
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

    if (btnSiguiente) btnSiguiente.style.display = 'none';
    if (btnReiniciar) {
         btnReiniciar.textContent = "Elegir Otro Tema";
         btnReiniciar.style.display = 'block';
    }
}


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
// Mostrar pantalla de inicio al cargar. La función que actualizaba el dropdown se comenta o elimina.
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