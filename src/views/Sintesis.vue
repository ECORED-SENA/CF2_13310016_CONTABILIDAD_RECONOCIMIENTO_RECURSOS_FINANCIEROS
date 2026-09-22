<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Contabilidad: reconocimiento de recursos financieros
          p.mb-0 
            | Síntesis:
            | verificación y reporte de la información contable
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La verificación y el reporte contable integran la revisión de soportes y registros, la gestión documental, los libros, los comprobantes y los estados financieros. Además, incorporan controles de seguridad, archivo, ergonomía y manejo ambiental. En conjunto, estos procesos garantizan información confiable, organizada y útil para el control y la toma de decisiones.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
