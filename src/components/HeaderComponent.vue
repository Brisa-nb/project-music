<script setup lang="js">
defineProps({
  artists: Array
})

const irArtista = (id) => {
  const seccion = document.getElementById(`artist-${id}`)

  if (seccion) {
    seccion.scrollIntoView({
      behavior: "smooth"
    })
  }
}

const irInicio = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
const irSorpresa = () => {
  const seccion = document.getElementById("pista-oculta")

  if (seccion) {
    seccion.scrollIntoView({
      behavior: "smooth"
    })
  }
}
</script>

<template>
  <header class="header">

    <nav class="navbar">

      <button
        class="logo"
        @click="irInicio"
      >
        BRISA.FM ♡
      </button>

      <div class="nav-links">

        <button
          v-for="artist in artists"
          :key="artist.id"
          @click="irArtista(artist.id)"
        >
          {{ artist.name }}
        </button>

      </div>
         <button
         class="mystery-link"
        @click="irSorpresa"
         title="¿?"
        >
  ?
</button>

    </nav>

    <div class="hero-content">

      <p class="edition">
        BRISA.FM · EDICIÓN 01 · SEPTIEMBRE 2026
      </p>

      <p class="issue">
        LA EDICIÓN MUSICAL
      </p>

      <h1>
        Esto merece
        <span>una escucha.</span>
      </h1>

      <p class="description">
        Una selección de artistas y canciones que han estado sonando
        últimamente en mi playlist y quizá terminen en la tuya.
      </p>

      <button
        class="explore"
        @click="irArtista(1)"
      >
        ↓ EXPLORA LA EDICIÓN
      </button>

    </div>

  </header>
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
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  padding: 18px 6%;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links button {
  border: none;
  background: none;

  padding: 6px 0;

  font-size: 11px;
  letter-spacing: 1.7px;
  text-transform: uppercase;

  color: #4b303a;

  cursor: pointer;

  transition: 0.25s;
}

.nav-links button:hover {
  color: #bd4d77;
  transform: translateY(-2px);
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

@media (max-width: 900px) {

  .navbar {
    flex-direction: column;
    align-items: flex-start;

    gap: 15px;
  }

  .nav-links {
    width: 100%;

    overflow-x: auto;
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
    font-size: 54px;
  }

  .description {
    font-size: 15px;
  }

}
.mystery-link {
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #a64066 !important;
  border-radius: 50%;

  color: #a64066 !important;

  font-family: Georgia, serif;
  font-size: 15px !important;
  font-style: italic;

  transition: 0.3s;
}

.mystery-link:hover {
  background: #a64066 !important;
  color: white !important;

  transform: rotate(8deg) scale(1.08) !important;
}

</style>