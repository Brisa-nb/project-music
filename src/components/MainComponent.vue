<script setup lang="js">
import { onMounted, nextTick } from 'vue'

defineProps({
  artists: Array
})

const irArriba = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

onMounted(async () => {
  await nextTick()

  setTimeout(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load()
    }
  }, 1500)
})
</script>

<template>
  <main class="fan-page">

    <section
      v-for="artist in artists"
      :key="artist.id"
      :id="'artist-' + artist.id"
      class="artist-board"
      :class="artist.theme"
    >

      <div
        class="artist-hero"
        :style="{ backgroundImage: `url(${artist.background})` }"
      >
        <div class="artist-overlay">

          <p class="edition">
            BRISA.FM / ARTISTA 0{{ artist.id }}
          </p>

          <h1>{{ artist.name }}</h1>

          <p class="artist-subtitle">
            {{ artist.genre }} · {{ artist.vibe }}
          </p>

          <div class="artist-socials">

            <a
              :href="artist.appleMusic"
              target="_blank"
              title="Apple Music"
            >
              <img
                src="/images/Apple-Music-Logo-PNG.png"
                alt="Apple Music"
              >
            </a>

            <a
              :href="artist.youtube"
              target="_blank"
              title="YouTube"
            >
              <img
                src="/images/logo-youtube.png"
                alt="YouTube"
              >
            </a>

            <a
              :href="artist.spotify"
              target="_blank"
              title="Spotify"
            >
              <img
                src="/images/spotifyLOGO1.png"
                alt="Spotify"
              >
            </a>

          </div>

        </div>
      </div>
<div class="moodboard">

  <div class="main-photo">
    <img :src="artist.image" :alt="artist.name">
  </div>

  <div class="small-photo photo-two">
    <img :src="artist.image2" :alt="artist.name">
  </div>

  <div class="small-photo photo-three">
    <img :src="artist.image3" :alt="artist.name">
  </div>

  <div class="quote-card">
    <span class="quote-mark">“</span>

    <p class="quote-text">
      {{ artist.quote }}
    </p>

    <p class="quote-song">
      {{ artist.quoteSong }}
    </p>
  </div>

</div>
    <section class="about">

  <div class="about-content">

    <p class="label">
      EL MUNDO DE {{ artist.album }}
    </p>

    <p class="description">
      {{ artist.description }}
    </p>

    <div class="details">

      <div class="detail-item">
        <strong>LECTURA DEL ÁLBUM</strong>
        <span>{{ artist.reading }}</span>
      </div>

      <div class="detail-item">
        <strong>SONIDO</strong>
        <span>{{ artist.sound }}</span>
      </div>

      <div class="detail-item">
        <strong>IMAGEN</strong>
        <span>{{ artist.visual }}</span>
      </div>

      <div class="detail-item">
        <strong>PIEZA CLAVE</strong>
        <span>{{ artist.keyTrack }}</span>
      </div>

    </div>

  </div>

  <aside
    v-if="artist.xPost"
    class="x-section"
  >
    <p class="label">ÚLTIMO EN X</p>

    <div class="x-card">
      <blockquote class="twitter-tweet">
        <a :href="artist.xPost"></a>
      </blockquote>
    </div>
  </aside>

</section>



      <section class="videos-section">

        <p class="label">VIDEOS</p>

        <div class="videos-grid">

          <div
            v-for="(video, index) in artist.videos"
            :key="index"
            class="video-item"
          >

            <iframe
              :src="video.url"
              :title="video.title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p class="video-title">
              {{ video.title }}
            </p>

          </div>

        </div>

      </section>

    </section>

    <button
      class="boton-arriba"
      @click="irArriba"
      title="Volver al inicio"
    >
      ↑
    </button>

  </main>
</template>
<style scoped>

.fan-page {
  padding: 60px 6%;
  background: #fff7fa;
}

.artist-board {
  max-width: 1250px;
  margin: 0 auto 100px;
}

.artist-hero {
  min-height: 430px;
  margin-bottom: 45px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
}

.artist-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(8px);
  background: rgba(20, 10, 15, 0.42);
}

