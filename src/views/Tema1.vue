<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La comunicación y sus elementos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/6.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El fenómeno de la comunicación está presente en las más diversas manifestaciones de la vida animal y humana. En cuanto al ámbito humano, se puede afirmar que la comunicación es un instrumento esencial para el establecimiento de relaciones entre el ser humano y su entorno. Este proceso se define, generalmente, como el medio por el cual se busca establecer contacto con otra persona mediante la transmisión de un mensaje, con el objetivo de obtener algún tipo de respuesta o reacción, ya sea en forma de una acción, opinión o actitud.
    
        
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text
        h3 Emisor y receptor
    
    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4(data-aos="fade-up") Son elementos que deben considerarse conjuntamente, ya que los roles del uno y del otro se intercambian constantemente en la comunicación.

        .row.align-items-center.mb-4(data-aos="fade-left")
          .col-md-auto.d-none.d-md-block
            figure
              img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
          .col
            p.mb-0 #[b El emisor] es la persona u organización que elige y selecciona los signos adecuados para transmitir su mensaje; es decir, codifica el mensaje para que sea comprensible para el receptor. El proceso comunicativo se inicia en el emisor. Para que la comunicación sea efectiva, el emisor debe cumplir con las siguientes características:
        
        .fondo-color-sistema-l.p-4.borde-8(data-aos="zoom-in-out")
          .row.align-items-center
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/8.svg")
            .col-lg-7
              .bg-white.p-2.borde-4.mb-3
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Actitud positiva hacia el mensaje, los receptores y la comunicación en sí.
              .bg-white.p-2.borde-4.mb-3
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Comprensión clara del contenido del mensaje a comunicar.
              .bg-white.p-2.borde-4
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Habilidad para codificar o convertir el contenido del mensaje en palabras comprensibles para el receptor.

      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 403px;")
    
    .row.align-items-center.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Para que la comunicación sea efectiva, #[b el receptor] debe cumplir con las siguientes características:

        .fondo-color-sistema-m.p-4.borde-12
          .row.align-items-center
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 248px;")
            .col-lg-8
              .bg-white.p-2.borde-4.mb-3
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Actitud positiva hacia la recepción del mensaje.
              .bg-white.p-2.borde-4.mb-3
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Capacidad cultural que le permita comprender la naturaleza y el nivel del mensaje recibido e integrarlo en un contexto significativo.
              .bg-white.p-2.borde-4
                .d-flex.align-items-start
                  img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                  p.mb-0 Facilidad para descifrar el mensaje, basada en el conocimiento de los signos o símbolos a través de los cuales se le comunica algo.
    
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-md-auto
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 88px;")
      .col
        p.mb-0 La recepción de la comunicación no siempre es idéntica al mensaje generado. Las características individuales del receptor actúan como factores distorsionantes de la información, hasta el punto de que se podría afirmar que el receptor activo es un transformador de los mensajes, ya que los percibe y los almacena. La comunicación es un proceso complejo que implica la interacción de varios elementos esenciales:
    
    .row.align-items-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Mensaje")
            .ps-md-5.ms-md-3
              p.mb-0 Es la información que el emisor envía al receptor y que puede definirse como el conjunto de ideas, pensamientos, sentimientos y acontecimientos expresados.
          .div(titulo="Código")
            .ps-md-5.ms-md-3
              p.mb-0 Es el conjunto de reglas propias de cada sistema de signos y símbolos que el emisor utiliza para transmitir su mensaje. Debe estar formulado de manera adecuada para que el receptor pueda interpretarlo correctamente. Un ejemplo claro de código es la gramática de un idioma.
          .div(titulo="Canal")
            .ps-md-5.ms-md-3
              p.mb-0 Es el medio o vehículo por el cual se transmite el mensaje, estableciendo la conexión entre el emisor y el receptor. Ejemplos incluyen el aire en el caso de la voz, o el hilo telefónico en una conversación telefónica.
          .div(titulo="Referente")
            .ps-md-5.ms-md-3
              p.mb-0 Es la realidad percibida gracias al mensaje. Incluye todo aquello que es descrito o representado por el mensaje.
      .col-lg-4(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 400px;")
    
    .row.align-items-center
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 401px;")
      .col-lg-8(data-aos="fade-left")
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Mensaje")
            .ps-md-5.ms-md-3
              p.mb-4 Es la respuesta o información que el receptor envía de vuelta al emisor, y es esencial para la interactividad del proceso comunicativo. La retroalimentación puede ser positiva o negativa. Es positiva cuando la comunicación entre el emisor y el receptor es activa y continua, y negativa cuando alguno de los dos busca cambiar el tema o terminar la comunicación. Cuando no hay retroalimentación, se considera que solo hubo información, ya que el emisor simplemente expuso su mensaje sin recibir una respuesta. La retroalimentación es crucial para la comprensión y el control de las comunicaciones, ayudando a prevenir la tergiversación o mala interpretación de lo que se está comunicando.
              p.mb-4 Para que la retroalimentación sea exitosa, es necesario:
              .d-flex.align-items-start
                img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                p.mb-0 Que se realice de inmediato.
              .d-flex.align-items-start.mb-4
                img.pt-1.me-1(src="@/assets/curso/temas/9.svg",style="max-width: 13px;")
                p.mb-0 Que ocurra, ya sea positiva o negativa.
              p.mb-0 Que la retroalimentación no verbal esté acompañada de retroalimentación verbal, asegurando la congruencia entre ambas.
          .div(titulo="Contexto")
            .ps-md-5.ms-md-3
              p.mb-4 Es el tiempo y el lugar en que se realiza el acto comunicativo.
          .div(titulo="Interferencia o barrera")
            .ps-md-5.ms-md-3
              p.mb-4 Es cualquier perturbación que afecta el proceso comunicativo y puede ocurrir en cualquiera de sus elementos. Ejemplos incluyen una ortografía deficiente, la afonía del hablante, la sordera del oyente, o la distracción del receptor.
    
    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Propósitos fundamentales de la comunicación
    
    p.mb-4(data-aos="fade") La comunicación se lleva a cabo con la finalidad de transmitir ideas, pensamientos, conocimientos, actitudes, entre otros. A través de la comunicación, se busca generar una transformación en los conocimientos compartidos entre emisor y receptor.

    .fondo-personalizado-1.size-full.med.pos-bottom.f1
      .fondo-personalizado-1__contenido.pb-4
        .row(data-aos="flip-down")
          .col-lg-4.mb-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 400px;")
          .col-lg-4.mb-4
            .tarjeta-p-1.p-4.h-100
              .contenido-tar
                img.fig-1(src="@/assets/curso/temas/18.svg")
                figure.mb-4.pt-5
                  img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 90px;")
                p.mb-0.text-center Uno de sus propósitos es cumplir una función apelativa, ya que se pretende generar un cambio o ejercer algún tipo de influencia en la conducta del receptor.
          .col-lg-4.mb-4
            .tarjeta-p-1.p-4.h-100
              .contenido-tar
                img.fig-1(src="@/assets/curso/temas/18.svg")
                figure.mb-4.pt-5
                  img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 90px;")
                p.mb-0.text-center La comunicación también facilita, mediante el ejercicio conjunto del diálogo y la negociación, la generación de cambios en las actitudes y opiniones del receptor.
             


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
