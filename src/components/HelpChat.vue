
<script setup lang="js">
import { ref, nextTick } from 'vue'
import { useHelpChat } from '../composables/useHelpChat'

const emit = defineEmits(['cerrar'])

const { preguntas, mensajes, seleccionarPregunta } = useHelpChat()

const conversacion = ref(null)

const preguntar = async (opcion) => {
  await seleccionarPregunta(opcion)
  await nextTick()

  if (conversacion.value) {
    conversacion.value.scrollTop = conversacion.value.scrollHeight
  }
}
</script>

<template>
  <div class="fondo-chat" @click.self="emit('cerrar')">
    <div class="chat">

      <div class="chat-header">
        <div>
          <h2>BRISA.FM</h2>
          <p>Centro de ayuda</p>
        </div>

        <button @click="emit('cerrar')">
          Cerrar
        </button>
      </div>

      <div class="conversacion" ref="conversacion">
        <div
          v-for="mensaje in mensajes"
          :key="mensaje.id"
          class="mensaje"
          :class="{ usuario: mensaje.mio }"
        >
          <p>{{ mensaje.texto }}</p>

          <img
            v-if="mensaje.imagen"
            :src="mensaje.imagen"
            alt="GIF del artista"
            class="gif-artista"
          />
        </div>
      </div>

      <div class="opciones">
        <p>Preguntas frecuentes</p>

        <button
          v-for="(opcion, index) in preguntas"
          :key="index"
          @click="preguntar(opcion)"
        >
          {{ opcion.pregunta }}
        </button>

        <a
          href="https://giphy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by GIPHY
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fondo-chat {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(43, 29, 36, 0.6);
}

.chat {
  width: 100%;
  max-width: 550px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  background: #fff9fb;
  border-radius: 20px;
  overflow: hidden;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #a64066;
  color: white;
}

.chat-header h2 {
  margin: 0;
  font-family: Georgia, serif;
}

.chat-header p {
  margin: 5px 0;
  font-size: 13px;
}

.chat-header button {
  background: transparent;
  border: 1px solid white;
  border-radius: 12px;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}

.conversacion {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  overflow-y: auto;
}

.mensaje {
  align-self: flex-start;
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 15px;
  background: #f3d6e1;
  color: #4b303a;
}

.mensaje p {
  margin: 0;
  line-height: 1.5;
}

.usuario {
  align-self: flex-end;
  background: #a64066;
  color: white;
}

.gif-artista {
  width: 100%;
  max-width: 250px;
  margin-top: 10px;
  border-radius: 10px;
}

.opciones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px;
  border-top: 1px solid #f3c3d4;
  max-height: 230px;
  overflow-y: auto;
}

.opciones p {
  width: 100%;
  margin: 0 0 5px;
  font-size: 13px;
}

.opciones button {
  padding: 10px;
  background: white;
  color: #a64066;
  border: 1px solid #e9b1c6;
  border-radius: 12px;
  cursor: pointer;
}

.opciones button:hover {
  background: #f3d6e1;
}

.opciones a {
  width: 100%;
  text-align: right;
  font-size: 11px;
  color: #a64066;
}

@media (max-width: 600px) {
  .chat {
    height: 85vh;
  }
}
</style>
