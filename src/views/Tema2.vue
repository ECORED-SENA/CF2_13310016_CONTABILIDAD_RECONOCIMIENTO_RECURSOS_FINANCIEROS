<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Tabla de retención documental y gestión de documentos contables
      p(data-aos="fade-left") La gestión documental contable establece criterios para administrar los documentos que respaldan las operaciones y conservar la trazabilidad de la información financiera. Los subtemas desarrollan los criterios, instrumentos y procedimientos aplicables al manejo de la documentación contable durante su ciclo de vida.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Concepto de gestión documental contable
      p(data-aos="fade-left") Posteriormente, se explican su concepto, importancia y aplicación en la organización de los documentos relacionados con el proceso contable:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-2.h-100.bg-color-5.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Concepto
                    p.mb-3 La gestión documental contable comprende las actividades destinadas a producir, recibir, clasificar, organizar, conservar, consultar y disponer los documentos relacionados con la información contable.
                    p Incluye facturas, recibos, comprobantes, notas contables, contratos, extractos bancarios, libros, reportes auxiliares y estados financieros.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-2.h-100.bg-color-5.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Importancia
                    p.mb-3 Una adecuada gestión documental permite relacionar el hecho económico con su soporte, comprobante, registro y reporte.
                    p Además, facilita la verificación de operaciones, la atención de controles y la corrección de errores, lo que fortalece la confiabilidad de la información contable.
            //- Fin Tarjetas
      p(data-aos="fade-left") La tabla presenta algunos documentos que deben organizarse dentro de la gestión documental contable:
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Documentos frecuentes en la gestión documental contable
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Documento contable
                        th(style="width: 45%") Función dentro del proceso contable
                        th(style="width: 30%") Ejemplo
                    tbody
                      tr
                        td Factura de venta
                        td Soporta ingresos y cuentas por cobrar.
                        td Venta de mercancía a crédito.
                      tr
                        td Factura de compra
                        td Soporta compras, costos, gastos o activos.
                        td Compra de mercancía o insumos.
                      tr
                        td Recibo de caja
                        td Evidencia recaudos de clientes u otros ingresos.
                        td Pago recibido de un cliente.
                      tr
                        td Comprobante de egreso
                        td Respalda pagos realizados por la empresa.
                        td Pago a proveedor.
                      tr
                        td Nota contable
                        td Permite registrar ajustes o reclasificaciones.
                        td Corrección de cuenta contable.
                      tr
                        td Extracto bancario
                        td Sirve para comparar movimientos contables y bancarios.
                        td Conciliación bancaria.
                      tr
                        td Libro contable
                        td Acumula registros de operaciones.
                        td Libro diario o libro mayor.
                      tr
                        td Estado financiero
                        td Presenta información resumida de la empresa.
                        td Estado de situación financiera.
            //- Fin Tabla
            .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
              .col-lg-5.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t2/img1.png', alt='', style="object-fit: cover;")
              .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4
                p.mb-3 Este caso evidencia la importancia de organizar conjuntamente los documentos físicos y electrónicos:
                p <b>Ejemplo aplicado</b>
                p Una empresa conserva las facturas de compra en una carpeta física, los comprobantes de egreso en una carpeta digital y los extractos bancarios en el correo del administrador. Aunque los documentos existen, su dispersión dificulta verificar un pago o elaborar un reporte.
                p.mb-0 La gestión documental permite clasificarlos por año, mes, tipo de documento y tercero, de modo que cada soporte pueda relacionarse con su comprobante y registro contable.
            Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Tabla de retención documental: concepto y finalidad
      p(data-aos="fade-left") La tabla de retención documental establece los criterios para clasificar, conservar y disponer los documentos producidos por una entidad. Los siguientes apartados explican el concepto, la finalidad y la aplicación contable de la tabla de retención documental:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Concepto")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Concepto
                p La tabla de retención documental es un instrumento archivístico que define las series y subseries documentales, sus tiempos de permanencia y su disposición final.
          .py-3.py-md-4(titulo="Finalidad")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-md-6
                h4 Finalidad
                p Permite determinar qué documentos se conservan, durante cuánto tiempo, dónde se ubican y qué tratamiento reciben al finalizar su periodo de retención.
          .py-3.py-md-4(titulo="Aplicación contable")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-md-6
                h4 Aplicación contable
                p En contabilidad, permite organizar facturas, comprobantes, libros, extractos, declaraciones, reportes y estados financieros. Así facilita su consulta y reduce los riesgos de pérdida, eliminación indebida o acumulación desordenada (Ley 594 de 2000).
            //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Los elementos que determinan la clasificación, ubicación, permanencia y disposición final de los documentos dentro del archivo son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Serie documental")
                p.mb-2 Conjunto de documentos relacionados con una misma función o trámite.
                p.mb-4 #[b Ejemplo:] comprobantes contables.
              .row(titulo="Subserie documental")
                p.mb-2 División específica que organiza los documentos pertenecientes a una serie.
                p.mb-4 #[b Ejemplo:] comprobantes de egreso.
              .row(titulo="Archivo de gestión")
                p.mb-2 Conserva los documentos de uso y consulta frecuente.
                p.mb-4 #[b Ejemplo:] documentos contables del año actual.
              .row(titulo="Archivo central")
                p.mb-2 Conserva los documentos transferidos que se consultan con menor frecuencia.
                p.mb-4 #[b Ejemplo:] documentos contables de años anteriores.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Tiempo de retención")
                p.mb-2 Periodo durante el cual deben conservarse los documentos en cada archivo.
                p.mb-4 #[b Ejemplo:] tiempo establecido en la tabla de retención documental.
              .row(titulo="Disposición final")
                p.mb-2 Tratamiento aplicado cuando finaliza el tiempo de retención.
                p.mb-4 #[b Ejemplo:] conservación, selección o eliminación.
              .row(titulo="Soporte")
                p.mb-2 Medio en el que se produce y conserva el documento.
                p.mb-4 #[b Ejemplo:] formato físico o digital.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-3
          p.mb-3 El caso siguiente aplica la tabla de retención documental a la organización de comprobantes de egreso:
          p <b>Ejemplo aplicado</b>
          p.mb-3 Una empresa conserva sus comprobantes de egreso en cajas sin clasificación. Cuando necesita verificar el pago realizado a un proveedor, tarda varias horas en encontrar el soporte.
          p.mb-0 La tabla de retención documental permite clasificarlos, establecer su permanencia en los archivos de gestión y central, y definir su disposición final. Esto facilita la consulta y reduce los riesgos de pérdida o eliminación indebida.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img4.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Normativa aplicable a la conservación de documentos contables
      p(data-aos="fade-left") La conservación de documentos contables debe cumplir las disposiciones contables, comerciales, tributarias y archivísticas aplicables. 
      p(data-aos="fade-left") Estas son las fuentes normativas que orientan la organización, conservación y disponibilidad de los documentos que respaldan las operaciones económicas:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Contaduría General de la Nación
                            p.mb-2 Orienta el sistema documental y la conservación de la información financiera.
                            p.mb-0 #[b Aplicación:] organización de soportes, comprobantes y libros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Superintendencia de Sociedades
                            p.mb-2 Establece criterios relacionados con libros, soportes, comprobantes y registros contables.
                            p.mb-0 #[b Aplicación:] conservación de los documentos que respaldan los registros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ley General de Archivos
                            p.mb-2 Regula la organización, conservación y disposición de los documentos.
                            p.mb-0 #[b Aplicación:] implementación de instrumentos archivísticos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 DIAN
                            p.mb-2 Establece disposiciones tributarias relacionadas con la factura electrónica y los soportes fiscales.
                            p.mb-0 #[b Aplicación:] conservación de facturas electrónicas y documentos tributarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Código de Comercio
                            p.mb-2 Regula la conservación de libros y papeles relacionados con la actividad comercial.
                            p.mb-0 #[b Aplicación:] custodia de libros y documentos mercantiles.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t2/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") La empresa debe identificar qué documentos produce o recibe, cuánto tiempo debe conservarlos y bajo qué condiciones. El caso siguiente evidencia la importancia de aplicar estas disposiciones:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 <b>Ejemplo aplicado</b>
            br
            br
            | Una empresa recibe una solicitud de revisión de una declaración tributaria presentada en un periodo anterior. Para responder, necesita consultar facturas, comprobantes de pago, registros contables, extractos bancarios y reportes auxiliares.
            br
            br
            | Si la documentación se conservó de manera organizada, podrá responder oportunamente. En cambio, la información eliminada o archivada sin criterios dificultará la comprobación de las operaciones registradas.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Aplicación de la tabla de retención documental a registros y soportes
      p(data-aos="fade-left") La tabla de retención documental permite clasificar los registros y soportes contables, establecer su conservación y facilitar su consulta. 
      p(data-aos="fade-left") Esta tabla relaciona algunos documentos contables con su posible clasificación, criterio de organización y finalidad de consulta:
      //- Tabla de Aplicación de la TRD
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-12.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5.
                span Aplicación de la tabla de retención documental a documentos contables
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th Tipo de documento
                      th Posible serie documental
                      th Criterio de organización
                      th Consulta frecuente
                  tbody
                    tr
                      td Facturas de venta
                      td Documentos de ingresos.
                      td Año, mes, cliente, consecutivo.
                      td Revisión de ventas y cartera.
                    tr
                      td Facturas de compra
                      td Documentos de compras y gastos.
                      td Año, mes, proveedor, concepto.
                      td Revisión de costos, gastos e impuestos.
                    tr
                      td Comprobantes de egreso
                      td Documentos de pagos.
                      td Año, mes, banco, proveedor.
                      td Verificación de pagos.
                    tr
                      td Recibos de caja
                      td Documentos de recaudo.
                      td Año, mes, cliente, factura.
                      td Revisión de cartera.
                    tr
                      td Extractos bancarios
                      td Documentos bancarios.
                      td Banco, cuenta, mes.
                      td Conciliación bancaria.
                    tr
                      td Libros contables
                      td Libros de contabilidad.
                      td Periodo contable.
                      td Consulta de registros acumulados.
                    tr
                      td Estados financieros
                      td Reportes contables.
                      td Periodo, tipo de reporte.
                      td Análisis financiero y control.
            p(data-aos="fade-left") La organización debe relacionar cada documento con la operación y el registro correspondiente. El siguiente caso aplica estos criterios a las facturas de compra:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo aplicado</b>
            br
            br
            | Una empresa organiza las facturas de compra por año, mes y proveedor. Además, relaciona cada factura con el comprobante contable y la conserva en una carpeta física o digital identificada.
            br
            br
            | Esta clasificación facilita la revisión de compras, impuestos, cuentas por pagar y costos. Si el archivo solo se denomina «documento escaneado», su consulta y vinculación con la operación serán más difíciles.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Documentos físicos y documentos digitales
      p(data-aos="fade-left") Los documentos contables pueden conservarse en formato físico o digital, siempre que garanticen su integridad, autenticidad, disponibilidad y consulta. Las diferencias que permiten reconocer las características, los riesgos y los controles aplicables a cada tipo de soporte documental contable son:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Medio de conservación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: se conserva en papel, carpetas o espacios de archivo.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: se almacena en sistemas documentales, servidores o servicios institucionales en la nube.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Riesgos frecuentes
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: puede deteriorarse, romperse o perderse por humedad, manipulación inadecuada o accidentes.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: puede eliminarse accidentalmente, dañarse o quedar inaccesible por fallas tecnológicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consulta
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: requiere conocer su ubicación dentro del archivo.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: permite localizar la información mediante criterios de búsqueda.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Respaldo
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: puede protegerse mediante copias o procesos de digitalización.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: requiere copias de seguridad y mecanismos de recuperación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: exige inventarios, control de ubicación y registro de préstamos.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: requiere permisos de acceso, contraseñas y trazabilidad de las modificaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ejemplos
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento físico: factura impresa y firmada.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span Documento digital: factura electrónica conservada en formatos PDF y XML.
      //- Fin Slideshow
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 La gestión documental define la recepción, identificación, almacenamiento, respaldo y consulta de documentos físicos y digitales. La factura electrónica tiene validez legal y se gestiona electrónicamente (DIAN). El siguiente caso presenta un riesgo de conservación:
          .bg-color-6.p-3
            p.mb-3 <b>Ejemplo aplicado</b>
            p Una empresa recibe facturas electrónicas de sus proveedores, pero solo descarga el PDF y no conserva otros archivos asociados. Además, guarda los documentos en carpetas personales de distintos empleados. Esta práctica puede dificultar la consulta y aumentar el riesgo de pérdida de información.
            p Una mejor práctica consiste en definir una carpeta institucional por año y mes, conservar los archivos descargados del sistema de facturación, relacionarlos con el proveedor y asociarlos al comprobante contable. También se recomienda realizar copias de seguridad periódicas para proteger la información.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img8.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;")
      Separador
      //- Inicio Tema2.6
      .row
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Sistema de gestión electrónica de documentos
      p(data-aos="fade-left") Un sistema de gestión electrónica permite organizar, almacenar, proteger y consultar los documentos digitales relacionados con los registros contables. 
      p(data-aos="fade-left") Estas son funciones que contribuyen al control, la localización, la protección y la trazabilidad de los documentos contables almacenados electrónicament
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img9.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Almacenamiento digital")
                p.mb-2 Conserva los documentos en carpetas, repositorios o sistemas institucionales.
                p.mb-4 #[b Ejemplo:] facturas electrónicas organizadas por mes.
              .row(titulo="Clasificación")
                p.mb-2 Agrupa los documentos de acuerdo con criterios como tipo, periodo, tercero u operación.
                p.mb-4 #[b Ejemplo:] carpetas de compras, ventas y bancos.
              .row(titulo="Búsqueda")
                p.mb-2 Facilita la localización de documentos mediante datos previamente definidos.
                p.mb-4 #[b Ejemplo:] consulta por proveedor o número de factura.
              .row(titulo="Control de acceso")
                p.mb-2 Define quiénes pueden consultar, incorporar o modificar los archivos.
                p.mb-4 #[b Ejemplo:] acceso restringido al personal del área contable.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Trazabilidad")
                p.mb-2 Registra las consultas, modificaciones y demás acciones realizadas sobre los documentos.
                p.mb-4 #[b Ejemplo:] historial de cambios de un comprobante.
              .row(titulo="Respaldo")
                p.mb-2 Protege la información frente a pérdidas, daños o fallas tecnológicas.
                p.mb-4 #[b Ejemplo:] copia de seguridad en un servidor o servicio institucional en la nube.
              .row(titulo="Relación documental")
                p.mb-2 Vincula cada soporte con el comprobante y el registro contable correspondiente.
                p.mb-4 #[b Ejemplo:] factura asociada con el comprobante de compra.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img10.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El sistema debe configurarse según la estructura, los permisos, los formatos y los tiempos de conservación establecidos. A continuación, se expone caso que destaca la importancia de nombrar uniformemente los documentos:
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img11.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 <b>Ejemplo aplicado</b>
          p Una empresa almacena sus documentos contables en carpetas digitales, pero cada empleado utiliza nombres diferentes, como «factura1», «pago nuevo», «proveedor varios» o «documento final». Esta práctica dificulta la búsqueda y aumenta el riesgo de duplicidad.
          p Para mejorar la organización, se establece una nomenclatura compuesta por año, mes, tipo de documento, tercero y número de soporte. Por ejemplo:
          p <b>2026-05_FacturaCompra_ProveedorABC_1452</b>
          p.mb-0 Este criterio facilita la búsqueda, evita confusiones y fortalece el control documental.
      Separador
      //- Inicio Tema2.7
      .row
        #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.7 Conservación, trazabilidad y consulta de soportes contables
      p(data-aos="fade-left") La conservación, trazabilidad y consulta permiten mantener disponibles los soportes contables, relacionarlos con sus registros y recuperarlos cuando sean requeridos. Los aspectos que contribuyen a proteger, relacionar, organizar y consultar oportunamente los documentos que respaldan la información contable son:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conservación
                p Mantiene el documento disponible y protegido durante el tiempo establecido.
                p <b>Aplicación:</b> guardar las facturas en carpetas físicas o digitales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Trazabilidad
                p Permite relacionar el soporte, el comprobante, el registro contable y el reporte correspondiente.
                p <b>Aplicación:</b> asociar una factura con el asiento contable.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consulta
                p Facilita la localización de la información cuando se requiere para una revisión o decisión.
                p <b>Aplicación:</b> buscar un comprobante por fecha, tercero o consecutivo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguridad
                p Protege los documentos contra pérdidas, daños, alteraciones o accesos no autorizados.
                p <b>Aplicación:</b> establecer copias de seguridad y permisos de acceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Integridad
                p Evita modificaciones no autorizadas y conserva el contenido original del documento.
                p <b>Aplicación:</b> proteger los archivos contra edición.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organización
                p Clasifica los documentos mediante criterios uniformes que facilitan su ubicación.
                p <b>Aplicación:</b> organizar carpetas por año, mes y tipo documental.
      //- Fin Slideshow
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img12.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-3
          p.mb-3 La conservación debe complementarse con trazabilidad, seguridad y criterios de organización que faciliten la consulta. Para ampliar el contenido, se presenta un ejemplo:
          p <b>Ejemplo aplicado</b>
          p.mb-3 Una empresa necesita revisar el pago realizado a un proveedor hace seis meses. Para verificarlo, debe consultar la factura, el comprobante de egreso, el soporte bancario y el registro contable. Si estos documentos están relacionados y organizados, la revisión puede realizarse en pocos minutos.
          p.mb-0 Si los documentos están dispersos en correos, carpetas personales y archivos sin nombre claro, la revisión puede tomar mucho más tiempo o no completarse. Esto demuestra que la gestión documental contable no solo sirve para guardar documentos, sino para facilitar su uso cuando la información se requiere.
      Separador
      //- Inicio Tema2.8
      .row
        #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.8 Ejemplo aplicado de organización documental contable
      p(data-aos="fade-left") La organización documental contable integra criterios de clasificación, conservación y consulta que permiten relacionar los soportes con las operaciones registradas. El siguiente caso aplica criterios documentales según el tipo de soporte, su conservación y la finalidad de su consulta:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 <b>Ejemplo aplicado</b>
            br
            br
            | La empresa Comercial Los Cedros S.A.S. necesita organizar los documentos contables correspondientes al año 2026. Para ello, establece criterios uniformes según la naturaleza y el uso de cada documento:
      //- Tabla de Organización Documental Contable
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-12.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 6.
                span Organización documental contable propuesta
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 20%") Tipo de documento
                      th(style="width: 30%") Criterio de archivo
                      th(style="width: 25%") Medio de conservación
                      th(style="width: 25%") Finalidad de consulta
                  tbody
                    tr
                      td Facturas de venta
                      td Año, mes, cliente, consecutivo.
                      td Digital
                      td Revisar ingresos y cartera.
                    tr
                      td Facturas de compra
                      td Año, mes, proveedor, consecutivo.
                      td Digital y físico si aplica.
                      td Revisar compras, costos e impuestos.
                    tr
                      td Recibos de caja
                      td Año, mes, cliente.
                      td Digital
                      td Verificar recaudos.
                    tr
                      td Comprobantes de egreso
                      td Año, mes, proveedor o beneficiario.
                      td Digital
                      td Verificar pagos.
                    tr
                      td #xtractos bancarios
                      td Banco, cuenta, mes.
                      td Digital
                      td Realizar conciliaciones bancarias.
                    tr
                      td Nómina
                      td Año, mes, trabajador.
                      td Digital y físico si aplica.
                      td Verificar obligaciones laborales.
                    tr
                      td Contratos
                      td Tipo de contrato y tercero.
                      td Digital y físico si aplica.
                      td Respaldar obligaciones o derechos.
                    tr
                      td Estados financieros
                      td Periodo y tipo de reporte.
                      td Digital
                      td Consultar resultados y situación financiera.
            .row.mb-5.justify-content-center.align-items-center
              .col-12.col-lg-7.order-2.order-lg-1.bg-color-7.p-4(data-aos="fade-left")
                p La interpretación del caso es la siguiente:
                p <b>Interpretación del caso:</b> cada documento requiere criterios de archivo acordes con su naturaleza y finalidad. Su adecuada clasificación permite localizar los soportes, relacionarlos con los registros y atender oportunamente las consultas contables.
                p.mb-0 La organización documental también facilita las verificaciones, conciliaciones y auditorías, además de fortalecer la conservación, trazabilidad y confiabilidad de la información financiera.
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t2/img14.png', alt='', style="width: 420px")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
