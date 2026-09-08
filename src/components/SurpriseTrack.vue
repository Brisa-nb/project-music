<script setup lang="js">
import { ref } from 'vue'

const revealed = ref(false)

const revelar = () => {
  revealed.value = true
}
</script>

<template>

    <section
    id="pista-oculta"
    class="surprise-track"
    >
    <Transition name="mystery" mode="out-in">

      <div
        v-if="!revealed"
        key="hidden"
        class="hidden-track"
      >

        <p class="hidden-label">
          BRISA.FM / PISTA OCULTA
        </p>

        <div class="question">
          ?
        </div>

        <h2>
          Queda una última canción.
        </h2>

        <p class="hint">
          No todo tenía que aparecer en el índice.
        </p>

        <button
          class="discover"
          @click="revelar"
        >
          DESCUBRIR ↗
        </button>

      </div>

      <div
        v-else
        key="revealed"
        class="revealed-track"
      >

        <div class="reveal-header">

          <p>
            BRISA.FM / PISTA OCULTA
          </p>

          <span>
            UNA ÚLTIMA RECOMENDACIÓN
          </span>

        </div>


        <div class="song-hero">

          <div class="song-image">

            <img
              src="/images/NSQK1.jpg"
              alt="NSQK - Hombre de Bien"
            />

            <span class="image-number">
              04 / PISTA OCULTA
            </span>

          </div>


          <div class="song-title">

            <p class="artist">
              NSQK
            </p>

            <h2>
              HOMBRE
              <span>DE BIEN</span>
            </h2>

            <p class="song-year">
              SEPTIEMBRE · 2026
            </p>

          </div>

        </div>


        <!-- INFORMACIÓN -->
        <div class="editorial">

          <article class="editorial-block">

            <p class="section-label">
              01 / ¿POR QUÉ ESTA CANCIÓN?
            </p>

            <p class="editorial-text">
              <em>Hombre de Bien</em> retrata el desconcierto que queda
              después de una ruptura: mirar atrás, reconocer las decisiones
              tomadas desde entonces y extrañar la intimidad de una etapa
              que ahora solo existe como recuerdo.
            </p>

            <p class="editorial-text">
              Como primer adelanto de una nueva etapa de NSQK, la canción
              abre la puerta a un proyecto marcado por la nostalgia,
              la pérdida y la transformación.
            </p>

          </article>


          <article class="editorial-block rotation">

            <p class="section-label">
              02 / EN MI ROTACIÓN
            </p>

            <p class="rotation-quote">
              “Hay canciones que simplemente llegan
              en el momento correcto.”
            </p>

            <p class="editorial-text">
              <em>Hombre de Bien</em> fue una de esas canciones.
              Conecté muchísimo con ella desde que salió y terminó
              convirtiéndose en una de las canciones que más quería
              recomendar en esta edición.
            </p>

          </article>

        </div>


        <!-- VIDEO -->
        <div class="video-section">

          <div class="video-heading">

            <p class="section-label">
              03 / ESCUCHA
            </p>

            <h3>
              Dale una oportunidad.
            </h3>

          </div>

          <div class="video-wrapper">

            <iframe
              src="https://www.youtube.com/embed/d2QMdIuk7Xk"
              title="NSQK - Hombre de Bien"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

          </div>

        </div>
          <!-- OPINIÓN EXTERNA -->
          <div class="creator-opinion">

            <p class="section-label">
              04 / OTRA PERSPECTIVA
            </p>

            <div class="creator-content">

              <div>
                <span class="creator-name">
                  DIANA ROJAS / TIKTOK
                </span>

                <h3>
                  ¿Qué están diciendo
                  sobre Hombre de Bien?
                </h3>
              </div>

              <div class="creator-info">

                <p>
                  Otra perspectiva sobre
                  <em>Hombre de Bien</em> y esta nueva etapa de NSQK,
                  desde el contenido de una creadora que habla sobre música.
                </p>

                <a
                  href="https://www.tiktok.com/@dianarojas1717/video/7681799505175383314?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER OPINIÓN EN TIKTOK ↗
                </a>

              </div>

            </div>

          </div>

        <!-- CIERRE -->
        <div class="closing">

          <p>
            BRISA.FM · EDICIÓN 01
          </p>

          <span>
            Fin de la pista oculta ♡
          </span>

        </div>

      </div>

    </Transition>

  </section>

