export default {
  global: {
    componenteFormativo: 'La comunicación',
    descripcionCurso:
      'El componente formativo aborda la importancia de la comunicación en las organizaciones, destacando elementos clave como el emisor, receptor, mensaje, código y canal. Se exploran tipos de comunicación, tanto interna como externa, y se enfatiza la relevancia de un plan de comunicación efectivo. Además, se detallan herramientas de gestión y la evolución de la comunicación organizacional, incluyendo la influencia del clima y la cultura organizacional en el rendimiento y la cohesión interna.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La comunicación y sus elementos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de comunicación interna',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de gestión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Clima y cultura organizacional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La comunicación y sus elementos',
      referencia:
        'Lifeder Educación. (2020). Los elementos de la comunicación (ejemplos y características). [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xF8lqF9LMAg',
    },
    {
      tema: 'Tipos de comunicación',
      referencia:
        'TeoCom. (2023).Estilos de comunicación. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9ITxAy7vsBQ',
    },
    {
      tema: 'Plan de comunicación interna',
      referencia: 'Vázquez, A. (2020). Plan de comunicación interna. UOC.',
      tipo: 'Leer capitulo 4',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/125309/6/antovazTFM0620memoria.pdf',
    },
    {
      tema: 'Herramientas de gestión',
      referencia:
        'Función Pública. (2023). Guía de producción de herramientas técnicas de comunicación.',
      tipo: 'Guía',
      link:
        'https://www1.funcionpublica.gov.co/documents/34645357/34703108/Guia_produccion_herramientas_tecnicas_v1.pdf/991fcded-027b-25c8-b144-7891c51ac165?t=1698426205809',
    },
    {
      tema: 'Clima y cultura organizacional',
      referencia:
        'TEDx Talks. (2022). Reinventando la cultura organizacional | Antonio Arranz | TEDxYouth@ASF. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zgBWn3NNi9o',
    },
  ],
  glosario: [
    {
      termino: 'Canal',
      significado:
        'medio o vehículo a través del cual se transmite el mensaje, conectando al emisor con el receptor. Ejemplos: aire (en el caso de la voz), hilo telefónico.',
    },
    {
      termino: 'Código',
      significado:
        'conjunto de reglas y sistemas de signos y símbolos utilizados por el emisor para estructurar el mensaje, permitiendo su correcta interpretación por parte del receptor. Ejemplo: la gramática de un idioma.',
    },
    {
      termino: 'Contexto',
      significado:
        'tiempo y lugar en que se lleva a cabo el acto comunicativo, influyendo en la interpretación del mensaje.',
    },
    {
      termino: 'Interferencia o barrera',
      significado:
        'perturbación que afecta el proceso comunicativo, pudiendo presentarse en cualquier elemento del proceso, como errores de ortografía, problemas de audición, o distracción del receptor.',
    },
    {
      termino: 'Mensaje',
      significado:
        'información transmitida del emisor al receptor, que incluye un conjunto de ideas, pensamientos, sentimientos y acontecimientos.',
    },
    {
      termino: 'Referente',
      significado:
        'realidad representada o descrita por el mensaje; aquello que se comunica a través del mensaje.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'respuesta del receptor al emisor, esencial para la interacción en la comunicación. Puede ser positiva (fomenta la continuidad del diálogo) o negativa (indica un cambio o fin de la conversación).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arribas, A. (2000). Comunicación en la empresa. La importancia de la información interna en la empresa. Revista Latina de Comunicación Social, 27.',
      link: '',
    },
    {
      referencia:
        'Bayer, C. (2014). Comunicación eficaz, una competencia para lograr el éxito organizacional.',
      link: '',
    },
    {
      referencia:
        'Cabrera, J. (2011). La innovación el trabajo de todos. Cabrera Magnamment Consultants.',
      link: '',
    },
    {
      referencia:
        'Chávez, N. (2013). La imagen corporativa teoría y práctica de la identificación institucional. México: Editorial Gili Gaya.',
      link: '',
    },
    {
      referencia:
        'García, M. (1997). Clima Organizacional y su Diagnóstico: Una Aproximación Conceptual. Maestría/Magister, Universidad del Valle.',
      link: '',
    },
    {
      referencia:
        'Kreitner, R. (2003). Comportamiento organizacional: Conceptos, problemas y prácticas. Arizona State University.',
      link: '',
    },
    {
      referencia:
        'Sandoval, M. (2004). El Aprendizaje Organizacional como respuesta al cambio. Su relación con el desarrollo, comportamiento y la comunicación organizacional: una visión general de las empresas de comercio y servicio en la ciudad de Puebla. (Tesis profesional). Universidad de las Américas Puebla, México.',
      link: '',
    },
    {
      referencia:
        'Solano, A. (2008). Administración de la educación. Promai-uned. San José de Costa Rica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
