// ============================================================================
//  ⭐ CONTENIDO DEL PORTAFOLIO DE DANIEL VARGAS ⭐
//  Edita aquí tus textos, proyectos y datos. No necesitas tocar nada más.
// ============================================================================

export const perfil = {
  nombre: 'Daniel Vargas',
  nombreCompleto: 'Daniel Alberto Vargas Figueroa',
  // Título grande del inicio, línea por línea:
  titularLineas: ['Diseño', 'con', 'propósito.'],
  rol: 'Diseñador Gráfico Profesional',
  edad: '23 años',
  // Frase corta bajo el titular:
  tagline:
    'Diseñador gráfico profesional con más de 3 años de experiencia en branding, publicidad, contenido digital y producción visual multiformato.',
  ubicacion: 'Bucaramanga, Colombia',
  email: 'dv056806@gmail.com',
  telefono: '+57 322 639 9175',
  idioma: 'Inglés B2',
  foto: '/daniel.jpg',
  // Etiquetas que acompañan tu nombre:
  chips: ['Branding', 'Publicidad', 'Ilustración', 'Video & 3D'],
}

// Biografía / sobre mí
export const sobreMi = {
  parrafos: [
    'Soy Daniel Vargas, diseñador gráfico profesional de Bucaramanga. Me especializo en piezas publicitarias, ilustración, edición de video, renders 3D y soluciones gráficas para sectores comerciales, institucionales y de marketing.',
    'Aporto creatividad, aprendizaje ágil, criterio visual y dominio técnico para desarrollar piezas alineadas con los objetivos de cada marca y las tendencias del mercado. Mi mayor inspiración es la cultura visual contemporánea y el detalle bien resuelto.',
  ],
  // Pequeños datos destacados
  datos: [
    ['Ubicación', 'Bucaramanga, Colombia'],
    ['Edad', '23 años'],
    ['Idioma', 'Inglés B2'],
    ['Disponibilidad', 'Proyectos freelance'],
  ],
}

// Métricas / números destacados del inicio
export const stats = [
  { valor: '+3', etiqueta: 'Años de experiencia' },
  { valor: '+100', etiqueta: 'Proyectos realizados' },
  { valor: '+10', etiqueta: 'Marcas y clientes' },
  { valor: 'B2', etiqueta: 'Nivel de inglés' },
]

// Lo que haces — tarjetas de servicios
export const servicios = [
  {
    icono: '✦',
    titulo: 'Branding & Identidad',
    desc: 'Identidades visuales, logotipos y sistemas de marca coherentes y memorables.',
  },
  {
    icono: '◆',
    titulo: 'Diseño Publicitario',
    desc: 'Piezas para campañas: redes, material POP, vallas y formatos impresos y digitales.',
  },
  {
    icono: '▲',
    titulo: 'Ilustración Digital',
    desc: 'Carteles, ilustraciones y piezas vectoriales con estilo propio.',
  },
  {
    icono: '●',
    titulo: 'Diseño Editorial',
    desc: 'Revistas, periódicos y catálogos con jerarquía y ritmo visual.',
  },
  {
    icono: '■',
    titulo: 'Video & Motion',
    desc: 'Edición de video y piezas en movimiento para redes y campañas.',
  },
  {
    icono: '⬢',
    titulo: 'Renders 3D',
    desc: 'Modelado y render de producto y escenas con Blender.',
  },
]