.artist-overlay {
  position: relative;
  z-index: 2;
  min-height: 430px;
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  color: white;
}

.edition {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: white;
  opacity: 1;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
}

.artist-overlay h1 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 85px;
  font-weight: normal;
  line-height: 1;
}

.artist-subtitle {
  margin: 12px 0 22px;
  font-size: 15px;
}

.artist-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}

.artist-socials a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  transition: 0.25s;
}

.artist-socials img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.artist-socials a:hover {
  transform: translateY(-4px) scale(1.06);
  background: white;
}

.moodboard {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 280px 280px;
  gap: 18px;
}

.moodboard img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.main-photo {
  grid-column: 1;
  grid-row: 1 / 3;
}

.main-photo img {
  border-radius: 30px 0 0 30px;
}

.photo-two {
  grid-column: 2;
  grid-row: 1;
}

.photo-three {
  grid-column: 3;
  grid-row: 1 / 3;
}

.small-photo img {
  border-radius: 18px;
}

.quote-card {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  padding: 28px 30px;
  background: transparent;
  color: #7a2946;
  border-left: 2px solid #7a2946;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote-mark {
  font-family: Georgia, serif;
  font-size: 58px;
  line-height: 0.6;
  opacity: 0.18;
  margin-bottom: 18px;
}

.quote-text {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 27px;
  line-height: 1.2;
  font-weight: normal;
}

.quote-song {
  margin: 20px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 3px;
  opacity: 0.55;
}

.label {
  margin: 0;
  font-size: 11px;
  letter-spacing: 3px;
  opacity: 0.7;
}

.about {
  margin-top: 65px;
  padding: 55px 0;
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(320px, 0.8fr);
  gap: 60px;
  align-items: start;
  border-top: 1px solid #c99cab;
}

.about-content {
  width: 100%;
  max-width: none;
}

.description {
  margin: 20px 0 45px;
  font-size: 19px;
  line-height: 1.8;
}

.details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 50px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid rgba(90, 38, 56, 0.22);
}

.detail-item strong {
  font-size: 10px;
  letter-spacing: 2px;
}

.detail-item span {
  font-family: Georgia, serif;
  font-size: 18px;
}

.x-section {
  width: 100%;
  min-width: 0;
}

.x-section > .label {
  display: block;
  margin-bottom: 15px;
}

.x-card {
  width: 100%;
  max-height: 520px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  box-sizing: border-box;
  background: white;
  border: 1px solid rgba(90, 38, 56, 0.15);
  border-radius: 18px;
}

.twitter-tweet {
  margin: 0 auto !important;
}

.videos-section {
  width: 100%;
  margin: 30px 0 80px;
}

.videos-section > .label {
  display: block;
  margin-bottom: 22px;
}

.videos-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.video-item {
  width: 100%;
  min-width: 0;
}

.video-item iframe {
  width: 100%;
  height: 260px;
  display: block;
  border: none;
  border-radius: 18px;
}

.video-title {
  margin: 12px 0 0;
  font-family: Georgia, serif;
  font-size: 19px;
  font-style: italic;
  color: #3a252d;
}

.kali {
  background:
    linear-gradient(
      180deg,
      #fff7fa 0%,
      #fbeaf0 48%,
      #fff7fa 100%
    );

  color: #3b202b;
  padding: 45px;
  border-radius: 30px;
}

.kali .artist-hero {
  border-radius: 30px;
}

.kali .artist-hero::before {
  background: rgba(40, 15, 30, 0.4);
  backdrop-filter: blur(9px);
}

.kali .edition {
  color: #ffd7e6;
  font-weight: 800;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.75);
}

.kali .artist-overlay h1 {
  font-family: Georgia, serif;
  font-style: italic;
  letter-spacing: -3px;
  color: white;
}

.kali .artist-subtitle {
  color: white;
}

.kali .artist-socials a {
  background: rgba(255, 248, 251, 0.95);
  box-shadow: 0 6px 20px rgba(103, 41, 65, 0.18);
}

.kali .artist-socials a:hover {
  background: white;
  transform: translateY(-5px) scale(1.07);
}

