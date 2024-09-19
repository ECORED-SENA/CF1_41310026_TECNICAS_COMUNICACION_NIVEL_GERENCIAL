<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Clima y cultura organizacional
    
    .row.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
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
    
    p.mb-4(data-aos="fade-up") La cultura organizacional es el conjunto de símbolos, valores, creencias y actitudes compartidas dentro de una organización. Es la cultura organizacional la que alinea a los miembros con la visión de la empresa, estableciendo un modo de pensar, sentir y actuar colectivo entre sus integrantes.

    .fondo-personalizado-1.size-full.med.pos-center.f5
      .fondo-personalizado-1__contenido
        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col-lg-6.pe-lg-0
            .fondo-color-acento-contenido.p-4.px-lg-5.h-100.align-content-center
              p.mb-0 La cultura organizacional es un elemento inherente que distingue a la organización de otras. Influye significativamente en el comportamiento empresarial y en el clima organizacional, al ofrecer una interpretación compartida de la realidad, facilitando el proceso de estructuración y coordinación dentro de la organización.
          .col-lg-4.ps-lg-0.order-first.order-lg-last
            .fondo-color-secundario.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/69.svg",style="max-width: 420px;")
        
        .row.align-items-center
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 400px;")
          .col-lg-8(data-aos="fade-left")
            p.mb-4 Es crucial que los miembros de la organización se apropien de la cultura organizacional, ya que el grado de conocimiento de la misma permitirá a todos mirar hacia un horizonte compartido y orientarse hacia un propósito común.

            SlyderF.slider-personalizado-2(columnas="col-lg-6 py-4",data-aos="flip-up")
              .borde-14.p-4.sombra-p-1.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/71.svg",style="max-width: 91px;")
                h5.fondo-color-acento-contenido.text-center.mb-3 Misión
                p.text-center.mb-0 Es el motor principal de la organización, definiendo su razón de ser y su motivación para existir.
              .borde-14.p-4.sombra-p-1.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/72.svg",style="max-width: 91px;")
                h5.fondo-color-acento-contenido.text-center.mb-3 Visión
                p.text-center.mb-0 Es la proyección a futuro de la organización, determinada a partir del análisis de su condición actual.
              .borde-14.p-4.sombra-p-1.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 91px;")
                h5.fondo-color-acento-contenido.text-center.mb-3 Valores
                p.text-center.mb-0 Son un conjunto de principios esenciales que todos los miembros de la organización asumen.
              .borde-14.p-4.sombra-p-1.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/74.svg",style="max-width: 91px;")
                h5.fondo-color-acento-contenido.text-center.mb-3 Filosofía
                p.text-center.mb-0 Es el conjunto de valores, creencias, políticas y lineamientos compartidos dentro de la organización; determina la ideología y el curso de acción a seguir por la organización.

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