// ============================================================================
//  PROYECTOS — cada uno tiene su PÁGINA en /proyecto/<slug>
//  imagenes: deja [] y se muestran bloques de color hasta que cargues las tuyas
// ============================================================================
export const proyectos = [
  {
    slug: 'rediseno-discord',
    titulo: 'Rediseño Discord',
    categoria: 'Diseño de Interfaz',
    desc: 'Rediseño de la interfaz de la app de chat de voz y texto Discord.',
    color: ['#7ed957', '#2f9e3f'],
    tags: ['UI/UX', 'Mobile', 'App'],
    año: '2023',
    cliente: 'Proyecto conceptual',
    rol: 'UI/UX y diseño visual',
    descripcionLarga:
      'Repensé la interfaz de Discord con un enfoque más limpio y jerárquico, manteniendo su esencia pero mejorando la legibilidad y la experiencia en móvil. Trabajé pantallas de chat de voz y texto, navegación y componentes, cuidando la consistencia del sistema visual.',
    portada: '/proyectos/p-03.jpg',
    imagenes: ['/proyectos/p-03.jpg'],
  },
  {
    slug: 'cartelismo-ilustracion',
    titulo: 'Cartelismo & Ilustración',
    categoria: 'Ilustración',
    desc: 'Serie de carteles ilustrados con estilos vectoriales e isométricos.',
    color: ['#2f9e3f', '#0f3d18'],
    tags: ['Ilustración', 'Cartel', 'Vector'],
    año: '2023',
    cliente: 'Proyecto personal',
    rol: 'Ilustración y dirección de arte',
    descripcionLarga:
      'Una colección de carteles donde exploro distintos lenguajes ilustrativos: un cartel isométrico de Rick & Morty, un autorretrato en el estilo gráfico de "HOPE", series de estampillas y carteles temáticos. El hilo conductor es el color audaz y la composición fuerte.',
    portada: '/proyectos/p-05.jpg',
    imagenes: ['/proyectos/p-05.jpg', '/proyectos/p-04.jpg'],
  },
  {
    slug: 'branding-magia-trigo',
    titulo: 'La Magia del Trigo',
    categoria: 'Branding',
    desc: 'Identidad corporativa completa para una panadería artesanal.',
    color: ['#7ed957', '#1c6e2c'],
    tags: ['Branding', 'Logotipo', 'Identidad'],
    año: '2022',
    cliente: 'Panadería La Magia del Trigo',
    rol: 'Identidad de marca y dirección de arte',
    descripcionLarga:
      'Rediseño de identidad visual para la panadería "La Magia del Trigo": logotipo con un personaje ilustrado, sistema gráfico cálido, aplicaciones de marca (vasos, empaques) e identidad corporativa en redes sociales. Una marca con alma artesanal y presencia memorable.',
    portada: '/proyectos/p-16.jpg',
    imagenes: ['/proyectos/p-16.jpg', '/proyectos/p-17.jpg', '/proyectos/p-15.jpg'],
  },
  {
    slug: 'revista-ciudad-bonita',
    titulo: 'La Ciudad Bonita',
    categoria: 'Diseño Editorial',
    desc: 'Diseño y diagramación de una revista cultural sobre Bucaramanga.',
    color: ['#7ed957', '#1c6e2c'],
    tags: ['Editorial', 'Maquetación', 'Tipografía'],
    año: '2022',
    cliente: 'Proyecto editorial',
    rol: 'Diseño y diagramación',
    descripcionLarga:
      'Diseño editorial de una revista cultural dedicada a Bucaramanga, "La Ciudad Bonita". Definí la retícula, la jerarquía tipográfica y el ritmo visual de las páginas para lograr una lectura fluida y atractiva, combinando fotografía e ilustración.',
    portada: '/proyectos/p-08.jpg',
    imagenes: ['/proyectos/p-08.jpg', '/proyectos/p-09.jpg'],
  },
  {
    slug: 'catalogo-videojuegos',
    titulo: 'Catálogo Atari 2600',
    categoria: 'Catálogo',
    desc: 'Catálogo de videojuegos retro con un sistema visual nostálgico.',
    color: ['#4caf50', '#0f3d18'],
    tags: ['Editorial', 'Branding', 'Retro'],
    año: '2022',
    cliente: 'Proyecto conceptual',
    rol: 'Diseño editorial e identidad',
    descripcionLarga:
      'Un catálogo dedicado a los videojuegos de la Atari 2600, donde recuperé la estética retro de los 80 con una paleta vibrante y una tipografía de la época, organizando la información en un sistema claro y coleccionable.',
    portada: '/proyectos/p-10.jpg',
    imagenes: ['/proyectos/p-10.jpg'],
  },
  {
    slug: 'diseno-geometrico',
    titulo: 'Diseño Geométrico',
    categoria: 'Composición',
    desc: 'Serie de composiciones geométricas inspiradas en la Bauhaus.',
    color: ['#7ed957', '#2f9e3f'],
    tags: ['Geométrico', 'Cartel', 'Abstracto'],
    año: '2023',
    cliente: 'Proyecto personal',
    rol: 'Diseño y composición',
    descripcionLarga:
      'Exploración de composición a partir de formas básicas, color plano y equilibrio, con guiños a la Bauhaus y al diseño suizo. Una serie de piezas donde la geometría y el contraste son los protagonistas.',
    portada: '/proyectos/p-06.jpg',
    imagenes: ['/proyectos/p-06.jpg', '/proyectos/p-07.jpg'],
  },
  {
    slug: 'contenido-redes',
    titulo: 'Contenido para Redes',
    categoria: 'Redes Sociales',
    desc: 'Piezas de marketing médico para redes sociales (Amedik).',
    color: ['#2f9e3f', '#0f3d18'],
    tags: ['Social Media', 'Marketing', 'Plantillas'],
    año: '2022',
    cliente: 'Amedik S.A.S.',
    rol: 'Diseño de contenido digital',
    descripcionLarga:
      'Series de publicaciones para redes sociales de médicos y especialistas en una agencia de marketing médico. Desarrollé sistemas de plantillas claros y profesionales para comunicar servicios, educar a la audiencia y reforzar la presencia de marca.',
    portada: '/proyectos/p-18.jpg',
    imagenes: ['/proyectos/p-18.jpg', '/proyectos/p-19.jpg', '/proyectos/p-20.jpg'],
  },
  {
    slug: 'flyers-promocionales',
    titulo: 'Flyers & Promocional',
    categoria: 'Publicidad',
    desc: 'Flyers, piezas promocionales e infografías para marcas y eventos.',
    color: ['#2f9e3f', '#0f3d18'],
    tags: ['Publicidad', 'Social', 'Print'],
    año: '2024',
    cliente: 'Varios clientes',
    rol: 'Diseño publicitario',
    descripcionLarga:
      'Conjunto de flyers, piezas promocionales e infografías para distintas marcas y eventos, entre ellos campañas de producto y deportivas. Cada pieza busca captar la atención y comunicar la oferta de forma directa y atractiva.',
    portada: '/proyectos/p-11.jpg',
    imagenes: ['/proyectos/p-11.jpg', '/proyectos/p-12.jpg'],
  },
]

