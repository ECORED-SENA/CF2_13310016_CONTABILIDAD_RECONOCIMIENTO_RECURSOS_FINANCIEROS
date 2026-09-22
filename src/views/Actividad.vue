<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad        
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre reporte de la información contable',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión de los conceptos y procedimientos relacionados con la verificación de soportes y registros contables, la gestión documental, el uso de la tabla de retención documental, el diligenciamiento de libros y comprobantes, la elaboración de reportes contables y estados financieros básicos, y la implementación de controles y buenas prácticas de archivo, seguridad, ergonomía y manejo ambientalmente responsable de los residuos de papelería.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la verificación contable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar los documentos contables solo según fecha de emisión o expedición y el orden exacto en que fueron recibidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Confirmar que cada operación contabilizada haya generado movimientos de efectivo en las cuentas bancarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar que los registros correspondan con los hechos económicos, los soportes y las normas aplicables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir los comprobantes o documentos contables por reportes financieros creados al finalizar cada periodo contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La verificación comprueba la coherencia entre el hecho económico, el soporte, el comprobante, las cuentas, los valores y el periodo registrado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál secuencia representa correctamente la trazabilidad de una operación contable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reporte, soporte, registro, comprobante y hecho económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Soporte, reporte, hecho económico, libro y comprobante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobante, hecho económico, reporte, soporte y registro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Hecho económico, soporte, comprobante, registro, libro y reporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Primero ocurre la operación; posteriormente se obtiene el soporte, se prepara el comprobante, se registra y se generan libros y reportes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una empresa compra mercancía para la venta por $ 2.500.000, pero registra la operación como gasto de papelería. ¿Qué acción permite corregir la inconsistencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reclasificar el valor a inventarios y conservar el soporte del ajuste.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener el gasto y registrar nuevamente la compra como inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la factura porque la operación ya fue contabilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar el valor a cuentas por cobrar para equilibrar el asiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La cuenta debe corresponder a la naturaleza de la operación. La mercancía destinada a la venta se reconoce como inventario, no como gasto de papelería.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una factura de servicios públicos corresponde a mayo, pero se paga y registra en junio. Al aplicar el reconocimiento por causación, ¿qué tratamiento es adecuado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar el gasto únicamente en junio, cuando se efectúe el pago de factura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir el gasto entre mayo y junio sin revisar cuándo se prestó el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reconocer en mayo el valor de la factura como anticipo de un servicio futuro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar el gasto en mayo y la cancelación de la obligación cuando se pague.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El gasto corresponde al periodo en el que se recibió el servicio, aunque el pago se efectúe posteriormente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la finalidad de una tabla de retención documental?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer las cuentas contables que deben utilizarse en cada operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir series documentales, tiempos de conservación y disposición final.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calcular los saldos de los libros auxiliares al cierre del periodo anual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar automáticamente la eliminación final de cada documento antiguo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La tabla de retención organiza los documentos y determina cuánto tiempo permanecen en cada archivo y cuál será su tratamiento final.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿En qué lugar se conservan generalmente los documentos del año actual que son consultados con frecuencia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En el archivo histórico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En el archivo eliminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el archivo de gestión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En el archivo finalizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El archivo de gestión conserva documentos activos y de consulta frecuente relacionados con las actividades actuales de la organización.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una empresa guarda facturas electrónicas en carpetas personales de diferentes empleados y sin una nomenclatura definida. ¿Cuál es la acción más adecuada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Centralizar los archivos, clasificarlos por periodo y tercero, asociarlos con los comprobantes y respaldarlos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Imprimir todas las facturas, ordenarlas por valor y proveedor, y eliminar los archivos electrónicos recibidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conservar solamente una lista de proveedores, registrar valor de las facturas y desechar los propios soportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Guardar documentos en cualquier carpeta, nunca aplicar nomenclatura ni relacionarlos con el registro contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una organización institucional y respaldada facilita la consulta, conserva la trazabilidad y disminuye el riesgo de pérdida.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Un documento contable cumplió el tiempo señalado en la tabla de retención. ¿Qué debe hacerse antes de eliminarlo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Destruir el documento de inmediato para liberar espacio físico en los archivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entregar el documento al empleado que realizó inicialmente el registro contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Convertir el documento archivado en un comprobante contable totalmente nuevo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar la disposición final establecida y aplicar el procedimiento autorizado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El cumplimiento del tiempo de retención no implica eliminación automática; debe revisarse si procede conservar, seleccionar o eliminar.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una empresa necesita revisar las operaciones en el orden en que ocurrieron durante el mes. ¿Qué libro debe consultar?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libro mayor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libro diario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Libro auxiliar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libro de notas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El libro diario registra cronológicamente las compras, ventas, pagos, recaudos y demás operaciones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función principal del comprobante de contabilidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar los soportes externos que ya respaldan cada una de las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar directamente la utilidad o pérdida obtenida por la empresa revisada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar el registro indicando soporte, cuentas, valores, débitos y créditos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Definir el tiempo final de conservación asignado a cada uno de los documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El comprobante resume técnicamente la operación y vincula el soporte con el asiento que se incorpora en los libros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una empresa realiza una venta a crédito por $ 1.000.000 más IVA del 19 %. ¿Cuál registro representa adecuadamente la operación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Débito a clientes por $ 1.190.000, crédito a ingresos por ventas por $ 1.000.000 y crédito a IVA generado por $ 190.000.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Débito a bancos por $ 1.000.000, débito a Impuesto de Valor Agregado por $ 190.000 y crédito a clientes por $ 1.190.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Débito a comercio al por mayor y al por menor por $ 1.190.000 y crédito a clientes por el mismo valor del que debita.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Débito a clientes por $ 1.000.000 y crédito a comercio al por mayor y al por menor por $ 1.190.000, y finaliza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta La venta a crédito genera una cuenta por cobrar por el total facturado, un ingreso por la venta y una obligación por el IVA generado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El saldo de la cuenta de clientes en el libro mayor es de $ 15.000.000, pero la suma de los auxiliares por cliente es de $ 13.500.000. ¿Qué debe hacerse?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar el libro mayor para igualarlo al auxiliar sin revisar los soportes, terceros ni documentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar la diferencia como un ingreso del periodo sin analizar los comprobantes ni cada documento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presentar el saldo mayor porque contiene información consolidada sin comprobar soportes ni documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar los movimientos que originan la diferencia y revisar comprobantes, terceros y documentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los saldos generales deben coincidir con sus detalles auxiliares. La diferencia puede provenir de registros omitidos, duplicados o mal asignados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué reporte permite conocer cuánto debe cada cliente, las facturas pendientes y los pagos aplicados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reporte general de gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auxiliar de clientes o reporte de cartera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estado de resultados del periodo contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libro de inventarios y balances generales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El auxiliar de clientes presenta el detalle de movimientos y saldos por cada tercero relacionado con la cartera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es la utilidad principal del balance de prueba?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir soportes y comprobantes contables antes de elaborar los estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar el valor comercial empresarial mediante la revisión de estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar movimientos, débitos, créditos y saldos antes de elaborar estados financieros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar solo los ingresos, gastos y costos de la empresa en los estados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El balance de prueba facilita la revisión de saldos y ayuda a detectar inconsistencias antes de preparar los estados financieros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué elementos presenta el estado de situación financiera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activos, pasivos y patrimonio en una fecha determinada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ingresos, costos y gastos de un periodo determinado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entradas y salidas de efectivo por cada cuenta bancaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facturas emitidas, recaudos y cartera vencida o castigada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Este estado muestra los recursos controlados, las obligaciones y la participación patrimonial de los propietarios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una empresa registra dos veces un gasto por $ 800.000. ¿Cuál es el efecto más directo sobre el estado de resultados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La utilidad sube $ 800.000 y los gastos se reducen en el mismo valor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los activos aumentan en $ 800.000 y no modifican la utilidad del mes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los ingresos disminuyen $ 800.000 y la utilidad continúa sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los gastos quedan sobrestimados y la utilidad disminuye en $ 800.000.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El registro duplicado aumenta indebidamente los gastos y reduce el resultado del periodo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué control ayuda directamente a prevenir el registro duplicado de facturas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambiar periódicamente el nombre de las cuentas contables antes de cada registro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar consecutivos, proveedor, fecha y número del documento antes del registro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Elaborar los estados financieros antes de registrar los comprobantes del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Imprimir todas las facturas emitidas y ordenarlas según el valor de la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Comparar los datos de identificación del documento permite detectar si una factura ya fue incorporada en la contabilidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'El reporte de bancos presenta un saldo diferente al extracto bancario. ¿Cuál procedimiento debe realizarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ajustar el extracto bancario para igualarlo al saldo contable sin revisar todos los movimientos ya registrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar la diferencia como gasto sin comprobar los movimientos bancarios ni sus soportes contables existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Realizar una conciliación, identificar partidas pendientes y revisar los comprobantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mantener ambos saldos diferentes hasta el siguiente periodo sin verificar comprobantes o movimientos bancarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La conciliación permite identificar consignaciones, cheques, comisiones, registros omitidos u otras partidas que generan diferencias.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una auxiliar contable trabaja varias horas con la pantalla ubicada a un costado y los documentos sobre sus piernas. ¿Cuál medida mejora sus condiciones ergonómicas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicar la pantalla al frente, ajustar la silla, usar un soporte documental y realizar pausas activas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar el tamaño de la pantalla sin corregir la postura adoptada durante las actividades contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trabajar de pie durante toda la jornada y prescindir completamente de una silla con ajuste apropiado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrar toda la digitación en una sola jornada y evitar las interrupciones o cambio en la postura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una postura adecuada, la correcta ubicación de los elementos y las pausas ayudan a disminuir la fatiga visual y muscular.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál práctica combina el manejo ambiental de la papelería con la conservación documental?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar todos los documentos físicos después de digitalizarlos sin revisar su valor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reutilizar como borrador cualquier documento que contenga datos sensibles personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Imprimir varias copias para asegurar la disponibilidad o acceso de la información del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir impresiones, separar residuos y no eliminar documentos que deban conservarse.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La reducción y separación de residuos debe aplicarse sin afectar los tiempos de conservación ni la seguridad de la información contable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