</template>


<style scoped>



.surprise-track {
  width: 100%;
  min-height: 85vh;

  box-sizing: border-box;

  background: #0e1720;
  color: #edf1f4;

  overflow: hidden;
}


/* ================================= */
/* PISTA BLOQUEADA                   */
/* ================================= */

.hidden-track {
  min-height: 85vh;

  padding: 80px 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  text-align: center;

  background:
    radial-gradient(
      circle at 50% 40%,
      #263849 0%,
      #151f29 35%,
      #0e1720 75%
    );
}

.hidden-label {
  margin: 0 0 25px;

  font-size: 10px;
  font-weight: bold;

  letter-spacing: 5px;
  text-transform: uppercase;

  opacity: 0.55;
}

.question {
  margin: -30px 0 -45px;

  font-family: Georgia, serif;
  font-size: clamp(190px, 28vw, 380px);
  font-style: italic;

  line-height: 1;

  color: #d7e1e8;

  opacity: 0.07;

  user-select: none;
}

.hidden-track h2 {
  position: relative;
  z-index: 2;

  margin: 0 0 15px;

  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 70px);
  font-weight: normal;

  letter-spacing: -2px;
}

.hint {
  margin: 0 0 35px;

  font-family: Georgia, serif;
  font-size: 17px;
  font-style: italic;

  color: #b9c5ce;

  opacity: 0.7;
}

.discover {
  padding: 14px 22px;

  border: 1px solid rgba(230, 239, 245, 0.5);

  background: transparent;
  color: #edf1f4;

  font-size: 10px;
  font-weight: bold;

  letter-spacing: 3px;

  cursor: pointer;

  transition: 0.3s;
}

.discover:hover {
  background: #edf1f4;
  color: #111a22;

  transform: translateY(-4px);
}




.revealed-track {
  width: 100%;

  padding: 70px 7% 50px;

  box-sizing: border-box;

  background:
    linear-gradient(
      145deg,
      #0d1720 0%,
      #172633 48%,
      #101b25 100%
    );
}


.reveal-header {
  max-width: 1250px;

  margin: 0 auto 55px;
  padding-bottom: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(230, 239, 245, 0.2);
}

.reveal-header p,
.reveal-header span {
  margin: 0;

  font-size: 9px;
  font-weight: bold;

  letter-spacing: 4px;
}

.reveal-header p {
  opacity: 0.55;
}

.reveal-header span {
  color: #b9cad7;
}



.song-hero {
  max-width: 1250px;

  margin: 0 auto 90px;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;

  gap: 60px;

  align-items: center;
}

.song-image {
  position: relative;
}

.song-image img {
  width: 100%;
  height: 620px;

  display: block;

  object-fit: cover;

  filter:
    saturate(0.72)
    contrast(1.05);
}

.image-number {
  position: absolute;

  left: 18px;
  bottom: 18px;

  padding: 8px 10px;

  background: rgba(10, 18, 25, 0.88);

  font-size: 9px;
  font-weight: bold;

  letter-spacing: 3px;
}

.song-title .artist {
  margin: 0 0 20px;

  font-size: 12px;
  font-weight: bold;

  letter-spacing: 7px;

  color: #aebfcb;
}

.song-title h2 {
  margin: 0;

  font-family: Georgia, serif;

  font-size: clamp(80px, 10vw, 150px);
  font-weight: normal;

  line-height: 0.72;

  letter-spacing: -8px;
}

.song-title h2 span {
  display: block;

  margin-left: 60px;

  font-style: italic;

  color: #aebfcb;
}

.song-year {
  margin: 40px 0 0;

  font-size: 10px;

  letter-spacing: 5px;

  opacity: 0.45;
}


.editorial {
  max-width: 1250px;

  margin: 0 auto 100px;

  padding-top: 60px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 90px;

  border-top: 1px solid rgba(230, 239, 245, 0.22);
}

.editorial-block {
  max-width: 520px;
}

.section-label {
  margin: 0 0 25px;

  font-size: 9px;
  font-weight: bold;

  letter-spacing: 4px;

  color: #9fb3c1;
}

