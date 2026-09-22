<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Control, seguridad, archivo y buenas prácticas en la información contable
      p(data-aos="fade-left") El control, la seguridad, el archivo y las buenas prácticas protegen la calidad y disponibilidad de la información contable. Incluyen la revisión de registros y reportes, la prevención de errores y accesos no autorizados, la conservación documental, la ergonomía, el manejo ambiental de residuos y la aplicación de la seguridad y salud en el trabajo, conforme al Decreto 1072 de 2015. 
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Revisión integral antes de generar reportes contables
      p(data-aos="fade-left") La revisión integral verifica que la información contable esté completa, respaldada y organizada antes de generar reportes. Incluye la comprobación de soportes, registros, saldos e impuestos para corregir posibles errores. La siguiente tabla presenta los principales aspectos por revisar:
      //- Tabla 11. Revisión integral antes del reporte
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 11.
                span Revisión integral antes del reporte
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 25%") Aspecto por revisar
                      th(style="width: 40%") Pregunta de control
                      th(style="width: 35%") Riesgo si no se revisa
                  tbody
                    tr
                      td Soportes
                      td ¿Todos los registros tienen respaldo?
                      td Información sin evidencia.
                    tr
                      td Comprobantes
                      td ¿Los asientos están completos?
                      td Registros incompletos.
                    tr
                      td Auxiliares
                      td ¿Coinciden con el mayor?
                      td Diferencias en saldos.
                    tr
                      td Bancos
                      td ¿Existe conciliación bancaria?
                      td Saldo de efectivo incorrecto.
                    tr
                      td Cartera
                      td ¿Los recaudos fueron aplicados?
                      td Clientes con saldos errados.
                    tr
                      td Proveedores
                      td ¿Los pagos fueron cruzados?
                      td Obligaciones mal presentadas.
                    tr
                      td Impuestos
                      td ¿IVA y retenciones están clasificados?
                      td Errores tributarios.
                    tr
                      td Inventarios
                      td ¿Hay coherencia con existencias?
                      td Costos o activos incorrectos.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 A continuación, se presenta un ejemplo aplicado:
          br
          br
          p.mb-0 <b>Ejemplo aplicado</b>
          br
          br
          | Una empresa va a generar sus reportes mensuales, pero antes de hacerlo revisa que todas las facturas de compra estén registradas, que los pagos estén cruzados con proveedores, que los recaudos estén aplicados a los clientes correspondientes y que los bancos estén conciliados. Durante la revisión encuentra una factura de compra pendiente por registrar y un recaudo aplicado a un cliente equivocado.
          br
          br
          | La acción recomendada es registrar la factura omitida, corregir la aplicación del recaudo y volver a generar los reportes auxiliares antes de emitir el balance de prueba. Esta revisión evita que los estados financieros se elaboren con saldos incompletos o inconsistentes.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Coherencia entre soportes, comprobantes, libros y reportes
      p(data-aos="fade-left") La coherencia contable exige que los soportes, comprobantes, libros, auxiliares y reportes mantengan relación entre sí. Esto permite reconstruir cada operación, verificar sus saldos y corregir inconsistencias antes de presentar los estados financieros. La tabla presenta relaciones que deben comprobarse para asegurar coherencia en la información contable:
      //- Tabla 12. Coherencia entre documentos contables
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 12.
                span Coherencia entre documentos contables
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 30%") Relación por verificar
                      th(style="width: 40%") Qué debe comprobarse
                      th(style="width: 30%") Ejemplo
                  tbody
                    tr
                      td Soporte – comprobante
                      td Que el soporte esté asociado al asiento
                      td Factura vinculada al comprobante.
                    tr
                      td Comprobante – libro diario
                      td Que el asiento esté registrado por fecha
                      td Comprobante registrado en el periodo.
                    tr
                      td Libro mayor – auxiliar
                      td Que el saldo general coincida con el detalle
                      td Clientes mayor igual a auxiliares.
                    tr
                      td Banco – extracto
                      td Que los movimientos coincidan
                      td Conciliación bancaria.
                    tr
                      td Inventario – conteo físico
                      td Que las existencias sean coherentes
                      td Kardex frente a inventario físico.
                    tr
                      td Reporte – estado financiero
                      td Que los saldos se presenten correctamente
                      td Balance de prueba frente a estado financiero.

      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t5/img2.png', alt='', style="width: 550px")
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-10.p-3(data-aos="fade-left")
          p Este caso presenta una inconsistencia entre una factura, el comprobante y los reportes:
          p <b>Ejemplo aplicado</b>
          p Una factura de venta por $ 2.000.000 aparece en el auxiliar de clientes, pero al revisar el comprobante no se encuentra asociado el soporte digital de la factura. Además, el reporte de cartera refleja el saldo pendiente, pero el archivo documental no permite ubicar fácilmente el documento que respalda la operación.
          p La acción recomendada es asociar la factura electrónica al comprobante contable, verificar que el registro esté en el periodo correcto y confirmar que el saldo del cliente coincida con el auxiliar. Así se conserva la coherencia entre soporte, comprobante, libro y reporte.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Controles básicos para la calidad de la información contable
      p(data-aos="fade-left") Los controles básicos previenen errores y protegen la calidad de la información contable mediante la revisión de documentos, saldos, pagos y accesos. Su aplicación periódica permite detectar inconsistencias antes de generar reportes. A continuación, se presentan algunos controles básicos, su propósito y un ejemplo de aplicación:
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
                          img(src='@/assets/curso/temas/t5/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Revisión de soportes
                            p.mb-2 #[b Propósito:] evitar registros sin evidencia documental.
                            p.mb-0 #[b Ejemplo:] verificar la factura antes de registrar la operación.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Control de consecutivos
                            p.mb-2 #[b Propósito:] detectar documentos faltantes o duplicados.
                            p.mb-0 #[b Ejemplo:] revisar la numeración de los comprobantes.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Aprobación de pagos
                            p.mb-2 #[b Propósito:] prevenir pagos no autorizados.
                            p.mb-0 #[b Ejemplo:] exigir firma o autorización previa.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Conciliación bancaria
                            p.mb-2 #[b Propósito:] comparar los movimientos bancarios con los registros contables.
                            p.mb-0 #[b Ejemplo:] revisar mensualmente el extracto bancario.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Validación de terceros
                            p.mb-2 #[b Propósito:] evitar errores en la identificación de clientes o proveedores.
                            p.mb-0 #[b Ejemplo:] confirmar el NIT y el nombre o razón social.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Copias de seguridad
                            p.mb-2 #[b Propósito:] proteger la información contable almacenada digitalmente.
                            p.mb-0 #[b Ejemplo:] realizar un respaldo semanal.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Restricción de accesos
                            p.mb-2 #[b Propósito:] impedir modificaciones realizadas por personas no autorizadas.
                            p.mb-0 #[b Ejemplo:] asignar permisos según las funciones de cada usuario.

                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Revisión de saldos
                            p.mb-2 #[b Propósito:] identificar inconsistencias en las cuentas.
                            p.mb-0 #[b Ejemplo:] analizar cuentas que presentan saldos contrarios a su naturaleza.

                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img3.png', style="width: 350px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            .row.mb-5.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t5/img4.png', alt='', style="width: 470px")
              .col-12.col-lg-7.order-2.order-lg-1.bg-color-2.p-4(data-aos="fade-left")
                p Los controles deben aplicarse de manera preventiva y periódica para detectar errores antes de generar información definitiva. Este caso presenta la importancia de controlar los documentos registrados:
                p <b>Ejemplo aplicado</b>
                p En una empresa se detecta que dos personas registran comprobantes sin revisar previamente si la factura ya fue ingresada al sistema. Como resultado, una misma factura de proveedor quedó registrada dos veces, aumentando indebidamente el gasto y la cuenta por pagar.
                p La acción recomendada es implementar un control de consecutivos y una revisión previa por número de factura, proveedor y fecha antes de guardar el comprobante. Este control permite reducir duplicidades y mejorar la calidad de la información contable.
            Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Seguridad y salud en el trabajo aplicada al archivo contable
      p(data-aos="fade-left") Las labores contables y de archivo pueden generar riesgos físicos y ergonómicos. Por ello, deben aplicarse medidas preventivas de seguridad y salud en el trabajo. La siguiente tabla relaciona las principales actividades, riesgos y medidas de prevención:
      //- Tabla 13. Riesgos en labores contables y de archivo
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 13.
                span Riesgos en labores contables y de archivo
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 30%") Actividad
                      th(style="width: 35%") Riesgo posible
                      th(style="width: 35%") Medida preventiva
                  tbody
                    tr
                      td Digitación prolongada.
                      td Fatiga visual o muscular.
                      td Pausas activas y ajuste de pantalla.
                    tr
                      td Archivo físico.
                      td Sobrecarga por cajas pesadas.
                      td Manipulación adecuada y apoyo mecánico.
                    tr
                      td Consulta de documentos.
                      td Caídas o golpes.
                      td Pasillos libres y estanterías seguras.
                    tr
                      td Trabajo sentado.
                      td Dolor lumbar o cervical.
                      td Silla adecuada y postura correcta.
                    tr
                      td Revisión documental extensa.
                      td Cansancio visual.
                      td Iluminación suficiente.
                    tr
                      td Manejo de papel.
                      td Cortes o acumulación de polvo.
                      td Orden y elementos de protección si aplica.
            p(data-aos="fade-left") La prevención de riesgos requiere mantener espacios organizados y aplicar prácticas seguras durante la manipulación de documentos. Este caso presenta una situación frecuente en un archivo contable:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img5.png')})` }")
        .bloque-texto-g__texto.p-4          
          p.mb-3 <b>Ejemplo aplicado</b>
          br
          br
          | El área contable tiene varias cajas de archivo ubicadas en el piso y en zonas de paso. Una funcionaria debe levantar cajas pesadas para buscar documentos de años anteriores, lo que genera riesgo de caída, golpes o lesiones musculares.
          br
          br
          | La acción recomendada es organizar las cajas en estanterías seguras, rotularlas por año y tipo de documento, mantener libres los pasillos y evitar la manipulación individual de cargas pesadas. Esta medida mejora la seguridad en el archivo contable y facilita la consulta documental.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Ergonomía en labores de digitación, archivo y revisión documental
      p(data-aos="fade-left") La ergonomía adapta las condiciones de trabajo a las capacidades de la persona para prevenir molestias, fatiga y lesiones. En las labores contables comprende la postura, el mobiliario, la iluminación, los equipos y la organización del espacio. A continuación, se presentan recomendaciones básicas para reducir riesgos ergonómicos en actividades contables:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pantalla
                p Ubicarla al frente y a una altura adecuada para evitar inclinaciones constantes de la cabeza.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Silla
                p Ajustar la altura para apoyar la espalda y mantener una postura cómoda.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pies
                p Mantenerlos apoyados en el suelo o en un reposapiés.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Teclado y mouse
                p Situarlos cerca del cuerpo para reducir la tensión en brazos, hombros y muñecas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Documentos
                p Colocarlos en un soporte cercano a la pantalla para evitar movimientos repetitivos del cuello.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Iluminación
                p Mantenerla uniforme y suficiente, sin reflejos ni contrastes excesivos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Espacio de trabajo
                p Conservar los elementos organizados y al alcance para evitar movimientos innecesarios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pausas activas
                p Realizar descansos breves y cambios de postura para disminuir la fatiga muscular.
      //- Fin Slideshow
      p(data-aos="fade-left") La adecuada organización del puesto de trabajo contribuye a prevenir molestias y mantener un desempeño eficiente. Este caso presenta la aplicación de algunas recomendaciones ergonómicas:
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img6.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4
          p <b>Ejemplo aplicado</b>
          p Una auxiliar contable realiza digitación durante varias horas continuas, con la pantalla ubicada de lado y los documentos físicos sobre sus piernas. Al final de la jornada presenta cansancio visual, dolor de cuello y molestias en la espalda.
          p La acción recomendada es ubicar la pantalla al frente, ajustar la silla, mantener los documentos en un soporte cercano al monitor, realizar pausas activas y alternar actividades de digitación con revisión documental. Estas prácticas ayudan a disminuir la fatiga y mejoran las condiciones de trabajo.
      Separador
      //- Inicio Tema5.6
      .row
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.6 Manejo ambiental de residuos de papelería
      p(data-aos="fade-left") El manejo ambiental de la papelería comprende la reducción, reutilización, separación y disposición adecuada de los residuos generados en las actividades contables y administrativas. Estas prácticas deben aplicarse sin afectar la confidencialidad ni la conservación de los documentos. Seguidamente, se exponen prácticas para disminuir el consumo de papel y gestionar adecuadamente los residuos:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Línea de tiempo / PasosA
            .row.justify-content-center
              .col-lg-9
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Reducir impresiones
                      p Utilizar documentos digitales cuando sea posible e imprimir únicamente la información necesaria. Antes de imprimir, se debe comprobar el contenido para evitar copias equivocadas o repetidas.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_1.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_2.png').img125
                    .col-12.col-lg.text-start
                      h4 Reutilizar papel
                      p Aprovechar las hojas impresas por una sola cara como borradores, siempre que no contengan información confidencial, datos personales o documentos que deban conservarse.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Separar residuos
                      p Clasificar el papel, el cartón y los residuos ordinarios en los recipientes correspondientes, de acuerdo con los lineamientos ambientales establecidos por la organización.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_3.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_4.png').img125
                    .col-12.col-lg.text-start
                      h4 Proteger la información
                      p Destruir de manera segura los documentos con información confidencial cuando haya finalizado su tiempo de conservación. Estos documentos no deben depositarse completos en recipientes de reciclaje.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Digitalizar soportes
                      p Conservar en medios digitales los documentos cuya consulta no requiera el soporte físico, siempre que se garanticen su autenticidad, seguridad, disponibilidad y respaldo.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_5.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_6.png').img125
                    .col-12.col-lg.text-start
                      h4 Evitar duplicados
                      p Imprimir una sola versión controlada, conservar la versión oficial.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Depurar archivo
                      p Retirar copias innecesarias, sin eliminar documentos vigentes.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t5/tarjeta03_7.png').img125
            //- Fin Línea de tiempo
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 Estas prácticas permiten reducir el impacto ambiental sin comprometer la seguridad ni la conservación documental. Este caso presenta su aplicación en un área contable:
          .bg-color-9.p-3
            p.mb-3 <b>Ejemplo aplicado</b>
            p Una empresa imprime todos los reportes contables mensuales, aunque muchos solo se consultan una vez y luego se descartan. Además, mezcla hojas reutilizables con documentos confidenciales y residuos ordinarios.
            p La acción recomendada es imprimir únicamente los reportes necesarios, conservar en medio digital los documentos de consulta, separar el papel aprovechable, proteger la información confidencial y evitar la acumulación innecesaria de copias. Esta práctica permite reducir residuos sin afectar la conservación de documentos contables importantes.
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t5/img7.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;")
      Separador
      //- Inicio Tema5.7
      .row
        #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.7 Buenas prácticas para conservar y presentar información contable
      p(data-aos="fade-left") Las buenas prácticas permiten conservar la información contable de manera ordenada, segura y disponible. También facilitan la elaboración de reportes comprensibles, verificables y útiles para la toma de decisiones. A continuación, se presentan recomendaciones para conservar los documentos y presentar adecuadamente la información contable:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img8.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Clasificación por periodo")
                p.mb-2 Organizar los documentos por periodo, tipo, tercero o proceso para facilitar su ubicación y consulta.
                p.mb-4 #[b Ejemplo:] separar las facturas de compra por año y mes.
              .row(titulo="Identificación de archivos")
                p.mb-2 Asignar nombres uniformes que incluyan datos como la fecha, el tipo de documento, el tercero y la versión.
                p.mb-4 #[b Ejemplo:] 2026-06_BalancePrueba_V1_Contabilidad.
              .row(titulo="Asociación de soportes")
                p.mb-2 Relacionar cada comprobante con la factura, recibo, extracto u otro documento que respalde la operación.
                p.mb-4 #[b Ejemplo:] vincular digitalmente una factura con su comprobante contable.
              .row(titulo="Copias de seguridad")
                p.mb-2 Realizar respaldos periódicos de los archivos y almacenarlos en medios seguros.
                p.mb-4 #[b Ejemplo:] generar una copia semanal en un servidor autorizado.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Control de accesos")
                p.mb-2 Asignar permisos según las responsabilidades de cada usuario para evitar consultas o modificaciones no autorizadas.
                p.mb-4 #[b Ejemplo:] permitir la edición únicamente al personal contable responsable.
              .row(titulo="Revisión antes del cierre")
                p.mb-2 Validar saldos, auxiliares, soportes y ajustes antes de cerrar el periodo contable.
                p.mb-4 #[b Ejemplo:] comprobar que el saldo de proveedores coincida con sus auxiliares.
              .row(titulo="Presentación de reportes")
                p.mb-2 Incluir el periodo, la fecha de elaboración, las cuentas, los saldos, las observaciones y el responsable del reporte.
                p.mb-4 #[b Ejemplo:] presentar un balance de prueba con encabezado, fecha de corte y notas aclaratorias.
              .row(titulo="Control de versiones")
                p.mb-2 Identificar las modificaciones realizadas para evitar el uso de archivos desactualizados.
                p.mb-4 #[b Ejemplo:] diferenciar las versiones como V1, V2 y versión aprobada.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img9.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Estas prácticas fortalecen la conservación, trazabilidad y comprensión de la información contable. Este caso presenta su aplicación en la gestión de reportes:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo aplicado</b>
          br
          br
          | Una empresa genera reportes contables, pero los guarda con nombres como “reporte final”, “balance nuevo” o “archivo corregido”. Cuando se requiere consultar un reporte anterior, no es posible identificar fácilmente el periodo, la versión ni el responsable de elaboración.
          br
          br
          | La acción recomendada es establecer una nomenclatura uniforme, por ejemplo: “2026-06_BalancePrueba_V1_Contabilidad” o “2026-06_AuxiliarProveedores_Revisado”. También se recomienda incluir fecha, responsable y observaciones relevantes en cada reporte. Esto facilita la consulta, reduce confusiones y mejora la presentación de la información contable.
      Separador
      //- Inicio Tema5.8
      .row
        #t_5_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.8 Caso práctico integrador de verificación, libros y reportes
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 El cierre contable exige verificar soportes, comprobantes, libros, auxiliares y saldos antes de generar los reportes. Este caso integra controles contables, documentales, ambientales y de seguridad:
          .bg-color-8.p-3
            p.mb-3 <b>Caso práctico</b>
            p La empresa Comercial La Esperanza S.A.S. se prepara para generar sus reportes mensuales. Antes de emitirlos, realiza una revisión integral de soportes, comprobantes, libros, auxiliares y estados financieros preliminares. Durante la revisión encuentra diferencias en bancos, facturas sin soporte digital, un pago aplicado al proveedor equivocado y gastos de papelería duplicados. La siguiente tabla presenta hallazgos, riesgos y acciones de control en un cierre contable mensual:
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t5/img11.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;")
      //- Tabla 14. Caso práctico integrador
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 14.
                span Caso práctico integrador
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 33%") Hallazgo
                      th(style="width: 33%") Riesgo
                      th(style="width: 34%") Acción de control
                  tbody
                    tr
                      td Banco no coincide con extracto.
                      td Saldo de efectivo incorrecto.
                      td Realizar conciliación bancaria.
                    tr
                      td Facturas sin soporte digital.
                      td Falta de evidencia documental.
                      td Solicitar y archivar documentos.
                    tr
                      td Pago aplicado a proveedor equivocado.
                      td Saldo incorrecto en cuentas por pagar.
                      td Reclasificar pago.
                    tr
                      td Gasto duplicado.
                      td Utilidad subestimada.
                      td Reversar comprobante duplicado.
                    tr
                      td Archivo físico desordenado.
                      td Dificultad de consulta.
                      td Clasificar por periodo y tipo.
                    tr
                      td Documentos impresos innecesarios.
                      td Acumulación de papelería.
                      td Digitalizar y controlar impresiones.
                    tr
                      td Jornada extensa de digitación.
                      td Fatiga visual y muscular.
                      td Programar pausas activas.
            .row.align-items-center.mb-4
              .col-12.col-lg-7(data-aos="fade-left")
                .p-2.mb-1
                  p.mb-0 La interpretación del caso es la siguiente:
                .bg-color-10.p-3
                  p.mb-3 <b>Interpretación: </b>El caso demuestra que el cierre contable no consiste únicamente en generar reportes desde un software. También requiere comprobar la coherencia entre soportes, comprobantes, libros, auxiliares y saldos, además de proteger y organizar los documentos.
                  p Las acciones aplicadas permiten corregir los registros, fortalecer la trazabilidad y prevenir errores en los estados financieros. Asimismo, la digitalización, el uso responsable del papel y las medidas ergonómicas favorecen una gestión contable segura, ordenada y responsable. 
                  p Después de realizar los ajustes, la empresa genera nuevamente los auxiliares y el balance de prueba. Al comprobar la correspondencia de los saldos, puede elaborar sus estados financieros con información confiable.
              .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0
                  img.mx-auto(src="@/assets/curso/temas/t5/img12.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;")
            p(data-aos="fade-left") La revisión integral permite detectar inconsistencias, corregir registros y garantizar la coherencia entre los documentos, libros y reportes. Su aplicación fortalece la confiabilidad de la información contable y promueve prácticas adecuadas de archivo, seguridad, ergonomía y manejo ambiental.
</template>

<script>
export default {
  name: 'Tema5',
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
