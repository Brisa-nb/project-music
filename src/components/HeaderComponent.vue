
<script setup lang="js">
import { ref } from 'vue'
import HelpChat from './HelpChat.vue'

defineProps({
  artists: {
    type: Array,
    default: () => []
  }
})

const menuAbierto = ref(false)
const artistasAbierto = ref(false)
const ayudaAbierta = ref(false)

const cerrarMenu = () => {
  menuAbierto.value = false
  artistasAbierto.value = false
}

const irSeccion = (id) => {
  cerrarMenu()

  const seccion = document.getElementById(id)

  if (seccion) {
    seccion.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const irArtista = (id) => {
  irSeccion(`artist-${id}`)
}

const irInicio = () => {
  cerrarMenu()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const irSorpresa = () => {
  irSeccion('pista-oculta')
}

const abrirAyuda = () => {
  cerrarMenu()
  ayudaAbierta.value = true
}
</script>

<template>
  <header class="header" id="inicio">
    <nav class="navbar">
      <button class="logo" @click="irInicio">
        BRISA.FM ♡
      </button>

      <button
        class="menu-toggle"
        @click="menuAbierto = !menuAbierto"
        :aria-expanded="menuAbierto"
        aria-label="Abrir menú"
      >
        {{ menuAbierto ? '✕' : '☰' }}
      </button>

      <div class="nav-links" :class="{ abierto: menuAbierto }">
        <button @click="irInicio">Inicio</button>

        <div class="dropdown-artistas">
          <button
            class="dropdown-boton"
            @click="artistasAbierto = !artistasAbierto"
          >
            Artistas
            <span>{{ artistasAbierto ? '⌃' : '⌄' }}</span>
          </button>

          <div v-if="artistasAbierto" class="dropdown-menu">
            <button
              v-for="artist in artists"
              :key="artist.id"
              @click="irArtista(artist.id)"
            >
              {{ artist.name }}
            </button>
          </div>
        </div>

        <button @click="irSeccion('musica')">Música</button>
        <button @click="irSeccion('eventos')">Eventos</button>
        <button @click="irSeccion('tienda')">Tienda</button>
        <button @click="abrirAyuda">Ayuda</button>

        <button class="registro" @click="irSeccion('registro')">
          ♡ Mi cuenta
        </button>

        <button
          class="mystery-link"
          @click="irSorpresa"
          title="Pista sorpresa"
        >
          ?
        </button>
      </div>
    </nav>

    <div class="hero-content">
      <p class="edition">
        BRISA.FM · EDICIÓN 01 · SEPTIEMBRE 2026
      </p>

      <p class="issue">LA EDICIÓN MUSICAL</p>

      <h1>
        Esto merece
        <span>una escucha.</span>
      </h1>

      <p class="description">
        Una selección de artistas y canciones que han
        estado sonando últimamente en mi playlist
        y quizá terminen en la tuya.
      </p>

      <button
        class="explore"
        :disabled="!artists.length"
        @click="irArtista(artists[0]?.id)"
      >
        ↓ EXPLORA LA EDICIÓN
      </button>
    </div>
  </header>

  <HelpChat
    v-if="ayudaAbierta"
    @cerrar="ayudaAbierta = false"
  />
</template>

<style scoped>
.header {
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%, #ffd6e5 0%, transparent 30%),
    radial-gradient(circle at 80% 40%, #f3a9c2 0%, transparent 25%),
    linear-gradient(135deg, #fff9fb, #f9edf1);
  color: #2b1d24;
}

.navbar {
  position: relative;
  z-index: 1000;
  width: 100%;
  padding: 18px 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  background: rgba(255, 249, 251, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(80, 40, 55, 0.15);
}

.logo {
  border: none;
  background: none;
  font-family: Georgia, serif;
  font-size: 21px;
  font-style: italic;
  color: #2d1c24;
  cursor: pointer;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-links button {
  border: none;
  background: none;
  padding: 6px 0;
  font-size: 11px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #4b303a;
  cursor: pointer;
  transition: 0.25s;
}

.nav-links button:hover {
  color: #bd4d77;
  transform: translateY(-2px);
}

.dropdown-artistas {
  position: relative;
}

.nav-links .dropdown-boton {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-boton span {
  font-size: 15px;
  color: #a64066;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 190px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #fff9fb;
  border: 1px solid #f3c3d4;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(166, 64, 102, 0.15);
  z-index: 1100;
}

.nav-links .dropdown-menu button {
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #4b303a;
  text-align: left;
  white-space: nowrap;
}

.nav-links .dropdown-menu button:hover {
  background: #ffd6e5;
  color: #a64066;
}

.nav-links .registro {
  padding: 10px 16px;
  border-radius: 20px;
  background: linear-gradient(110deg, #ffd6e5, #f3a9c2);
  color: #692d44;
  font-weight: bold;
  white-space: nowrap;
}

.nav-links .registro:hover {
  background: #a64066;
  color: white;
}

.nav-links .mystery-link {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid #a64066;
  border-radius: 50%;
  color: #a64066;
  font-family: Georgia, serif;
  font-size: 15px;
  font-style: italic;
}

.nav-links .mystery-link:hover {
  background: #a64066;
  color: white;
  transform: rotate(8deg) scale(1.08);
}

.hero-content {
  min-height: calc(100vh - 70px);
  padding: 80px 8% 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.edition {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9b4967;
}

.issue {
  margin: 0 0 35px;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #5a2638;
}

h1 {
  margin: 0;
  max-width: 950px;
  font-family: Georgia, serif;
  font-size: clamp(70px, 9vw, 135px);
  font-weight: normal;
  line-height: 0.88;
  letter-spacing: -5px;
}

h1 span {
  display: block;
  font-style: italic;
  color: #a64066;
}

.description {
  max-width: 620px;
  margin: 38px 0 35px;
  font-size: 17px;
  line-height: 1.7;
  color: #654b55;
}

.explore {
  width: fit-content;
  padding: 0 0 7px;
  border: none;
  border-bottom: 1px solid #2b1d24;
  background: transparent;
  color: #2b1d24;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.25s;
}

.explore:hover {
  color: #a64066;
  border-color: #a64066;
  transform: translateY(3px);
}

.explore:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  color: #a64066;
  font-size: 27px;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .navbar {
    flex-wrap: wrap;
    padding: 16px 6%;
  }

  .menu-toggle {
    display: block;
    margin-left: auto;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 12px;
    padding: 15px 0;
  }

  .nav-links.abierto {
    display: flex;
  }

  .nav-links button {
    padding: 12px;
    text-align: center;
    border-radius: 12px;
  }

  .dropdown-artistas {
    width: 100%;
  }

  .nav-links .dropdown-boton {
    width: 100%;
    justify-content: center;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    margin-top: 10px;
    box-shadow: none;
  }

  .nav-links .dropdown-menu button {
    text-align: center;
  }

  .nav-links .mystery-link {
    align-self: center;
  }

  .hero-content {
    padding: 60px 7%;
  }

  h1 {
    font-size: 72px;
    letter-spacing: -3px;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 15px 5%;
  }

  .hero-content {
    padding: 50px 6%;
  }

  h1 {
    font-size: clamp(42px, 10vw, 54px);
    letter-spacing: -2px;
  }

  .description {
    font-size: 15px;
  }

  .edition {
    font-size: 9px;
    letter-spacing: 2px;
  }

  .issue {
    font-size: 10px;
    letter-spacing: 3px;
  }
}
</style>
