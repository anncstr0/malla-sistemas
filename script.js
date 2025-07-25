const cursos = [
  { id: 1, nombre: "Filosofía y ética profesional", prereq: [], ciclo: 1 },
  { id: 2, nombre: "Matemáticas I", prereq: [], ciclo: 1 },
  { id: 3, nombre: "Lógica computacional", prereq: [], ciclo: 1 },
  { id: 4, nombre: "Inglés Técnico I", prereq: [], ciclo: 1 },
  { id: 5, nombre: "Gestión de Redes I", prereq: [], ciclo: 2 },
  { id: 6, nombre: "Matemáticas II", prereq: [2], ciclo: 2 },
  { id: 7, nombre: "Programación I", prereq: [3], ciclo: 2 },
  { id: 8, nombre: "Física I", prereq: [], ciclo: 2 },
  { id: 9, nombre: "Química General", prereq: [], ciclo: 2 },
  { id: 10, nombre: "Gestión de Redes II", prereq: [5], ciclo: 3 },
  { id: 11, nombre: "Matemáticas III", prereq: [6], ciclo: 3 },
  { id: 12, nombre: "Programación II", prereq: [7], ciclo: 3 },
  { id: 13, nombre: "Física II", prereq: [8], ciclo: 3 },
  { id: 14, nombre: "Ingeniería de Software", prereq: [7], ciclo: 3 },
  { id: 15, nombre: "Diseño de base de datos", prereq: [10], ciclo: 4 },
  { id: 16, nombre: "Matemáticas IV", prereq: [11], ciclo: 4 },
  { id: 17, nombre: "Programación III", prereq: [12], ciclo: 4 },
  { id: 18, nombre: "Física III", prereq: [13], ciclo: 4 },
  { id: 19, nombre: "Estadística I", prereq: [], ciclo: 4 },
  { id: 20, nombre: "Programación para móviles", prereq: [17], ciclo: 5 },
  { id: 21, nombre: "Arquitectura de aplicaciones en la nube", prereq: [15, 17], ciclo: 5 },
  { id: 22, nombre: "Administración de servidores y de base de datos", prereq: [15], ciclo: 5 },
  { id: 23, nombre: "Realidad Nacional", prereq: [], ciclo: 5 },
  { id: 24, nombre: "Métodos y técnicas de investigación", prereq: [19], ciclo: 5 },
  { id: 25, nombre: "Sistemas operativos", prereq: [], ciclo: 6 },
  { id: 26, nombre: "Tecnologías inmersivas", prereq: [20], ciclo: 6 },
  { id: 27, nombre: "Gestión de proyectos informáticos", prereq: [22], ciclo: 6 },
  { id: 28, nombre: "Introducción a machine Learning", prereq: [19], ciclo: 6 },
  { id: 29, nombre: "Técnicas de Redacción", prereq: [], ciclo: 6 },
  { id: 30, nombre: "Análisis y diseño de sistemas", prereq: [20], ciclo: 7 },
  { id: 31, nombre: "Análisis Web", prereq: [28], ciclo: 7 },
  { id: 32, nombre: "Analítica avanzada", prereq: [28], ciclo: 7 },
  { id: 33, nombre: "Gestión del talento humano", prereq: [], ciclo: 7 },
  { id: 34, nombre: "Administración de las tecnologías de la información", prereq: [27, 30], ciclo: 8 },
  { id: 35, nombre: "Integración de sistemas", prereq: [27, 30], ciclo: 8 },
  { id: 36, nombre: "Seguridad en redes de datos", prereq: [27, 30], ciclo: 8 },
  { id: 37, nombre: "Inglés técnico II", prereq: [4], ciclo: 8 },
  { id: 38, nombre: "Auditoría de aplicaciones informáticas", prereq: [34], ciclo: 9 },
  { id: 39, nombre: "Sistemas de información general", prereq: [32, 35], ciclo: 9 },
  { id: 40, nombre: "Integración continua", prereq: [21], ciclo: 9 },
  { id: 41, nombre: "Desarrollo de emprendedores", prereq: [39], ciclo: 10 },
  { id: 42, nombre: "Aplicaciones de Machine Learning", prereq: [32], ciclo: 10 },
  { id: 43, nombre: "Finanzas para proyectos", prereq: [39], ciclo: 10 }
];

const malla = document.getElementById("malla");
const aprobados = new Set();

function crearMalla() {
  const anios = [
    { anio: "Primer Año", ciclos: [1, 2] },
    { anio: "Segundo Año", ciclos: [3, 4] },
    { anio: "Tercer Año", ciclos: [5, 6] },
    { anio: "Cuarto Año", ciclos: [7, 8] },
    { anio: "Quinto Año", ciclos: [9, 10] }
  ];

  const contenedor = document.createElement("div");
  contenedor.id = "contenedor-malla";

  anios.forEach(({ anio, ciclos }) => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio";
    divAnio.innerHTML = `<h2>${anio}</h2>`;

    ciclos.forEach(ciclo => {
      const divCiclo = document.createElement("div");
      divCiclo.className = "ciclo";
      divCiclo.innerHTML = `<h3>Ciclo ${ciclo}</h3>`;

      cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
        const btn = document.createElement("button");
        btn.textContent = curso.nombre;
        btn.className = "curso bloqueado";
        btn.id = `curso-${curso.id}`;
        btn.disabled = true;

        divCiclo.appendChild(btn);
      });

      divAnio.appendChild(divCiclo);
    });

    contenedor.appendChild(divAnio);
  });

  malla.appendChild(contenedor);
  actualizarCursos();
}

function actualizarCursos() {
  cursos.forEach(curso => {
    const btn = document.getElementById(`curso-${curso.id}`);
    if (aprobados.has(curso.id)) {
      btn.classList.remove("bloqueado");
      btn.classList.add("aprobado");
      btn.disabled = true;
    } else {
      const cumple = curso.prereq.every(p => aprobados.has(p));
      btn.disabled = !cumple;
      btn.classList.toggle("bloqueado", !cumple);
      btn.onclick = cumple
        ? () => {
            aprobados.add(curso.id);
            actualizarCursos();
          }
        : null;
    }
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
