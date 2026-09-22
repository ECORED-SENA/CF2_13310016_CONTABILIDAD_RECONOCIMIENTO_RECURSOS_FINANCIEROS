<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Control, seguridad, archivo y buenas prácticas en la información contable
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Revisión integral antes de generar reportes contables

      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Coherencia entre soportes, comprobantes, libros y reportes

      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Controles básicos para la calidad de la información contable

      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Seguridad y salud en el trabajo aplicada al archivo contable

      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Ergonomía en labores de digitación, archivo y revisión documental

      Separador
      //- Inicio Tema5.6
      .row
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.6 Manejo ambiental de residuos de papelería

      Separador
      //- Inicio Tema5.7
      .row
        #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.7 Buenas prácticas para conservar y presentar información contable

      Separador
      //- Inicio Tema5.8
      .row
        #t_5_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.8 Caso práctico integrador de verificación, libros y reportes

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
