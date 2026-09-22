export default {
  global: {
    Name: 'Verificación y reporte de la información contable',
    Description:
      'Este componente desarrolla procedimientos para verificar que los soportes, comprobantes y registros correspondan con los hechos económicos y las normas aplicables. Integra la revisión de documentos físicos y digitales, la gestión documental, el diligenciamiento de libros contables, la elaboración de reportes y estados financieros básicos, además de controles de archivo, seguridad, ergonomía y manejo ambiental. Así fortalece la trazabilidad y confiabilidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Verificación de soportes y registros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia de la verificación contable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Relación entre hecho económico, soporte, comprobante y registro',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Verificación de documentos según guía técnica y normativa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Verificación de registros frente a normas de reconocimiento',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Revisión de cuentas, débitos, créditos y saldos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Identificación de errores frecuentes en los registros contables',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Ajustes y correcciones básicas en la información contable',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Ejemplo aplicado de verificación de soportes y registros',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Tabla de retención documental y gestión de documentos contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de gestión documental contable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tabla de retención documental: concepto y finalidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Normativa aplicable a la conservación de documentos contables',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Aplicación de la tabla de retención documental a registros y soportes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Documentos físicos y documentos digitales',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Sistema de gestión electrónica de documentos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Conservación, trazabilidad y consulta de soportes contables',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Ejemplo aplicado de organización documental contable',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Libros contables y comprobantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de libros contables',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de los libros contables',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Libro diario, libro mayor y libros auxiliares',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Concepto y función de los comprobantes de contabilidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Relación entre comprobantes, soportes y libros contables',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Formatos y diligenciamiento de libros contables',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Revisión de movimientos y saldos en libros',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'Ejemplo aplicado de diligenciamiento básico de libros contables',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reportes contables y estados financieros básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de reportes contables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación de reportes contables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Reportes auxiliares de clientes, proveedores, bancos e inventarios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Balance de prueba',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estado de situación financiera',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Estado de resultados',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Relación entre registros, libros y estados financieros',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Ejemplo aplicado de elaboración de reportes contables',
            hash: 't_4_8',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Control, seguridad, archivo y buenas prácticas en la información contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Revisión integral antes de generar reportes contables',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Coherencia entre soportes, comprobantes, libros y reportes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Controles básicos para la calidad de la información contable',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Seguridad y salud en el trabajo aplicada al archivo contable',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Ergonomía en labores de digitación, archivo y revisión documental',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Manejo ambiental de residuos de papelería',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo:
              'Buenas prácticas para conservar y presentar información contable',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo:
              'Caso práctico integrador de verificación, libros y reportes',
            hash: 't_5_8',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Archivo contable',
      significado:
        'Conjunto organizado de documentos físicos o digitales que respaldan los hechos económicos registrados por la empresa.',
    },
    {
      termino: 'Balance de prueba',
      significado:
        'Reporte que presenta cuentas, movimientos débitos, créditos y saldos para revisar la consistencia de la información contable.',
    },
    {
      termino: 'Comprobante de contabilidad',
      significado:
        'Documento interno que resume el registro de una operación, indicando cuentas, valores, débitos, créditos y soporte relacionado.',
    },
    {
      termino: 'Conservación documental',
      significado:
        'Proceso mediante el cual se protegen y mantienen disponibles los documentos contables durante el tiempo requerido.',
    },
    {
      termino: 'Control contable',
      significado:
        'Procedimiento que permite revisar, prevenir y corregir errores en la información financiera registrada.',
    },
    {
      termino: 'Documento digital',
      significado:
        'Archivo electrónico que respalda una operación contable, como facturas electrónicas, comprobantes bancarios o reportes del sistema.',
    },
    {
      termino: 'Documento físico',
      significado:
        'Soporte en papel que respalda una operación contable, como facturas impresas, recibos, contratos o comprobantes firmados.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Estado financiero que presenta ingresos, costos, gastos y utilidad o pérdida de un periodo determinado.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Estado financiero que refleja activos, pasivos y patrimonio de una empresa en una fecha determinada.',
    },
    {
      termino: 'Gestión documental contable',
      significado:
        'Proceso de clasificar, organizar, conservar y consultar los documentos relacionados con la información contable.',
    },
    {
      termino: 'Libro auxiliar',
      significado:
        'Registro detallado que permite consultar movimientos y saldos por tercero, cuenta, documento o concepto específico.',
    },
    {
      termino: 'Libro diario',
      significado:
        'Libro contable donde se registran las operaciones en orden cronológico.',
    },
    {
      termino: 'Libro mayor',
      significado:
        'Libro contable que agrupa los movimientos y saldos de cada cuenta.',
    },
    {
      termino: 'Reporte contable',
      significado:
        'Informe generado a partir de los registros contables para revisar saldos, movimientos y resultados.',
    },
    {
      termino: 'Trazabilidad documental',
      significado:
        'Capacidad de seguir una operación desde el soporte hasta el comprobante, registro, libro y reporte contable.',
    },
  ],
  referencias: [
    {
      referencia: 'Archivo General de la Nación. (2000). Ley 594.',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      referencia:
        'Contaduría General de la Nación. (s.f.). Proceso Contable y Sistema Documental Contable.',
      link: 'https://www.contaduria.gov.co/proceso-contable-y-sistema-documental-contable1?utm',
    },
    {
      referencia: 'DIAN. (s.f.). ¿Qué es la Factura Electrónica?',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/factura-electronica/?utm',
    },
    {
      referencia:
        'Molina S, H. (s.f.). Convergencia con las Normas Internacionales de Información Financiera (NIIF) en Colombia.',
      link: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.dian.gov.co/fizcalizacioncontrol/herramienconsulta/NIIF/Orientaciones%20CTCP/Documento3_Orientaciones_Tecnica_NIIF_para_las_Pymes_Marco.pdf?utm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 1072.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (s.f.). Libros de contabilidad y papeles del comerciante.',
      link: 'https://www.supersociedades.gov.co/web/nuestra-entidad/cap-1-libros-de-contabilidad',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
