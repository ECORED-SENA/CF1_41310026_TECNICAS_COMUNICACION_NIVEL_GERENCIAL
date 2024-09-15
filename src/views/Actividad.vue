<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas de comunicación en el nivel gerencial',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con la comunicación organizacional, incluyendo sus elementos fundamentales, tipos de comunicación, herramientas de gestión y la influencia del clima y cultura organizacional en el entorno laboral.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito de la comunicación en una organización?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmitir ideas y conocimientos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Reducir costos operativos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar la cantidad de reuniones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento de la comunicación se encarga de enviar el mensaje?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Receptor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Emisor.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Canal.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de comunicación se realiza entre miembros de diferentes niveles jerárquicos?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicación horizontal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunicación diagonal.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Comunicación descendente.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Comunicación ascendente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un ejemplo de canal en la comunicación?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El hilo telefónico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El mensaje.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El emisor.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El contexto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta de gestión es útil para difundir información importante de manera rápida y personalizada?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manuales de estilo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carta al personal.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Reuniones.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Publicación institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué término describe la información de regreso que permite la interacción continua en la comunicación?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retroalimentación.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Interferencia.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Referente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el principal motor que define la razón de ser de una organización?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Misión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Visión.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Valores.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Filosofía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de comunicación se utiliza principalmente para transmitir órdenes y directrices desde la jerarquía más alta a la más baja?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicación descendente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comunicación horizontal.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Comunicación ascendente.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Comunicación externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué término se refiere al conjunto de símbolos, valores y creencias compartidas dentro de una organización?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clima organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cultura organizacional.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Contexto organizacional.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Código organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramienta de gestión se utiliza para mantener la comunicación continua entre los empleados y la organización mediante preguntas, sugerencias o temores?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reuniones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuadernillo de bienvenida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Línea abierta o línea directa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carteleras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
