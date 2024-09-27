<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-auto.d-none.d-md-block
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col
        p.mb-0 La comunicación es un pilar fundamental en cualquier organización, ya que facilita la interacción y el entendimiento entre sus miembros. A través de la comunicación, se establecen conexiones que permiten coordinar actividades, transmitir información crucial y fomentar un ambiente de colaboración. La capacidad de comunicarse de manera efectiva no solo fortalece las relaciones internas, sino que también potencia la eficiencia en la consecución de los objetivos organizacionales.
    
    .row.align-content-center.mb-4
      .col-lg-9
        .row(data-aos="fade-up")
          .col-md-5.pe-md-0
            .fondo-color-sistema-j.h-100.align-content-center
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 420px;")
          .col-md-7.ps-md-0
            .fondo-color-sistema-k.h-100.align-content-center.p-4
              p.mb-0 En este contexto, es vital comprender los elementos esenciales que conforman el proceso comunicativo, como el emisor, el receptor, el mensaje, el código y el canal. Estos componentes interactúan constantemente para asegurar que la información fluya de manera clara y precisa, evitando malentendidos y garantizando que el mensaje llegue de forma adecuada a su destino. Además, la retroalimentación juega un papel crucial al permitir ajustes y mejoras continuas en la comunicación.
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 310px;")
    
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.mb-4
          img.me-auto(src="@/assets/curso/temas/4.svg",style="max-width: 76px;")
        p.mb-0 Por otro lado, las organizaciones deben prestar atención a la implementación de un plan de comunicación que abarque tanto la comunicación interna como externa. Este plan debe estar alineado con la misión, visión y valores de la empresa, utilizando herramientas de gestión que faciliten la transmisión de mensajes y el fortalecimiento de la cultura organizacional. La evolución de la comunicación organizacional y su adaptación a las nuevas realidades son claves para mantener la cohesión y el rendimiento en un entorno laboral en constante cambio.
      .col-lg-7(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 715px;")
    
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
