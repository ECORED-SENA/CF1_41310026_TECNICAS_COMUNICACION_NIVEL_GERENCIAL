<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plan de comunicación interna
    
    .fondo-personalizado-1.pos-bottom.size-full.f3
      .fondo-personalizado-1__contenido.pb-5
        .row.mb-4
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
            .fondo-color-sistema-k.p-4.borde-15.h-100.align-content-center
              p.mb-0 Toda organización es el resultado de la participación activa de diversas partes, incluidas sus objetivos, mecanismos organizativos y estructura económica. La comunicación es un mecanismo que atraviesa la institución en diversas dimensiones. A partir de ello, se pueden identificar diferentes ámbitos de la comunicación en las organizaciones, como se presenta a continuación:
          .col-lg-7(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/34.png",style="max-width: 715px;")
        
        TabsC.color-acento-contenido.tabs-c-p-1.mb-4(data-aos="zoom-in-out")
          .bg-white.py-5.px-4(titulo="Ámbito de la información")
            .row.align-items-center
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 424px;") 
              .col-lg-7
                h4.mb-4 Ámbito de la información
                p.mb-0 Este ámbito incluye las normas y datos que la empresa emplea según sus funciones y objetivos definidos. 
          .bg-white.py-5.px-4(titulo="Ámbito de divulgación")
            .row.align-items-center
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 424px;") 
              .col-lg-7
                h4.mb-4 Ámbito de divulgación
                p.mb-0 Comprende diversos elementos destinados a captar, convencer, persuadir y sumar la voluntad de las personas a los fines de la organización. Para este objetivo, se utilizan boletines, publicaciones y comunicados.
          .bg-white.py-5.px-4(titulo="Ámbito de formación y socialización")
            .row.align-items-center
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 424px;") 
              .col-lg-7
                h4.mb-4 Ámbito de formación y socialización
                p.mb-0 Refuerza de manera explícita la cultura institucional. En este ámbito se insertan actividades de capacitación, recreación y eventos institucionales.
          .bg-white.py-5.px-4(titulo="Ámbito de participación")
            .row.align-items-center
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 424px;") 
              .col-lg-7
                h4.mb-4 Ámbito de participación
                p.mb-0 Permite que los miembros de la empresa se expresen a través de diferentes modos de comunicación. Este tipo de dinámica abre espacio para el reconocimiento y la colaboración de los diversos actores que conforman la empresa. Involucra el trabajo en equipo, el reconocimiento de iniciativas, sugerencias y propuestas.
    
        .row.justify-content-center(data-aos="fade")
          .col-lg-10
            .fondo-color-acento-contenido.borde-16.p-4
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 85px;")
                .col
                  p.mb-0 Para la ejecución de un plan de comunicación interna, es esencial una planificación previa que permita su implementación y posterior evaluación. Todo plan de comunicación interna debe contar con el respaldo de la máxima autoridad. De lo contrario, todo el esfuerzo y planificación serán en vano. El plan debe incluir objetivos claros como comunicar la visión, misión, política de calidad y valores de la organización.

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
