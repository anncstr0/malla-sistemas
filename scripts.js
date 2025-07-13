// datos.js
const mallaCurricular = [
  {
    ciclo: "I",
    asignaturas: [
      { nombre: "Filosofía y Ética Profesional", codigo: "MAT001", uv: 4, prerrequisitos: [] },
      { nombre: "Matemáticas I", codigo: "MAT002", uv: 4, prerrequisitos: [] },
      { nombre: "Lógica Computacional", codigo: "MAT003", uv: 4, prerrequisitos: [] },
      { nombre: "Inglés Técnico I", codigo: "MAT004", uv: 3, prerrequisitos: [] }
    ]
  },
  {
    ciclo: "II",
    asignaturas: [
      { nombre: "Gestión de Redes I", codigo: "MAT005", uv: 4, prerrequisitos: [] },
      { nombre: "Matemáticas II", codigo: "MAT006", uv: 4, prerrequisitos: ["MAT002"] },
      { nombre: "Programación I", codigo: "MAT007", uv: 4, prerrequisitos: ["MAT003"] },
      { nombre: "Física I", codigo: "MAT008", uv: 4, prerrequisitos: [] },
      { nombre: "Química General", codigo: "MAT009", uv: 4, prerrequisitos: [] }
    ]
  },
  {
    ciclo: "III",
    asignaturas: [
      { nombre: "Gestión de Redes II", codigo: "MAT010", uv: 4, prerrequisitos: ["MAT005"] },
      { nombre: "Matemáticas III", codigo: "MAT011", uv: 4, prerrequisitos: ["MAT006"] },
      { nombre: "Programación II", codigo: "MAT012", uv: 4, prerrequisitos: ["MAT007"] },
      { nombre: "Física II", codigo: "MAT013", uv: 4, prerrequisitos: ["MAT008"] },
      { nombre: "Ingeniería de Software", codigo: "MAT014", uv: 4, prerrequisitos: ["MAT007"] }
    ]
  },
  {
    ciclo: "IV",
    asignaturas: [
      { nombre: "Diseño de Base de Datos", codigo: "MAT015", uv: 4, prerrequisitos: ["MAT010"] },
      { nombre: "Matemáticas IV", codigo: "MAT016", uv: 4, prerrequisitos: ["MAT011"] },
      { nombre: "Programación III", codigo: "MAT017", uv: 4, prerrequisitos: ["MAT012"] },
      { nombre: "Física III", codigo: "MAT018", uv: 4, prerrequisitos: ["MAT013"] },
      { nombre: "Estadística I", codigo: "MAT019", uv: 4, prerrequisitos: [] }
    ]
  },
  {
    ciclo: "V",
    asignaturas: [
      { nombre: "Programación para Móviles", codigo: "MAT020", uv: 4, prerrequisitos: ["MAT017"] },
      { nombre: "Arquitectura de Aplicaciones en la Nube", codigo: "MAT021", uv: 4, prerrequisitos: ["MAT015", "MAT017"] },
      { nombre: "Administración de Servidores y de Base de Datos", codigo: "MAT022", uv: 4, prerrequisitos: ["MAT015"] },
      { nombre: "Realidad Nacional", codigo: "MAT023", uv: 4, prerrequisitos: [] },
      { nombre: "Métodos y Técnicas de Investigación", codigo: "MAT024", uv: 4, prerrequisitos: ["MAT019"] }
    ]
  },
  {
    ciclo: "VI",
    asignaturas: [
      { nombre: "Sistemas Operativos", codigo: "MAT025", uv: 4, prerrequisitos: [] },
      { nombre: "Tecnologías Inmersivas", codigo: "MAT026", uv: 4, prerrequisitos: ["MAT020"] },
      { nombre: "Gestión de Proyectos Informáticos", codigo: "MAT027", uv: 4, prerrequisitos: ["MAT022"] },
      { nombre: "Introducción a Machine Learning", codigo: "MAT028", uv: 4, prerrequisitos: ["MAT019"] },
      { nombre: "Técnicas de Redacción", codigo: "MAT029", uv: 4, prerrequisitos: [] }
    ]
  },
  {
    ciclo: "VII",
    asignaturas: [
      { nombre: "Análisis y Diseño de Sistemas", codigo: "MAT030", uv: 4, prerrequisitos: ["MAT020"] },
      { nombre: "Análisis Web", codigo: "MAT031", uv: 4, prerrequisitos: ["MAT028"] },
      { nombre: "Analítica Avanzada", codigo: "MAT032", uv: 4, prerrequisitos: ["MAT028"] },
      { nombre: "Gestión del Talento Humano", codigo: "MAT033", uv: 4, prerrequisitos: [] }
    ]
  },
  {
    ciclo: "VIII",
    asignaturas: [
      { nombre: "Administración de las Tecnologías de la Información", codigo: "MAT034", uv: 4, prerrequisitos: ["MAT027", "MAT030"] },
      { nombre: "Integración de Sistemas", codigo: "MAT035", uv: 4, prerrequisitos: ["MAT027", "MAT030"] },
      { nombre: "Seguridad en Redes de Datos", codigo: "MAT036", uv: 4, prerrequisitos: ["MAT027", "MAT030"] },
      { nombre: "Inglés Técnico II", codigo: "MAT037", uv: 4, prerrequisitos: ["MAT004"] }
    ]
  },
  {
    ciclo: "IX",
    asignaturas: [
      { nombre: "Auditoría de Aplicaciones Informáticas", codigo: "MAT038", uv: 4, prerrequisitos: ["MAT034"] },
      { nombre: "Sistemas de Información General", codigo: "MAT039", uv: 4, prerrequisitos: ["MAT032", "MAT035"] },
      { nombre: "Integración Continua", codigo: "MAT040", uv: 4, prerrequisitos: ["MAT021"] }
    ]
  },
  {
    ciclo: "X",
    asignaturas: [
      { nombre: "Desarrollo de Emprendedores", codigo: "MAT041", uv: 4, prerrequisitos: ["MAT039"] },
      { nombre: "Aplicaciones de Machine Learning", codigo: "MAT042", uv: 4, prerrequisitos: ["MAT032"] },
      { nombre: "Finanzas para Proyectos", codigo: "MAT043", uv: 4, prerrequisitos: ["MAT039"] }
    ]
  },
  {
    ciclo: "Proceso de Graduación",
    asignaturas: [
      { nombre: "Proceso de Graduación", codigo: "MAT044", uv: 10, prerrequisitos: [] }
    ]
  }
];