.kali .main-photo img {
  border-radius: 30px 0 0 30px;
}

.kali .small-photo img {
  border-radius: 20px;
}

.kali .quote-card {
  background: #f7dce6;
  color: #7a2946;
  border-left: none;
  border-radius: 22px;
}

.kali .quote-mark {
  color: #7a2946;
  opacity: 0.15;
}

.kali .about {
  border-top: 1px solid #b66b86;
}

.kali .detail-item {
  border-top: 1px solid rgba(122, 41, 70, 0.25);
}

.kali .x-card {
  border-radius: 20px;
  border: 1px solid rgba(122, 41, 70, 0.15);
}

.kali .video-item iframe {
  border-radius: 20px;
}

.kali .video-title {
  color: #5f2940;
}

.rocky {
  background: #d9d7d0;
  color: #101010;
  padding: 45px;
  border: 4px solid #111;
}

.rocky .artist-hero {
  border-radius: 0;
  border: 3px solid #111;
}

.rocky .artist-hero::before {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);
}

.rocky .artist-overlay h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 100px;
  line-height: 0.85;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.rocky .edition {
  display: inline-block;
  width: fit-content;
  padding: 7px 11px;
  margin-bottom: 15px;
  background: #111;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 4px;
  text-shadow: none;
}

.rocky .artist-subtitle {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.rocky .artist-socials a {
  border-radius: 0;
  border: 2px solid #111;
  background: white;
}

.rocky .artist-socials a:hover {
  background: #111;
  transform: rotate(-4deg) translateY(-4px);
}

.rocky .moodboard {
  grid-template-columns: 1.4fr 1fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 10px;
}

.rocky .main-photo {
  transform: rotate(-1deg);
}

.rocky .main-photo img,
.rocky .small-photo img {
  border-radius: 0;
}

.rocky .quote-card {
  background: #111;
  color: white;
  border: none;
  border-radius: 0;
  transform: rotate(1deg);
}

.rocky .quote-mark {
  color: white;
  opacity: 0.15;
}

.rocky .quote-text {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 32px;
  line-height: 1;
  text-transform: uppercase;
}

.rocky .quote-song {
  color: white;
}

.rocky .about {
  border-top: 5px solid #111;
}

.rocky .detail-item {
  border-top: 3px solid #111;
}

.rocky .detail-item strong {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
}

.rocky .x-card {
  background: #f4f3ef;
  border: 3px solid #111;
  border-radius: 0;
}

.rocky .video-item iframe {
  border-radius: 0;
  border: 2px solid #111;
}

.rocky .video-title {
  color: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
}

.kanye {
  background: #eee9df;
  color: #111;
  padding: 45px;
}

.kanye .artist-hero {
  border-radius: 0;
  border: 2px solid #111;
}

.kanye .artist-hero::before {
  backdrop-filter: blur(9px);
  background: rgba(20, 15, 10, 0.45);
}

.kanye .artist-overlay {
  padding: 50px;
}

.kanye .artist-overlay h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 92px;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -6px;
  text-transform: uppercase;
  max-width: 850px;
}

.kanye .edition {
  display: inline-block;
  width: fit-content;
  margin-bottom: 18px;
  padding: 7px 10px;
  background: #e76f2e;
  color: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: none;
}

