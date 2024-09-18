<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Clima y cultura organizacional
    
    .row.align-items-center.mb-4
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 400px;")
      .col-lg-8
        .fondo-color-sistema-m.p-4
          p.mb-4 El clima organizacional es el ambiente en el que se desarrolla la actividad laboral, que generalmente incluye el medio físico y el recurso humano. Las percepciones que los empleados tienen sobre el clima organizacional influyen directamente en:

          .ps-md-4
            .mb-2
              .bg-white.p-2.borde-4.d-inline-flex
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 La productividad
            .mb-2
              .bg-white.p-2.borde-4.d-inline-flex
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Las relaciones interpersonales
            .mb-2
              .bg-white.p-2.borde-4.d-inline-flex
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 La capacidad de liderazgo
            .mb-0
              .bg-white.p-2.borde-4.d-inline-flex
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 El sentido de pertenencia hacia la organización
    
    p.mb-4 La cultura organizacional es el conjunto de símbolos, valores, creencias y actitudes compartidas dentro de una organización. Es la cultura organizacional la que alinea a los miembros con la visión de la empresa, estableciendo un modo de pensar, sentir y actuar colectivo entre sus integrantes.

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