// ============================================================================
//  EXPERIENCIA PROFESIONAL
// ============================================================================
export const experiencia = [
  {
    cargo: 'Diseñador Gráfico Principal',
    empresa: 'CHP Materiales para Construcción S.A.S.',
    lugar: 'Bucaramanga',
    periodo: '2025 — Actualidad',
    desc: 'Lidero la ejecución gráfica integral de la compañía: campañas comerciales, comunicación institucional y apoyo a ventas. Diseño piezas para redes, video, material POP, puntos de venta y vallas.',
  },
  {
    cargo: 'Diseñador Gráfico & Editor Audiovisual',
    empresa: 'Freelance · BetelMotors y otros',
    lugar: 'Bucaramanga',
    periodo: '2022 — Actualidad',
    desc: 'Desarrollo piezas gráficas y edición de video para marcas de distintos sectores, gestionando los requerimientos creativos de principio a fin según público, canal y objetivo.',
  },
  {
    cargo: 'Diseñador Gráfico',
    empresa: 'Amedik S.A.S.',
    lugar: 'Bucaramanga',
    periodo: '2021 — 2022',
    desc: 'Diseñé piezas para redes y web de médicos y especialistas en una agencia de marketing médico, apoyando el posicionamiento digital y la presencia de marca.',
  },
]

// ============================================================================
//  HERRAMIENTAS (insignias de software) y competencias
// ============================================================================
export const herramientas = [
  { abbr: 'Ai', nombre: 'Illustrator' },
  { abbr: 'Ps', nombre: 'Photoshop' },
  { abbr: 'Id', nombre: 'InDesign' },
  { abbr: 'Pr', nombre: 'Premiere' },
  { abbr: 'Ae', nombre: 'After Effects' },
  { abbr: 'Bl', nombre: 'Blender' },
  { abbr: 'Pc', nombre: 'Procreate' },
  { abbr: 'Cc', nombre: 'CapCut' },
]

export const competencias = [
  'Branding',
  'Diseño publicitario',
  'Redes sociales',
  'Diseño editorial',
  'Identidad visual',
  'Edición de video',
  'Renders 3D',
  'Ilustración digital',
  'Material POP',
  'Vallas publicitarias',
  'E-commerce',
  'Storytelling visual',
]

// Redes / enlaces del pie de página
export const redes = [
  { nombre: 'Instagram', url: 'https://instagram.com/im_daniel_vargas' },
  { nombre: 'Behance', url: '#' },
  { nombre: 'LinkedIn', url: '#' },
  { nombre: 'Correo', url: 'mailto:dv056806@gmail.com' },
]