.kanye .artist-subtitle {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.kanye .artist-socials a {
  background: #eee9df;
  border: 2px solid #111;
  border-radius: 0;
}

.kanye .artist-socials a:hover {
  background: #e76f2e;
  transform: translateY(-4px);
}

.kanye .moodboard {
  grid-template-columns: 1.5fr 0.85fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 10px;
}

.kanye .main-photo {
  transform: none;
}

.kanye .main-photo img,
.kanye .small-photo img {
  border-radius: 0;
}

.kanye .main-photo img {
  filter: contrast(1.05);
}

.kanye .photo-two {
  position: relative;
}

.kanye .photo-two::after {
  content: "THE LIFE OF PABLO";
  position: absolute;
  left: 15px;
  bottom: 15px;
  padding: 7px 9px;
  background: #e76f2e;
  color: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
}

.kanye .quote-card {
  position: relative;
  background: #e76f2e;
  color: #111;
  border: none;
  border-radius: 0;
  padding: 32px;
  overflow: hidden;
}

.kanye .quote-card::before {
  content: "PABLO PABLO PABLO PABLO";
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: 0.18;
}

.kanye .quote-mark {
  display: none;
}

.kanye .quote-text {
  position: relative;
  z-index: 2;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -1px;
}

.kanye .quote-song {
  position: relative;
  z-index: 2;
  color: #111;
  opacity: 0.65;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
}

.kanye .about {
  border-top: 5px solid #111;
}

.kanye .about .label {
  display: inline-block;
  padding: 6px 9px;
  background: #111;
  color: #eee9df;
  font-weight: bold;
}

.kanye .description {
  max-width: 820px;
  font-family: Georgia, serif;
  font-size: 21px;
  line-height: 1.7;
}

.kanye .detail-item {
  border-top: 3px solid #111;
}

.kanye .detail-item strong {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  color: #e76f2e;
}

.kanye .detail-item span {
  color: #111;
}

.kanye .x-card {
  background: #f6f2e9;
  border: 2px solid #111;
  border-radius: 0;
}

.kanye .videos-section {
  border-top: 5px solid #111;
  padding-top: 30px;
}

.kanye .videos-section > .label {
  display: inline-block;
  padding: 7px 10px;
  background: #e76f2e;
  color: #111;
  font-weight: 900;
}

.kanye .video-item iframe {
  border-radius: 0;
  border: 2px solid #111;
}

.kanye .video-title {
  margin-top: 10px;
  color: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
}

.boton-arriba {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 52px;
  height: 52px;
  border: 1px solid #5a2638;
  border-radius: 50%;
  background: rgba(255, 248, 251, 0.92);
  color: #5a2638;
  font-family: Georgia, serif;
  font-size: 25px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
}

.boton-arriba:hover {
  background: #5a2638;
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 1000px) {

  .moodboard,
  .rocky .moodboard,
  .kanye .moodboard {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .main-photo {
    grid-column: 1 / -1;
    grid-row: auto;
  }

  .main-photo img {
    height: 500px;
    border-radius: 20px;
  }

  .photo-two,
  .photo-three,
  .quote-card {
    grid-column: auto;
    grid-row: auto;
  }

  .small-photo img {
    height: 320px;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .x-section {
    max-width: 600px;
  }

  .x-card {
    max-height: 500px;
  }

  .videos-grid {
    grid-template-columns: 1fr;
  }

  .video-item iframe {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .details {
    grid-template-columns: 1fr;
  }

  .artist-overlay h1,
  .rocky .artist-overlay h1 {
    font-size: 60px;
  }

  .kanye .artist-overlay h1 {
    font-size: 65px;
    letter-spacing: -4px;
  }

  .kali,
  .rocky,
  .kanye {
    padding: 30px;
  }
}

@media (max-width: 650px) {

  .fan-page {
    padding: 30px 4%;
  }

  .artist-board {
    margin-bottom: 70px;
  }

  .artist-overlay {
    padding: 30px;
  }

  .artist-overlay h1,
  .rocky .artist-overlay h1 {
    font-size: 46px;
  }

  .kanye .artist-overlay h1 {
    font-size: 47px;
    letter-spacing: -3px;
  }

  .moodboard,
  .rocky .moodboard,
  .kanye .moodboard {
    grid-template-columns: 1fr;
  }

  .main-photo,
  .photo-two,
  .photo-three,
  .quote-card {
    grid-column: 1;
    grid-row: auto;
  }

  .main-photo img,
  .small-photo img {
    height: auto;
    border-radius: 16px;
  }

  .quote-card {
    padding: 25px;
  }

  .quote-text {
    font-size: 24px;
  }

  .x-card {
    max-height: 500px;
  }

  .kali,
  .rocky,
  .kanye {
    padding: 20px;
  }

  .kanye .quote-text {
    font-size: 25px;
  }
}

</style>