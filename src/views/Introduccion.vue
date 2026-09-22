<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La verificación y el reporte de la información contable permiten comprobar que los hechos económicos registrados estén respaldados, clasificados y organizados conforme a la normativa aplicable. Este proceso garantiza que los soportes, comprobantes, libros y reportes representen de forma ordenada y confiable las operaciones empresariales. El sistema documental contable integra soportes, comprobantes y libros como elementos indispensables para respaldar, verificar y conservar la información financiera (Contaduría General de la Nación).
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-2.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El componente aborda la verificación de soportes y registros contables, la aplicación de la tabla de retención documental, la gestión de documentos físicos y digitales, el diligenciamiento de libros, y la elaboración de reportes contables y estados financieros básicos. También incorpora buenas prácticas de control, archivo, seguridad, ergonomía y manejo ambiental de residuos de papelería.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/intro/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Su aplicación permite comprobar que facturas, recibos, comprobantes y registros correspondan con los hechos económicos, utilicen las cuentas adecuadas y cuenten con respaldo documental. Además, facilita organizar archivos físicos y digitales, diligenciar libros, generar reportes, elaborar estados financieros básicos e identificar inconsistencias antes de presentar la información. De esta manera, fortalece el control interno, reduce errores, facilita la trazabilidad y aumenta la confiabilidad financiera empresarial.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
