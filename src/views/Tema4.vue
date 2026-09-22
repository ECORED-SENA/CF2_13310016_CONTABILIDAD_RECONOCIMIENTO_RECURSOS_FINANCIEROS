<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Reportes contables y estados financieros básicos
      p(data-aos="fade-left") Los reportes contables organizan y resumen los registros de un periodo para revisar saldos, controlar obligaciones y preparar estados financieros. Su elaboración requiere información ordenada, verificable y coherente, conforme al marco normativo colombiano compilado en el Decreto 2420 de 2015. 
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Concepto de reportes contables
      p(data-aos="fade-left") Los reportes contables son informes generados a partir de los registros de una empresa. Organizan y presentan información sobre cuentas, saldos, ingresos, gastos, obligaciones, inventarios, impuestos y resultados del periodo. A continuación, se presentan las principales funciones de los reportes contables y algunos ejemplos de su aplicación:
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
                          img(src='@/assets/curso/temas/t4/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Resumir información
                            p.mb-2 Agrupa los registros contables correspondientes a un periodo determinado.
                            p.mb-0 #[b Ejemplo:] reporte mensual de ingresos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Revisar saldos
                            p.mb-2 Permite comprobar los valores acumulados o pendientes de las cuentas.
                            p.mb-0 #[b Ejemplo:] auxiliar de proveedores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Controlar operaciones
                            p.mb-2 Facilita el seguimiento de los movimientos registrados por la empresa.
                            p.mb-0 #[b Ejemplo:] reporte de movimientos bancarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Apoyar decisiones
                            p.mb-2 Proporciona información útil para orientar la gestión empresarial.
                            p.mb-0 #[b Ejemplo:] reporte de gastos por área.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Preparar estados financieros
                            p.mb-2 Sirve de base para elaborar y verificar la información financiera.
                            p.mb-0 #[b Ejemplo:] balance de prueba.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Detectar inconsistencias
                            p.mb-2 Permite identificar movimientos o saldos que requieren revisión.
                            p.mb-0 #[b Ejemplo:] saldo contrario a la naturaleza de una cuenta.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t4/img1.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
            p(data-aos="fade-left") Los reportes convierten los registros en información útil para verificar cuentas, controlar operaciones y preparar estados financieros. 
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Clasificación de reportes contables
      p(data-aos="fade-left") Los reportes contables se clasifican según la información que presentan y la necesidad de consulta. Algunos detallan movimientos por tercero o documento, mientras otros consolidan saldos, resultados o información financiera. Seguidamente, se exponen los principales reportes contables, la información que contienen y su utilidad empresarial:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Auxiliar de clientes")
                p.mb-2 Presenta los movimientos y saldos correspondientes a cada cliente.
                p.mb-4 #[b Uso principal:] controlar la cartera y consultar las cuentas pendientes de cobro.
              .row(titulo="Auxiliar de proveedores")
                p.mb-2 Relaciona las facturas, los pagos efectuados y las obligaciones pendientes con cada proveedor.
                p.mb-4 #[b Uso principal:] controlar las cuentas por pagar.
              .row(titulo="Reporte de bancos")
                p.mb-2 Consolida las entradas, salidas y saldos de las cuentas bancarias.
                p.mb-4 #[b Uso principal:] apoyar la conciliación bancaria y el control del efectivo.
              .row(titulo="Reporte de inventarios")
                p.mb-2 Presenta las existencias y los movimientos de entrada y salida de mercancías.
                p.mb-4 #[b Uso principal:] controlar las cantidades disponibles y sus movimientos.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Reporte de ingresos")
                p.mb-2 Agrupa las ventas y otros ingresos reconocidos durante un periodo.
                p.mb-4 #[b Uso principal:] analizar el comportamiento de los ingresos y la actividad comercial.
              .row(titulo="Reporte de gastos")
                p.mb-2 Clasifica los gastos por cuenta, concepto, periodo o área de la empresa.
                p.mb-4 #[b Uso principal:] controlar los costos administrativos y apoyar el análisis de los egresos.
              .row(titulo="Balance de prueba")
                p.mb-2 Consolida los movimientos y saldos de las cuentas contables.
                p.mb-4 #[b Uso principal:] verificar la igualdad entre débitos y créditos y efectuar la revisión previa a los estados financieros.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Cada reporte responde a una necesidad específica de consulta y control.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Reportes auxiliares de clientes, proveedores, bancos e inventarios
      p(data-aos="fade-left") Los reportes auxiliares detallan la composición del saldo de una cuenta por tercero, documento, fecha, concepto o movimiento. Esta información permite explicar los valores consolidados en los libros contables. A continuación, se estudian los principales reportes auxiliares, la información que permiten revisar y algunas inconsistencias frecuentes:
      //- Inicio Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Clientes
                p.mb-3 Permite revisar las facturas pendientes de cobro y los recaudos aplicados a cada cliente.
                p.mb-0 #[b Posible inconsistencia:] recaudo no aplicado a la factura correspondiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Proveedores
                p.mb-3 Relaciona las facturas pendientes de pago y los abonos efectuados a cada proveedor.
                p.mb-0 #[b Posible inconsistencia:] pago asignado a un proveedor equivocado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bancos
                p.mb-3 Detalla las entradas, salidas y los saldos de las cuentas bancarias.
                p.mb-0 #[b Posible inconsistencia:] movimiento registrado en el extracto bancario, pero omitido en la contabilidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inventarios
                p.mb-3 Presenta las existencias y los movimientos de entrada y salida de mercancías.
                p.mb-0 #[b Posible inconsistencia:] diferencia entre el inventario físico y el saldo contable.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Impuestos
                p.mb-3 Relaciona el IVA, las retenciones y otros saldos tributarios registrados.
                p.mb-0 #[b Posible inconsistencia:] impuesto omitido o clasificado incorrectamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Gastos
                p.mb-3 Detalla los conceptos y valores reconocidos como gastos durante un periodo.
                p.mb-0 #[b Posible inconsistencia:] gasto sin soporte o registrado en una cuenta equivocada.
      //- Fin Slideshow
      p(data-aos="fade-left") Los reportes auxiliares permiten comprobar si los saldos del libro mayor coinciden con el detalle de las operaciones.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Balance de prueba
      p(data-aos="fade-left") El balance de prueba presenta los movimientos débito, crédito y los saldos de las cuentas. Permite comprobar la igualdad contable e identificar valores que requieren análisis antes de preparar los estados financieros. Aunque esté cuadrado, deben verificarse la naturaleza de los saldos y su correspondencia con los auxiliares. La siguiente tabla presenta aspectos que deben revisarse en un balance de prueba:
      //- Tabla de Revisión del Balance de Prueba
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 9.
                span Revisión del balance de prueba
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 30%") Aspecto por revisar
                      th(style="width: 40%") Pregunta de control
                      th(style="width: 30%") Acción sugerida
                  tbody
                    tr
                      td Igualdad entre débitos y créditos
                      td ¿El total débito coincide con el total crédito?
                      td Revisar asientos descuadrados
                    tr
                      td Naturaleza de saldos
                      td ¿Las cuentas tienen saldo coherente?
                      td Analizar saldos contrarios
                    tr
                      td Cuentas sin movimiento
                      td ¿Existen cuentas inactivas con saldo?
                      td Revisar origen del saldo
                    tr
                      td Auxiliares
                      td ¿El saldo general coincide con el detalle?
                      td Comparar con clientes, proveedores o bancos
                    tr
                      td Impuestos
                      td ¿Los saldos tributarios están clasificados?
                      td Revisar IVA y retenciones
                    tr
                      td Cuentas de resultado
                      td ¿Ingresos, costos y gastos corresponden al periodo?
                      td Revisar causación y soportes
      //- Tabla de Revisión del Balance de Prueba
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Estado de situación financiera
      p(data-aos="fade-left") El estado de situación financiera presenta los activos, pasivos y el patrimonio de una empresa en una fecha determinada. Permite analizar sus recursos, obligaciones, liquidez y endeudamiento. Su preparación requiere saldos verificados y registros confiables, conforme al Decreto 2420 de 2015. A continuación, se presentan sus elementos básicos, clasificación y ejemplos:
      //- Pestañas Horizontales - Elementos de la Estructura Financiera
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Activo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_1.png', alt='Activo')
              .col-md-6
                h4 Activo
                p.mb-3 Representa los recursos controlados por la empresa como resultado de operaciones anteriores.
                p.mb-0 #[b Ejemplos:] efectivo, cuentas bancarias, cuentas por cobrar, inventarios, maquinaria y equipos.
          .py-3.py-md-4(titulo="Pasivo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_2.png', alt='Pasivo')
              .col-md-6
                h4 Pasivo
                p.mb-3 Corresponde a las obligaciones presentes que la empresa debe pagar o cumplir.
                p.mb-0 #[b Ejemplos:] proveedores, préstamos bancarios, impuestos y otras cuentas por pagar.
          .py-3.py-md-4(titulo="Patrimonio")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_3.png', alt='Patrimonio')
              .col-md-6
                h4 Patrimonio
                p.mb-3 Representa la participación de los propietarios en los activos de la empresa después de descontar los pasivos.
                p.mb-0 #[b Ejemplos:] capital aportado y utilidades acumuladas.
          .py-3.py-md-4(titulo="Partidas corrientes")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_4.png', alt='Partidas corrientes')
              .col-md-6
                h4 Partidas corrientes
                p.mb-3 Incluye los activos que se esperan convertir en efectivo, vender o consumir en el corto plazo y las obligaciones que deben pagarse durante ese mismo periodo.
                p.mb-2 #[b Activos corrientes:] caja, bancos, clientes e inventarios.
                p.mb-0 #[b Pasivos corrientes:] proveedores e impuestos por pagar.
          .py-3.py-md-4(titulo="Partidas no corrientes")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_5.png', alt='Partidas no corrientes')
              .col-md-6
                h4 Partidas no corrientes
                p.mb-3 Comprende los recursos destinados al uso prolongado y las obligaciones cuyo pago corresponde al largo plazo.
                p.mb-2 #[b Activos no corrientes:] maquinaria, muebles y equipos.
                p.mb-0 #[b Pasivos no corrientes:] préstamos bancarios a largo plazo.
        //- Fin Pestañas horizontales
      Separador
      //- Inicio Tema4.6
      .row
        #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.6 Estado de resultados
      p(data-aos="fade-left") El estado de resultados presenta los ingresos, costos y gastos de un periodo para determinar la utilidad o pérdida. Su elaboración exige registros completos, correctos y respaldados. A continuación, se explican sus elementos básicos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ingresos")
                p.mb-2 Representan los recursos generados por las actividades desarrolladas por la empresa.
                p.mb-4 #[b Ejemplo:] ventas de mercancías y prestación de servicios.
              .row(titulo="Costos")
                p.mb-2 Corresponden a los valores directamente relacionados con la producción o venta de bienes y servicios.
                p.mb-4 #[b Ejemplo:] costo de la mercancía vendida.
              .row(titulo="Utilidad bruta")
                p.mb-2 Es la diferencia entre los ingresos por ventas y los costos asociados.
                p.mb-4 #[b Cálculo:] ingresos por ventas − costo de ventas.
              .row(titulo="Gastos operacionales")
                p.mb-2 Comprenden los valores necesarios para desarrollar las actividades administrativas y comerciales.
                p.mb-4 #[b Ejemplo:] arrendamiento, servicios públicos, publicidad y nómina administrativa.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Resultado operacional")
                p.mb-2 Corresponde al resultado generado por la actividad principal de la empresa.
                p.mb-4 #[b Cálculo:] utilidad bruta − gastos operacionales.
              .row(titulo="Otros ingresos y gastos")
                p.mb-2 Incluyen conceptos que no se relacionan directamente con la actividad principal.
                p.mb-4 #[b Ejemplo:] intereses, descuentos y gastos financieros.
              .row(titulo="Utilidad o pérdida")
                p.mb-4 Es el resultado final del periodo. Existe utilidad cuando los ingresos superan los costos y gastos; en caso contrario, se presenta una pérdida.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img5.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El estado de resultados relaciona los ingresos con los costos y gastos para determinar el desempeño económico de la empresa.
      Separador
      //- Inicio Tema4.7
      .row
        #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.7 Relación entre registros, libros y estados financieros
      p(data-aos="fade-left") Los estados financieros se elaboran a partir de registros, libros y reportes contables confiables. La relación entre soportes, comprobantes, auxiliares y libros garantiza la trazabilidad de cada cifra. Los siguientes pasos presentan la ruta de la información contable hasta los estados financieros:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Línea de tiempo / PasosA
            .row.justify-content-center
              .col-lg-9
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Soporte contable
                      p Demuestra la existencia y las características de la operación económica.
                      p #[b Ejemplo:] factura de venta.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_1.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_2.png').img125
                    .col-12.col-lg.text-start
                      h4 Comprobante contable
                      p Resume el registro técnico e identifica las cuentas, los valores y los terceros relacionados.
                      p #[b Ejemplo:] comprobante diario.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Libro diario
                      p Organiza cronológicamente las operaciones registradas.
                      p #[b Ejemplo:] asiento de una venta.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_3.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_4.png').img125
                    .col-12.col-lg.text-start
                      h4 Libro mayor
                      p Acumula los movimientos débito y crédito de cada cuenta para determinar su saldo.
                      p #[b Ejemplo:] cuenta de ingresos por ventas.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Reporte auxiliar
                      p Detalla la composición del saldo por tercero, documento, fecha o concepto.
                      p #[b Ejemplo:] auxiliar de clientes.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_5.png').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_6.png').img125
                    .col-12.col-lg.text-start
                      h4 Balance de prueba
                      p Consolida los movimientos y saldos de las cuentas para efectuar verificaciones previas.
                      p #[b Ejemplo:] cuenta de clientes con saldo final.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Estado financiero
                      p Presenta de manera organizada la situación financiera o el resultado económico de la empresa.
                      p #[b Ejemplo:] estado de resultados.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_7.png').img125
            //- Fin Línea de tiempo
            p(data-aos="fade-left") Cada etapa transforma y consolida la información sin perder su conexión con el soporte original.
      Separador
      //- Inicio Tema4.8
      .row
        #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.8 Ejemplo aplicado de elaboración de reportes contables
      .row.align-items-center.mb-4
        .col-12.col-lg-7(data-aos="fade-left")
          .p-2.mb-1
            p.mb-0 Antes de elaborar los reportes y estados financieros, deben verificarse los saldos y registros contables. Esta revisión permite identificar, analizar y corregir diferencias. Este caso presenta este proceso:
          .bg-color-9.p-3
            p.mb-3 <b>Caso aplicado</b>
            p La empresa Comercial San Miguel S.A.S. revisa sus registros del mes de junio y genera un balance de prueba preliminar. Al revisar los reportes auxiliares, identifica que la cuenta de clientes presenta un saldo general de $12.000.000, pero los auxiliares por cliente suman $11.500.000. Esta diferencia indica que existe un registro sin tercero asociado o una inconsistencia en la aplicación de un recaudo. La siguiente tabla presenta hallazgos frecuentes antes de elaborar reportes contables y estados financieros:
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img6.png", data-aos="zoom-in", style="width: 100%; max-width: 500px;")
      //- Tabla 10. Revisión previa para elaborar reportes
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .col-lg-10.mx-auto.mb-5(data-aos="fade-up")
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 10.
                span Revisión previa para elaborar reportes
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th(style="width: 30%") Hallazgo
                      th(style="width: 35%") Posible causa
                      th(style="width: 35%") Acción correctiva
                  tbody
                    tr
                      td Diferencia entre mayor y auxiliar.
                      td Registro sin tercero asociado.
                      td Revisar comprobantes y completar información.
                    tr
                      td Banco no coincide con extracto.
                      td Movimiento no registrado.
                      td Realizar conciliación bancaria.
                    tr
                      td Gasto duplicado.
                      td Factura registrada dos veces.
                      td Reversar registro duplicado.
                    tr
                      td Proveedor con saldo incorrecto.
                      td Pago mal aplicado.
                      td Reclasificar pago al proveedor correcto.
                    tr
                      td Inventario negativo.
                      td Salida mal registrada.
                      td Verificar compras y salidas.
                    tr
                      td Ingreso sin factura.
                      td Registro sin soporte.
                      td Revisar documento de venta.
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img7.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4          
          p La interpretación del caso es la siguiente:
          p <b>Interpretación del caso:</b> la revisión permite establecer que no deben elaborarse los estados financieros hasta corregir la diferencia identificada. Si la información se presenta sin verificar los libros, auxiliares y soportes, las cuentas por cobrar y los resultados del periodo podrían contener valores incorrectos.
          p Después de localizar el registro pendiente, completar la información del tercero y comprobar que el auxiliar coincide con el libro mayor, la empresa puede generar nuevamente el balance de prueba y continuar con la elaboración de los estados financieros.
      p(data-aos="fade-left") La elaboración de reportes contables requiere información completa, clasificada, respaldada y verificada. La comparación entre soportes, comprobantes, libros, auxiliares y saldos permite corregir inconsistencias y generar información confiable para el análisis y la toma de decisiones.
</template>

<script>
export default {
  name: 'Tema4',
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
