<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Reportes contables y estados financieros básicos
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Concepto de reportes contables

      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Clasificación de reportes contables

      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Reportes auxiliares de clientes, proveedores, bancos e inventarios

      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Balance de prueba

      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Estado de situación financiera

      Separador
      //- Inicio Tema4.6
      .row
        #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.6 Estado de resultados

      Separador
      //- Inicio Tema4.7
      .row
        #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.7 Relación entre registros, libros y estados financieros

      Separador
      //- Inicio Tema4.8
      .row
        #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.8 Ejemplo aplicado de elaboración de reportes contables

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
