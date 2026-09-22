<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Verificación de soportes y registros contables
      p(data-aos="fade-left") La verificación contable contribuye a establecer si la información registrada cuenta con respaldo suficiente y conserva coherencia con las operaciones realizadas por la empresa. Estos componentes delimitan el alcance del proceso y orientan su aplicación antes de elaborar libros, reportes contables o estados financieros:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Propósito de la verificación
                p La verificación permite establecer si la información contable representa adecuadamente las operaciones de la empresa y reúne condiciones para continuar el proceso contable.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Respaldo documental
                p Las operaciones deben vincularse con documentos que permitan comprobar su origen y conservar evidencia suficiente para posteriores procesos de control.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Coherencia contable
                p La información registrada debe mantener correspondencia entre la operación realizada, la documentación disponible y el tratamiento contable aplicado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Calidad de la información
                p Una verificación oportuna reduce el riesgo de trasladar inconsistencias a los libros, reportes contables y estados financieros.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Trazabilidad
                p El proceso debe permitir reconstruir el recorrido de la información desde la operación empresarial hasta su incorporación en los registros contables.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control preventivo
                p La revisión previa fortalece el control interno y facilita la identificación de situaciones que requieren aclaración, ajuste o corrección.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Marco del proceso
                p La verificación debe contribuir a la inalterabilidad, integridad, verificabilidad, seguridad y conservación de la información financiera (Contaduría General de la Nación).
      //- Fin Slideshow
      p(data-aos="fade-left") El presente tema integra fundamentos, relaciones documentales, criterios normativos, revisión contable, errores, correcciones y aplicación práctica.

      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto e importancia de la verificación contable
      p(data-aos="fade-left") La verificación contable permite comprobar que las operaciones registradas cuenten con respaldo documental y mantengan coherencia con los hechos económicos ocurridos. Los siguientes apartados desarrollan el concepto, la finalidad y la importancia de la verificación contable, junto con los elementos que la integran:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Concepto")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Concepto
                p La verificación contable comprueba la coherencia entre hechos económicos, soportes, comprobantes, registros y normas, así como la exactitud de valores, cuentas, débitos y créditos.
          .py-3.py-md-4(titulo="Finalidad")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-md-6
                h4 Finalidad
                p La verificación fortalece la confiabilidad de la información antes de incorporarla en libros y reportes, conforme con los criterios normativos de reconocimiento, medición, revelación y presentación (Contaduría General de la Nación).
          .py-3.py-md-4(titulo="Importancia")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-md-6
                h4 Importancia
                p La verificación previene errores que afectan la información financiera y comprueba la coherencia entre la operación, el soporte y el tratamiento contable aplicado.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La verificación contable comprende ocho elementos que permiten revisar integralmente cada operación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Hecho económico
                            p.text-center La existencia y naturaleza de la operación realizada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Soporte
                            p.text-center El documento que respalda y acredita la operación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Tercero
                            p.text-center La identificación del cliente, proveedor o beneficiario relacionado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Valor
                            p.text-center La correspondencia entre los valores registrados y los soportados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Cuenta contable
                            p.text-center La clasificación de la operación según su naturaleza económica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Impuestos
                            p.text-center La aplicación de las bases, tarifas y retenciones correspondientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Débito y crédito
                            p.text-center La igualdad del asiento y la correcta ubicación de los valores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Periodo
                            p.text-center El reconocimiento de la operación en el periodo contable correspondiente.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t1/img1.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
              .col-lg-5.d-flex
                figure.mb-0.w-100
                  img.h-100.w-100(src='@/assets/curso/temas/t1/img2.png', alt='', style="object-fit: cover;")
              .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4
                p.mb-3 Seguidamente, se expone ejemplo que aplica los elementos de la verificación contable para identificar una clasificación incorrecta:
                p <b>Ejemplo aplicado</b>
                p Una empresa registra una factura de compra por $ 2.500.000 como gasto de papelería, pero al revisar el soporte se identifica que corresponde a compra de mercancía para la venta. La verificación permite identificar que la cuenta utilizada no corresponde a la naturaleza del hecho económico. En este caso, el error no está en la existencia del documento, sino en la interpretación contable de la operación.
                p.mb-0 El ajuste consistiría en reclasificar el valor a inventarios, si corresponde, y dejar evidencia de la corrección realizada. Así se evita que el gasto del periodo quede sobrestimado y que el inventario quede incompleto. La corrección debe conservar trazabilidad, porque la información contable debe poder verificarse posteriormente a partir de soportes, comprobantes y libros.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Relación entre hecho económico, soporte, comprobante y registro
      p(data-aos="fade-left") La información contable se construye mediante una secuencia documental y técnica que permite conservar la trazabilidad de cada operación hasta su presentación en reportes. La siguiente secuencia relaciona cada elemento con su función y permite comprender el recorrido de la información contable.
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Hecho económico
                      p Corresponde a la operación que afecta la situación financiera de la empresa y da origen al proceso contable.
                      p #[b Ejemplo:] compra de mercancía.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_1.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_2.png').img125
                    .col-12.col-lg.text-start
                      h4 Soporte
                      p Es el documento que prueba la operación y proporciona los datos necesarios para respaldar el registro.
                      p #[b Ejemplo:] factura de compra.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Comprobante
                      p Es el documento interno que resume y organiza la información de la operación antes de su incorporación en los registros.
                      p #[b Ejemplo:] comprobante de contabilidad.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_3.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_4.png').img125
                    .col-12.col-lg.text-start
                      h4 Registro
                      p Es el asiento contable mediante el cual se afectan las cuentas correspondientes, según la naturaleza de la operación.
                      p #[b Ejemplo:] débito a inventarios y crédito a proveedores.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Libro o sistema
                      p Es el medio en el que se acumula y organiza la información contable registrada.
                      p #[b Ejemplo:] libro diario o software contable.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_5.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t1/tarjeta04_6.png').img125
                    .col-12.col-lg.text-start
                      h4 Reporte
                      p Es la salida de información que permite revisar los movimientos, saldos y resultados de las operaciones registradas.
                      p #[b Ejemplo:] auxiliar de proveedores o balance de prueba.
            p(data-aos="fade-left") Los comprobantes se elaboran con base en los soportes y respaldan los registros contables. Su relación coherente facilita la verificación y garantiza la integridad de la información. El caso posterior aplica esta secuencia al pago de una obligación:
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img3.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 <b>Ejemplo aplicado</b>
                  br
                  br
                  | Una empresa paga a un proveedor mediante transferencia bancaria. El hecho económico es el pago de una obligación; el soporte puede ser el comprobante bancario y la factura cancelada; el comprobante de contabilidad resume el pago; y el registro contable debita proveedores y acredita bancos.
                  br
                  br
                  | Si la factura aún aparece pendiente, se debe comprobar que el pago esté aplicado a la obligación correcta y asociado con su soporte y comprobante.
            Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Verificación de documentos según guía técnica y normativa
      p(data-aos="fade-left") La verificación documental comprueba que los soportes sean válidos, completos y coherentes con la operación. Además, confirma su integridad, conservación y disponibilidad, tanto en formato físico como electrónico (Superintendencia de Sociedades; DIAN). En la tabla se generan preguntas básicas para revisar documentos soporte antes de validar un registro contable:
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span Verificación documental de operaciones contables
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto documental
                        th(style="width: 60%") Pregunta de control
                        th(style="width: 10%") Cumple
                    tbody
                      tr
                        td Identificación del tercero
                        td ¿El documento identifica al cliente, proveedor o beneficiario?
                        td Sí / No
                      tr
                        td Fecha
                        td ¿La fecha corresponde al periodo registrado?
                        td Sí / No
                      tr
                        td Concepto
                        td ¿La operación está descrita claramente?
                        td Sí / No
                      tr
                        td Valor
                        td ¿El valor coincide con el registro contable?
                        td Sí / No
                      tr
                        td Impuestos
                        td ¿Incluye IVA, retenciones u otros conceptos cuando aplican?
                        td Sí / No
                      tr
                        td Validez
                        td ¿El documento cumple condiciones físicas o electrónicas?
                        td Sí / No
                      tr
                        td Relación con la empresa
                        td ¿La operación pertenece al ente económico?
                        td Sí / No
                      tr
                        td Archivo
                        td ¿El soporte puede consultarse posteriormente?
                        td Sí / No
      //- Fin Tabla
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-7.bg-color-9.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 A continuación, se presenta un ejemplo aplicado del presente tema:
          p <b>Ejemplo aplicado</b>
          p Una factura electrónica de venta se encuentra registrada en contabilidad, pero el archivo digital no se conserva en la carpeta correspondiente ni se encuentra relacionado con el comprobante. Aunque el registro exista, la verificación documental queda incompleta porque no se puede consultar fácilmente el soporte.
          p.mb-0 La acción recomendada es ubicar el documento electrónico, asociarlo al comprobante y conservarlo en el sistema documental para garantizar su trazabilidad y posterior consulta.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img4.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Verificación de registros frente a normas de reconocimiento
      p(data-aos="fade-left") La verificación permite establecer si cada operación fue reconocida en el periodo, valor y cuentas correspondientes, conforme con su naturaleza económica. Los criterios que orientan la revisión del reconocimiento contable y facilitan la identificación de registros que requieren corrección o ajuste son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img5.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Existencia")
                p.mb-2 #[b Pregunta:] ¿La operación ocurrió realmente?
                p.mb-4 #[b Ejemplo:] mercancía efectivamente recibida.
              .row(titulo="Elemento afectado")
                p.mb-2 #[b Pregunta:] ¿Afecta un activo, pasivo, patrimonio, ingreso, costo o gasto?
                p.mb-4 #[b Ejemplo:] aumento de inventarios y proveedores.
              .row(titulo="Momento")
                p.mb-2 #[b Pregunta:] ¿Se registró en el periodo correcto?
                p.mb-4 #[b Ejemplo:] servicio causado en mayo.
              .row(titulo="Valor")
                p.mb-2 #[b Pregunta:] ¿El valor registrado coincide con el soporte?
                p.mb-4 #[b Ejemplo:] valor establecido en la factura.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Naturaleza")
                p.mb-2 #[b Pregunta:] ¿La cuenta corresponde al tipo de operación?
                p.mb-4 #[b Ejemplo:] reconocimiento como activo fijo y no como gasto inmediato.
              .row(titulo="Impuestos")
                p.mb-2 #[b Pregunta:] ¿Se registraron los impuestos y las retenciones aplicables?
                p.mb-4 #[b Ejemplo:] IVA descontable o generado.
              .row(titulo="Soporte")
                p.mb-2 #[b Pregunta:] ¿Existe respaldo documental suficiente?
                p.mb-4 #[b Ejemplo:] factura, contrato o recibo.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img6.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El reconocimiento contable considera la naturaleza, el soporte, el periodo y las cuentas afectadas, no solo el pago o cobro. Acto seguido, se desarrollará un caso que identifica un registro efectuado en un periodo incorrecto:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 <b>Ejemplo aplicado</b>
            br
            br
            | Una empresa recibe una factura de servicios públicos correspondiente a mayo, pero la registra en junio, cuando realiza el pago. Si aplica el principio de causación, el gasto debe reconocerse en mayo, aunque se pague posteriormente.
            br
            br
            | La verificación permite corregir el periodo del registro y evitar alteraciones en los gastos y resultados mensuales.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Revisión de cuentas, débitos, créditos y saldos
      p(data-aos="fade-left") La revisión contable permite comprobar que las cuentas, los movimientos y los saldos correspondan con la naturaleza de cada operación registrada. Los criterios que facilitan la identificación de errores en los asientos contables y de saldos que requieren revisión, ajuste o reclasificación son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img8.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Cuentas contables")
                p.mb-4 Las cuentas utilizadas deben corresponder con la operación y reflejar adecuadamente su naturaleza económica.
              .row(titulo="Débitos y créditos")
                p.mb-4 Los débitos deben ser iguales a los créditos. Además, cada cuenta debe aumentar o disminuir de acuerdo con su naturaleza.
              .row(titulo="Saldos anormales")
                p.mb-4 Un saldo contrario a la naturaleza habitual de la cuenta puede indicar errores, registros incompletos o aplicaciones incorrectas.
              .row(titulo="Verificación documental")
                p.mb-4 Los saldos deben compararse con auxiliares, comprobantes, extractos y demás soportes para confirmar la coherencia de la información registrada.
      //- Fin Accordion 1
      p(data-aos="fade-left") Los registros contables deben cumplir la partida doble y conservar una historia verificable de las operaciones (Superintendencia de Sociedades). A continuación, se presentan señales de posibles errores que requieren revisión:
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Revisión de cuentas y saldos contables
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Situación identificada
                        th(style="width: 35%") Posible causa
                        th(style="width: 35%") Revisión recomendada
                    tbody
                      tr
                        td Débitos y créditos no coinciden.
                        td Error en el asiento.
                        td Verificar sumas y cuentas.
                      tr
                        td Banco con saldo crédito.
                        td Sobregiro o registro incorrecto.
                        td Revisar extracto y conciliación.
                      tr
                        td Proveedores con saldo débito.
                        td Pago mal aplicado o anticipo.
                        td Revisar facturas y egresos.
                      tr
                        td Cliente con saldo crédito.
                        td Anticipo o recaudo no aplicado.
                        td Revisar recibos de caja.
                      tr
                        td Gasto registrado como activo.
                        td Clasificación incorrecta.
                        td Revisar naturaleza de la operación.
                      tr
                        td Ingreso registrado como pasivo.
                        td Error de reconocimiento.
                        td Verificar soporte y concepto.
      //- Fin Tabla
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-7.bg-color-10.d-flex.flex-column.justify-content-center.p-3
          p.mb-3 El siguiente caso permite identificar una cuenta incorrecta y sus efectos en la información contable:
          p <b>Ejemplo aplicado</b>
          p Una empresa registra un pago a un proveedor debitando gastos y acreditando bancos. Sin embargo, el pago correspondía a una factura ya reconocida como cuenta por pagar.
          p.mb-0 El registro correcto debía debitar proveedores y acreditar bancos. La corrección evita duplicar el gasto, elimina obligaciones ya pagadas y permite presentar saldos coherentes.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img10.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema1.6
      .row
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Identificación de errores frecuentes en los registros contables
      p(data-aos="fade-left") Los errores contables pueden afectar la confiabilidad de los reportes, los impuestos, las cuentas por cobrar, las obligaciones y los resultados empresariales. A partir de esta información, se estudian situaciones que relacionan los errores más frecuentes con sus efectos y las acciones necesarias para identificarlos y corregirlos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Factura duplicada
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] registrar dos veces una factura.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] aumenta gastos u obligaciones.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] comprobar consecutivos y proveedor.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Compra omitida
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] omitir una compra a crédito.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] subestima pasivos e inventarios.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] verificar facturas pendientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Periodo incorrecto
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] registrar la operación en un periodo equivocado.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] altera los reportes mensuales.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] confirmar la fecha de causación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cuenta incorrecta
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] utilizar una cuenta que no corresponde.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] distorsiona activos, pasivos, gastos o ingresos.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] comprobar la naturaleza de la operación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Impuestos omitidos
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] omitir el IVA o las retenciones aplicables.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] afecta las obligaciones tributarias.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] comprobar la base, la tarifa y el soporte.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Recaudo duplicado
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] registrar un recaudo como una nueva venta.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] duplica los ingresos.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] confirmar si corresponde a cartera.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Soporte sin asociar
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Error:] no relacionar el soporte con el comprobante.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Efecto:] debilita la trazabilidad.
                  li.d-flex
                    .fas.fa-magnifying-glass-dollar.me-3
                    span #[b Revisión:] asociar el documento correspondiente.
      //- Fin Slideshow
      p(data-aos="fade-left") La revisión periódica de soportes, registros y saldos permite identificar errores y fortalecer la confiabilidad de los reportes. El siguiente caso ejemplifica un recaudo registrado como una nueva venta:
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img11.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Seguidamente, se expone ejemplo que aplica los elementos de la verificación contable para identificar una clasificación incorrecta:          
          p Una empresa recibe $ 1.000.000 de un cliente por una factura pendiente, pero registra el recaudo como una nueva venta. El error duplica el ingreso y mantiene la cuenta por cobrar.
          p.mb-0 La corrección consiste en reversar el ingreso incorrecto, disminuir la cuenta por cobrar y confirmar que el recibo de caja esté asociado con la factura correspondiente.
      p(data-aos="fade-left") El siguiente pódcast complementa el tema mediante un caso aplicado sobre errores contables, sus efectos y las verificaciones necesarias para prevenir inconsistencias.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#8de321") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold  Errores contables que alteran la información financiera
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/imgpodcast.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema1.7
      .row
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Ajustes y correcciones básicas en la información contable
      p(data-aos="fade-left") Los ajustes y correcciones permiten subsanar errores u omisiones, conservar la trazabilidad y representar adecuadamente los hechos económicos registrados. Las siguientes acciones permiten corregir inconsistencias contables según el tipo de error identificado y sus efectos sobre la información registrada:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img12.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Reclasificación")
                p.mb-2 Traslada un valor entre cuentas cuando la clasificación inicial no corresponde con la naturaleza de la operación.
                p.mb-4 #[b Ejemplo:] trasladar una compra de inventarios a gastos de papelería.
              .row(titulo="Anulación o reversión")
                p.mb-2 Elimina el efecto de un registro duplicado, equivocado o que no corresponde con una operación real.
                p.mb-4 #[b Ejemplo:] reversar una factura registrada dos veces.
              .row(titulo="Registro faltante")
                p.mb-2 Incorpora una operación que fue omitida durante el proceso contable.
                p.mb-4 #[b Ejemplo:] registrar una factura de compra pendiente.
              .row(titulo="Ajuste de impuestos")
                p.mb-2 Corrige impuestos o retenciones omitidos, registrados incorrectamente o calculados sobre una base equivocada.
                p.mb-4 #[b Ejemplo:] reconocer el IVA descontable correspondiente.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Corrección de tercero")
                p.mb-2 Asocia el movimiento con el cliente, proveedor o beneficiario correcto.
                p.mb-4 #[b Ejemplo:] trasladar un pago al proveedor correspondiente.
              .row(titulo="Ajuste de periodo")
                p.mb-2 Traslada la operación al periodo contable en el cual debió ser reconocida.
                p.mb-4 #[b Ejemplo:] registrar un gasto en el mes de causación.
              .row(titulo="Corrección de recaudo")
                p.mb-2 Corrige un recaudo aplicado como venta o asociado con una cuenta por cobrar equivocada.
                p.mb-4 #[b Ejemplo:] disminuir la cartera y reversar el ingreso duplicado.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img13.png", alt="").img400.m-auto
            //- Fin Accordion 2
      p(data-aos="fade-left") Toda corrección debe estar soportada, autorizada y explicada, conservando la trazabilidad, integridad y verificabilidad de la información financiera. El caso posterior aplica una reclasificación contable:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img14.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo aplicado</b>
            br
            br
            | Una factura de papelería por $ 450.000 fue registrada en inventarios. Sin embargo, los elementos se adquirieron para uso administrativo y no para la venta.
            br
            br
            | La corrección consiste en trasladar el valor de inventarios a gastos de papelería. Así, se evita sobrestimar el inventario y el gasto refleja correctamente el consumo realizado.
      Separador
      //- Inicio Tema1.8
      .row
        #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.8 Ejemplo aplicado de verificación de soportes y registros
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-3
          p.mb-3 La aplicación conjunta de los criterios de verificación permite detectar inconsistencias y establecer las correcciones necesarias antes de generar reportes contables. El presen caso relaciona las operaciones registradas con sus soportes, los hallazgos identificados y las acciones de corrección correspondientes:
          p <b>Ejemplo aplicado</b>
          p.mb-0 La empresa Comercial La Estrella S.A.S. presenta las siguientes operaciones registradas durante el mes:
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img15.png', alt='', style="object-fit: cover;")
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Registros sujetos a verificación
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 40%") Operación registrada
                        th(style="width: 20%") Soporte revisado
                        th(style="width: 20%") Hallazgo
                        th(style="width: 20%") Acción sugerida
                    tbody
                      tr
                        td Compra de mercancía registrada como gasto.
                        td Factura de proveedor.
                        td La mercancía era para la venta.
                        td Reclasificar a inventarios.
                      tr
                        td Recaudo de cliente registrado como venta.
                        td Recibo de caja.
                        td Correspondía a factura pendiente.
                        td Reclasificar contra cuentas por cobrar.
                      tr
                        td Factura de servicios sin IVA registrado.
                        td Factura electrónica.
                        td Incluía IVA del 19 %.
                        td Ajustar impuesto descontable si aplica.
                      tr
                        td Pago a proveedor aplicado a tercero equivocado.
                        td Comprobante bancario.
                        td El beneficiario no coincide con el registro.
                        td Corregir tercero y cuenta auxiliar.
                      tr
                        td Factura registrada dos veces.
                        td Dos comprobantes con mismo consecutivo.
                        td Duplicidad
                        td Reversar el registro duplicado.
                      tr
                        td Compra de equipo registrada como gasto.
                        td Factura de compra.
                        td Es activo para uso de varios periodos.
                        td Reclasificar como activo fijo.
      //- Fin Tabla
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img16.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-3 La interpretación del caso es: 
            br
            br
            | <b>Ejemplo aplicado</b>
            br
            br
            | <b>Interpretación:</b>    La existencia de un soporte no garantiza que el registro sea correcto. También se deben comprobar la naturaleza de la operación, el tercero, el valor, los impuestos, el periodo y las cuentas afectadas.
            br
            br
            | Las correcciones propuestas fortalecen la coherencia, confiabilidad y trazabilidad de la información antes de elaborar libros, reportes y estados financieros.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
