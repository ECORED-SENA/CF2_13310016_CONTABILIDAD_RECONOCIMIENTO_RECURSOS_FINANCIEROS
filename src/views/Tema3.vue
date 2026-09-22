<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Libros contables y comprobantes
      p(data-aos="fade-left") Los comprobantes reúnen la información de los hechos económicos, mientras que los libros contables organizan y acumulan sus registros. Ambos permiten controlar las operaciones y respaldar la elaboración de reportes financieros. 
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Concepto de libros contables
      p(data-aos="fade-left") Los libros contables son registros organizados que acumulan las operaciones económicas de una empresa y permiten consultar sus movimientos y saldos. Las funciones que permiten comprender la utilidad de los libros contables en el registro, control y consulta de la información financiera son:
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
                          img(src='@/assets/curso/temas/t3/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registrar operaciones
                            p.mb-2 Acumulan los hechos económicos reconocidos contablemente.
                            p.mb-0 #[b Ejemplo:] compras, ventas, pagos y recaudos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Consultar información
                            p.mb-2 Permiten revisar los movimientos y saldos de las cuentas.
                            p.mb-0 #[b Ejemplo:] consulta de obligaciones con proveedores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Controlar recursos
                            p.mb-2 Facilitan el seguimiento de los activos, pasivos, ingresos y gastos.
                            p.mb-0 #[b Ejemplo:] control de bancos e inventarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Preparar reportes
                            p.mb-2 Sirven de base para elaborar informes y estados financieros.
                            p.mb-0 #[b Ejemplo:] balance de prueba.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Verificar registros
                            p.mb-2 Permiten comparar soportes, comprobantes, movimientos y cuentas.
                            p.mb-0 #[b Ejemplo:] cruce entre una factura y su registro contable.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Conservar la trazabilidad
                            p.mb-2 Ayudan a reconstruir la historia contable de una operación.
                            p.mb-0 #[b Ejemplo:] consulta de una venta a crédito.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t3/img1.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Los libros pueden llevarse en medios físicos o electrónicos, siempre que permitan conservar, consultar y verificar la información. 
      .row.justify-content-center.align-items-stretch.mb-2(data-aos="fade-right")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-4
          p.mb-3 Este caso presenta su aplicación en el control de una obligación:
          p <b>Ejemplo aplicado</b>
          p.mb-3 Una empresa necesita determinar cuánto le debe a un proveedor. Para ello, consulta las facturas de compra, los pagos realizados y los saldos pendientes registrados en los libros y auxiliares.
          p.mb-0 Si la información está actualizada y relacionada con los soportes, puede establecer correctamente el saldo por pagar. En caso contrario, podría tomar decisiones equivocadas sobre pagos o disponibilidad de efectivo.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img2.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Clasificación de los libros contables
      p(data-aos="fade-left") Los libros contables se clasifican según la forma en que organizan y presentan las operaciones, los movimientos, los saldos y demás información de la empresa. Los tipos de libros y reportes que cumplen funciones específicas dentro del registro, control y consulta de la información contable son:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Libro diario")
                p.mb-2 Registra cronológicamente las operaciones realizadas por la empresa.
                p.mb-4 #[b Ejemplo:] asientos correspondientes a compras, ventas, pagos y recaudos.
              .row(titulo="Libro mayor")
                p.mb-2 Agrupa los movimientos según las cuentas contables y permite establecer sus saldos.
                p.mb-4 #[b Ejemplo:] movimientos de bancos, proveedores, ingresos o gastos.
              .row(titulo="Libros auxiliares")
                p.mb-2 Detallan la información relacionada con cuentas, terceros o conceptos específicos.
                p.mb-4 #[b Ejemplo:] auxiliares de clientes, proveedores, bancos o inventarios.
              .row(titulo="Libro de inventarios")
                p.mb-2 Relaciona las existencias, los bienes y demás recursos de la empresa.
                p.mb-4 #[b Ejemplo:] inventario de mercancías disponible para la venta.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Libro de actas")
                p.mb-2 Registra las decisiones adoptadas por los órganos de dirección de la empresa.
                p.mb-4 #[b Ejemplo:] actas de asamblea de accionistas o junta de socios.
              .row(titulo="Libro de socios o accionistas")
                p.mb-2 Controla la identificación y participación de los socios o accionistas.
                p.mb-4 #[b Ejemplo:] aportes, acciones o cuotas sociales.
              .row(titulo="Reportes del software contable")
                p.mb-2 Consolidan electrónicamente la información registrada y permiten efectuar consultas específicas.
                p.mb-4 #[b Ejemplo:] balance de prueba, auxiliares y comprobantes.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img4.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Cada libro organiza la información con una finalidad diferente. El caso siguiente explica cómo se complementan para consultar una operación o una cuenta:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img5.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4          
          p <b>Ejemplo aplicado</b>
          p Una empresa registra diariamente sus operaciones de compra y venta en el software contable. El sistema permite generar un libro diario con los asientos del mes, un libro mayor con los movimientos por cuenta y auxiliares por cada cliente o proveedor.
          p.mb-0 Esta clasificación facilita la revisión. Si se requiere analizar una cuenta por cobrar, se consulta el auxiliar del cliente; si se requiere revisar el comportamiento de una cuenta contable, se consulta el libro mayor; y si se necesita revisar el orden en que ocurrieron las operaciones, se consulta el libro diario.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Libro diario, libro mayor y libros auxiliares
      p(data-aos="fade-left") El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos y saldos por cuenta, y los auxiliares detallan la información por tercero, documento o concepto. Su relación permite verificar los registros desde una perspectiva general hasta un nivel específico. La tabla siguiente compara los libros más utilizados para organizar la información contable:
      //- Tabla de Diferencias entre Libros Contables
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-12.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7.
                span Diferencia entre libro diario, libro mayor y libros auxiliares
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 20%") Libro
                      th(style="width: 25%") Forma de organización
                      th(style="width: 30%") Utilidad principal
                      th(style="width: 25%") Ejemplo
                  tbody
                    tr
                      td #[b Libro diario]
                      td Por fecha de operación.
                      td Revisar el orden cronológico de los registros.
                      td Asiento de compra del 5 de mayo.
                    tr
                      td #[b Libro mayor]
                      td Por cuenta contable
                      td Revisar movimientos y saldos de cada cuenta.
                      td Movimiento de bancos.
                    tr
                      td #[b Libro auxiliar]
                      td Por tercero, documento o detalle.
                      td Revisar información específica.
                      td Saldo de un proveedor.
                    tr
                      td #[b Reporte de comprobantes]
                      td Por número de comprobante.
                      td Revisar el registro técnico de una operación.
                      td Comprobante de egreso.
                    tr
                      td #[b Balance de prueba]
                      td Por cuentas y saldos.
                      td Verificar saldos acumulados.
                      td Débitos, créditos y saldo final.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El siguiente caso aplica esta relación a una venta a crédito:
          br
          br
          p.mb-0 <b>Ejemplo aplicado</b>
          br
          br
          | Una empresa registra una venta a crédito a un cliente. En el libro diario aparece el asiento en la fecha de la venta; en el libro mayor se acumula el movimiento en las cuentas de ingresos, IVA generado y cuentas por cobrar; y en el auxiliar de clientes se identifica el saldo específico que debe ese cliente.
          br
          br
          | Si posteriormente el cliente realiza un pago, el registro debe disminuir el saldo en el auxiliar. Si el auxiliar refleja una deuda pendiente, pero el libro mayor no coincide, se debe revisar si existen errores de registro, pagos no aplicados o documentos duplicados.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Concepto y función de los comprobantes de contabilidad
      p(data-aos="fade-left") Los comprobantes de contabilidad son documentos internos que resumen las operaciones y sirven de enlace entre los soportes y los registros contables. Los elementos que permite identificar la operación, comprobar su respaldo y establecer las cuentas y valores registrados contablemente:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img7.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Número del comprobante")
                p.mb-2 Identifica individualmente el registro y facilita su consulta.
                p.mb-4 #[b Ejemplo:] CC-0015.
              .row(titulo="Fecha")
                p.mb-2 Ubica la operación en el periodo contable correspondiente.
                p.mb-4 #[b Ejemplo:] 15 de mayo de 2026.
              .row(titulo="Tipo de comprobante")
                p.mb-2 Clasifica el registro según la naturaleza de la operación.
                p.mb-4 #[b Ejemplo:] ingreso, egreso o comprobante general.
              .row(titulo="Tercero")
                p.mb-2 Identifica al cliente, proveedor, trabajador o beneficiario relacionado.
                p.mb-4 #[b Ejemplo:] Proveedor ABC S.A.S.
              .row(titulo="Concepto")
                p.mb-2 Describe de manera clara la operación registrada.
                p.mb-4 #[b Ejemplo:] compra de mercancía a crédito.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Soporte relacionado")
                p.mb-2 Vincula el comprobante con el documento que respalda la operación.
                p.mb-4 #[b Ejemplo:] factura de compra núm. 345.
              .row(titulo="Cuentas contables")
                p.mb-2 Identifica las cuentas afectadas por la operación.
                p.mb-4 #[b Ejemplo:] inventarios, impuesto descontable y proveedores.
              .row(titulo="Débitos y créditos")
                p.mb-2 Registra los valores de acuerdo con la naturaleza de las cuentas y garantiza la partida doble.
                p.mb-4 #[b Ejemplo:] débito a inventarios por $1.000.000, débito al impuesto descontable por $190.000 y crédito a proveedores por $1.190.000.
              .row(titulo="Elaboración y revisión")
                p.mb-2 Identifica a los responsables de preparar y verificar el comprobante.
                p.mb-4 #[b Ejemplo:] auxiliar contable y contador.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img8.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El comprobante debe relacionar claramente la operación, el soporte, las cuentas y los valores registrados.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-3.p-4(data-aos="fade-left")
          p Este caso aplica estos elementos al pago de una obligación:
          p <b>Ejemplo aplicado</b>
          p Una empresa paga una factura pendiente a un proveedor. El comprobante debe incluir el tercero, la fecha, el número de la factura, el valor pagado y las cuentas afectadas. En el registro se debita la cuenta de proveedores y se acredita la cuenta bancaria.
          p.mb-0 Si el comprobante no identifica al proveedor o no relaciona la factura cancelada, el registro puede quedar incompleto y dificultar la revisión posterior de la cuenta por pagar.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img9.png', alt='', style="width: 450px")
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Relación entre comprobantes, soportes y libros contables
      p(data-aos="fade-left") Los soportes, comprobantes y libros cumplen funciones diferentes, pero se relacionan para garantizar la trazabilidad y verificación de la información contable. La ruta que explica cómo una operación pasa del documento inicial a los registros, saldos y reportes contables es la siguiente:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-9
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Soporte
                p Demuestra que la operación ocurrió y contiene sus datos iniciales.
                p #[b Pregunta que responde:] ¿Qué documento prueba la operación?
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png').img125
              .col-12.col-lg.text-start
                h4 Comprobante
                p Resume la forma en que la operación fue registrada, incluidas las cuentas, los débitos y los créditos.
                p #[b Pregunta que responde:] ¿Cómo se registró contablemente?
            .row.align-items-center
              .col-12.col-lg
                h4 Libro diario
                p Organiza los registros según el orden cronológico de las operaciones.
                p #[b Pregunta que responde:] ¿Cuándo se registró?
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_4.png').img125
              .col-12.col-lg.text-start
                h4 Libro mayor
                p Acumula los movimientos y saldos de cada cuenta contable.
                p #[b Pregunta que responde:] ¿Qué cuentas fueron afectadas?
            .row.align-items-center
              .col-12.col-lg
                h4 Libro auxiliar
                p Detalla los movimientos por tercero, documento o concepto específico.
                p #[b Pregunta que responde:] ¿Qué tercero o detalle está relacionado?
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_6.png').img125
              .col-12.col-lg.text-start
                h4 Reporte contable
                p Consolida la información para facilitar su control, análisis y comunicación.
                p #[b Pregunta que responde:] ¿Cuál es el resultado acumulado?
      //- Linea de tiempo
      p(data-aos="fade-left") La relación entre estos elementos permite reconstruir una operación desde su soporte hasta el reporte final.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb3 Este caso aplica esta trazabilidad a una venta a crédito:
          br
          br
          p.mb-3 <b>Ejemplo aplicado</b>
          br
          br
          | Una factura de venta a crédito genera un soporte de venta, un comprobante de contabilidad, un registro en el libro diario, movimientos en el libro mayor y un saldo en el auxiliar del cliente. Esta ruta permite verificar si el ingreso fue reconocido, si el IVA fue registrado y si la cuenta por cobrar quedó correctamente asociada al cliente.
          br
          br
          | Si el cliente paga y el auxiliar no disminuye, se debe revisar si el comprobante de ingreso fue aplicado correctamente a la factura pendiente.
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Formatos y diligenciamiento de libros contables
      p(data-aos="fade-left") El diligenciamiento de los libros contables requiere registrar información completa, ordenada y relacionada con los soportes y comprobantes correspondientes. A continuación, se exponen los datos necesarios para identificar la operación, registrar sus valores y facilitar su posterior verificación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Identificación del registro")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-md-6
                h4 Identificación del registro
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Fecha:] ubica la operación en el periodo correspondiente. Ejemplo: 10 de junio de 2026.
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Número de comprobante:] relaciona el registro con el comprobante contable. Ejemplo: CD-0024.
                  li.d-flex.align-items-start
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Documento soporte:] vincula la operación con su evidencia. Ejemplo: factura de venta núm. 789.
          .py-3.py-md-4(titulo="Información de la operación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-md-6
                h4 Información de la operación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Tercero:] identifica al cliente, proveedor o beneficiario. Ejemplo: Cliente Los Andes.
                  li.d-flex.align-items-start
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Concepto:] describe claramente el hecho económico. Ejemplo: venta de mercancía a crédito.
          .py-3.py-md-4(titulo="Registro contable")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_3.png')
              .col-md-6
                h4 Registro contable
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Cuenta contable:] clasifica el movimiento según su naturaleza. Ejemplo: cuentas por cobrar, ingresos e impuesto generado.
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Débito:] registra los valores correspondientes en las cuentas afectadas. Ejemplo: cuentas por cobrar por $1.190.000.
                  li.d-flex.align-items-start
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Crédito:] registra la contrapartida del asiento. Ejemplo: ingresos por $1.000.000 e impuesto generado por $190.000.
          .py-3.py-md-4(titulo="Saldo y verificación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_4.png')
              .col-md-6
                h4 Saldo y verificación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex.align-items-start.mb-2
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Saldo:] presenta el valor acumulado después del movimiento. Ejemplo: saldo pendiente del cliente por $1.190.000.
                  li.d-flex.align-items-start
                    i.fas.fa-magnifying-glass-dollar.me-3.mt-1
                    span #[b Verificación:] comprueba la igualdad entre débitos y créditos y su correspondencia con el soporte.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El diligenciamiento correcto permite identificar cada operación, comprobar su respaldo y consultar sus efectos contables.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-7.p-4(data-aos="fade-left")
          p Este caso presenta un registro incompleto en un libro auxiliar:
          p <b>Ejemplo aplicado</b> 
          p Una empresa registra una compra de mercancía, pero en el libro auxiliar de proveedores solo aparece el valor y no se identifica el número de factura ni el nombre del proveedor. Aunque el asiento pueda estar cuadrado, el diligenciamiento es incompleto porque no permite consultar con claridad el origen de la obligación.
          p.mb-0 La corrección consiste en completar la información del tercero, relacionar la factura y verificar que el comprobante contable corresponda al soporte recibido.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img11.png', alt='', style="width: 420px")
      p(data-aos="fade-left") El correcto diligenciamiento permite reconstruir cada operación y comprobar su relación con los documentos que la respaldan. El siguiente video desarrolla los datos de un registro completo y explica su aplicación en los libros contables.
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Revisión de movimientos y saldos en libros
      p(data-aos="fade-left") La revisión de movimientos y saldos permite comprobar que las cuentas reflejen correctamente las operaciones registradas y coincidan con sus soportes y auxiliares. Los siguientes cruces permiten comparar los saldos contables con otras fuentes e identificar posibles inconsistencias que requieren verificación:
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
                          img(src='@/assets/curso/temas/t3/tarjeta04_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bancos
                            p.mb-2 #[b Documento de comparación:] extracto bancario y conciliación.
                            p.mb-0 #[b Posibles inconsistencias:] pagos no registrados, movimientos duplicados o diferencias pendientes de conciliación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Clientes
                            p.mb-2 #[b Documento de comparación:] auxiliar de cartera y facturas de venta.
                            p.mb-0 #[b Posibles inconsistencias:] recaudos no aplicados, facturas omitidas o saldos asignados al cliente equivocado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Proveedores
                            p.mb-2 #[b Documento de comparación:] auxiliar de cuentas por pagar y facturas de compra.
                            p.mb-0 #[b Posibles inconsistencias:] facturas omitidas, pagos mal aplicados o registros duplicados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Inventarios
                            p.mb-2 #[b Documento de comparación:] kárdex y conteo físico.
                            p.mb-0 #[b Posibles inconsistencias:] diferencias entre las existencias físicas y las cantidades registradas contablemente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ingresos y gastos
                            p.mb-2 #[b Documentos de comparación:] facturas, recibos y comprobantes.
                            p.mb-0 #[b Posibles inconsistencias:] ventas omitidas o duplicadas y gastos sin soporte o clasificados incorrectamente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Impuestos
                            p.mb-2 #[b Documentos de comparación:] declaraciones, facturas y auxiliares contables.
                            p.mb-0 #[b Posibles inconsistencias:] impuestos omitidos, bases incorrectas o retenciones mal registradas.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t3/img12.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") La revisión debe considerar la naturaleza de cada cuenta y comparar sus movimientos y saldos con los documentos correspondientes.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img13.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4          
          p Este caso presenta una diferencia en la cuenta de clientes:
          p <b>Ejemplo aplicado</b>
          p El libro mayor presenta un saldo de $8.000.000 en la cuenta de clientes, pero el auxiliar de cartera suma $7.200.000. Esta diferencia indica que existe un registro que no está correctamente asociado a un cliente o que se presentó una inconsistencia entre el mayor y el auxiliar.
          p.mb-0 La revisión debe identificar los movimientos que generan la diferencia, verificar los comprobantes y corregir la información para que los saldos coincidan antes de elaborar reportes financieros.
      Separador
      //- Inicio Tema3.8
      .row
        #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.8 Ejemplo aplicado de diligenciamiento básico de libros contables
      p(data-aos="fade-left") El siguiente caso integra el soporte, el comprobante y los libros contables mediante el registro de una venta de mercancía a crédito.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-8.p-4(data-aos="fade-left")
          p <b>Ejemplo aplicado</b> 
          p Comercial El Progreso S.A.S. vende mercancía a crédito por $1.000.000, más IVA del 19 %. La operación está respaldada por la factura de venta núm. 1025, emitida a nombre del cliente Almacén Rivera. La tabla siguiente presenta la forma básica de registrar una venta a crédito en el comprobante y en los libros contables:
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t3/img14.png', alt='', style="width: 450px")
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center
              .col-md-auto.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Registro básico en comprobante y libros
                .tabla-a.mb-5
                  table
                    thead
                      tr
                        th(style="width: 15%") Fecha
                        th(style="width: 20%") Soporte
                        th(style="width: 20%") Comprobante
                        th(style="width: 25%") Cuenta
                        th(style="width: 10%") Débito
                        th(style="width: 10%") Crédito
                    tbody
                      tr
                        td 12/06/2026
                        td Factura No. 1025
                        td Diario No. 045
                        td Clientes
                        td $1.190.000
                        td
                      tr
                        td 12/06/2026
                        td Factura No. 1025
                        td Diario No. 045
                        td Ingresos por ventas
                        td
                        td $1.000.000
                      tr
                        td 12/06/2026
                        td Factura No. 1025
                        td Diario No. 045
                        td IVA generado
                        td
                        td $190.000
            //- Fin Tabla
            .row.mb-5.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t3/img15.png', alt='', style="width: 500px")
              .col-12.col-lg-7.order-2.order-lg-2.bg-color-2.p-4(data-aos="fade-left")
                p La interpretación es la siguiente:
                p <b>Interpretación:</b> la venta a crédito aumenta la cuenta por cobrar al cliente en $1.190.000, valor correspondiente a la mercancía y al IVA. A su vez, se reconocen ingresos por $1.000.000 y un IVA generado de $190.000. La igualdad entre débitos y créditos confirma el cumplimiento de la partida doble.
                p El comprobante permite relacionar la fecha, la factura, el cliente, las cuentas y los valores. Posteriormente, el asiento se incorpora cronológicamente en el libro diario, se agrupa por cuentas en el libro mayor y se detalla en el auxiliar del cliente.
                p Cuando Almacén Rivera pague la factura, se registrará el ingreso del dinero y la disminución de la cuenta por cobrar. Esta secuencia garantiza la trazabilidad entre el soporte, el comprobante y los libros contables.

</template>

<script>
export default {
  name: 'Tema3',
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
<style lang="sass"></style>