.editorial-text {
  margin: 0 0 22px;

  font-family: Georgia, serif;
  font-size: 19px;

  line-height: 1.75;

  color: #d8e0e5;
}

.rotation {
  align-self: end;
}

.rotation-quote {
  margin: 0 0 30px;

  font-family: Georgia, serif;

  font-size: 38px;
  font-style: italic;

  line-height: 1.1;

  letter-spacing: -1px;

  color: #edf1f4;
}


.video-section {
  max-width: 1250px;

  margin: 0 auto 100px;

  padding-top: 60px;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr;

  gap: 60px;

  border-top: 1px solid rgba(230, 239, 245, 0.22);
}

.video-heading h3 {
  margin: 0;

  max-width: 300px;

  font-family: Georgia, serif;

  font-size: 40px;
  font-weight: normal;
  font-style: italic;

  line-height: 1;
}

.video-wrapper {
  width: 100%;
}

.video-wrapper iframe {
  width: 100%;

  aspect-ratio: 16 / 9;

  display: block;

  border: 1px solid rgba(230, 239, 245, 0.25);
}


.closing {
  max-width: 1250px;

  margin: 0 auto;

  padding-top: 25px;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(230, 239, 245, 0.2);
}

.closing p,
.closing span {
  margin: 0;

  font-size: 9px;
  letter-spacing: 3px;

  opacity: 0.5;
}


.mystery-enter-active,
.mystery-leave-active {
  transition:
    opacity 0.65s ease,
    transform 0.65s ease,
    filter 0.65s ease;
}

.mystery-enter-from {
  opacity: 0;

  transform:
    scale(0.97)
    translateY(20px);

  filter: blur(15px);
}

.mystery-leave-to {
  opacity: 0;

  transform: scale(1.03);

  filter: blur(15px);
}

@media (max-width: 900px) {

  .song-hero {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .song-image {
    max-width: 650px;
  }

  .song-image img {
    height: 600px;
  }

  .song-title h2 {
    font-size: 95px;

    letter-spacing: -5px;
  }

  .editorial {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .editorial-block {
    max-width: 700px;
  }

  .video-section {
    grid-template-columns: 1fr;

    gap: 35px;
  }

}


@media (max-width: 600px) {

  .hidden-track {
    padding: 60px 6%;
  }

  .revealed-track {
    padding: 50px 6% 35px;
  }

  .reveal-header {
    flex-direction: column;
    align-items: flex-start;

    gap: 10px;
  }

  .song-image img {
    height: 460px;
  }

  .song-title h2 {
    font-size: 65px;

    letter-spacing: -4px;
  }

  .song-title h2 span {
    margin-left: 25px;
  }

  .rotation-quote {
    font-size: 30px;
  }

  .editorial-text {
    font-size: 17px;
  }

  .video-heading h3 {
    font-size: 34px;
  }

  .closing {
    flex-direction: column;

    gap: 12px;
  }

}
.creator-opinion {
  max-width: 1250px;

  margin: 0 auto 80px;
  padding: 55px 0;

  border-top: 1px solid rgba(230, 239, 245, 0.22);
  border-bottom: 1px solid rgba(230, 239, 245, 0.22);
}

.creator-content {
  display: grid;
  grid-template-columns: 1fr 0.8fr;

  gap: 80px;
  align-items: end;
}

.creator-name {
  font-size: 10px;
  font-weight: bold;

  letter-spacing: 4px;

  color: #9fb3c1;
}

.creator-content h3 {
  max-width: 650px;

  margin: 18px 0 0;

  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 65px);
  font-weight: normal;
  font-style: italic;

  line-height: 1;

  letter-spacing: -2px;
}

.creator-info p {
  margin: 0 0 25px;

  font-family: Georgia, serif;
  font-size: 17px;

  line-height: 1.7;

  color: #cbd6dd;
}

.creator-info a {
  display: inline-block;

  padding-bottom: 6px;

  border-bottom: 1px solid #edf1f4;

  color: #edf1f4;

  font-size: 10px;
  font-weight: bold;

  letter-spacing: 2px;

  text-decoration: none;

  transition: 0.25s;
}

.creator-info a:hover {
  color: #9fb3c1;
  border-color: #9fb3c1;

  transform: translateX(5px);
}

</style>