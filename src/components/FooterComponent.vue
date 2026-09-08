<script setup lang="js">
</script>

<template>
  <footer class="footer">

    <div class="footer-brand">
      <h2>BRISA.FM ♡</h2>
      <p>hecho por Brisa · 2026</p>
    </div>

    <div class="my-socials">

      <!-- INSTAGRAM -->
      <a
        href="https://www.instagram.com/paoye__/"
        target="_blank"
        title="Instagram"
      >
        <img
          src="/images/logo-instagram.png"
          alt="Instagram"
        >
      </a>


      <!-- GITHUB -->
      <a
        class="github-link"
        href="https://github.com/Brisa-nb"
        target="_blank"
        title="GitHub"
      >
      <img
            src="/images/GitHub-Logo.png"
          alt="GitHUb">
      </a>


      <!-- SPOTIFY -->
      <a
        href="https://open.spotify.com/user/31b5mbhyzdw2gzb6ltnsxxws47ye"
        target="_blank"
        title="Spotify"
      >
        <img
          src="/images/spotifyLOGO1.png"
          alt="Spotify"
        >
      </a>

    </div>

  </footer>
</template>

<style scoped>

.footer {
  width: 100%;
  padding: 45px 7%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  background: #2b1d24;
  color: #fff7fa;

  box-sizing: border-box;
}


/* BRISA.FM */

.footer-brand h2 {
  margin: 0;

  font-family: Georgia, serif;
  font-size: 30px;
  font-style: italic;
  font-weight: normal;
}

.footer-brand p {
  margin: 8px 0 0;

  font-size: 12px;
  letter-spacing: 1px;
  opacity: 0.7;
}


/* REDES */

.my-socials {
  display: flex;
  align-items: center;
  gap: 18px;
}

.my-socials a {
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  text-decoration: none;

  transition: 0.3s;
}

.my-socials img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}


/* GITHUB POR AHORA EN TEXTO */

.github-link {
  color: #fff7fa;

  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
}


/* HOVER */

.my-socials a:hover {
  background: rgba(255, 255, 255, 0.18);

  transform: translateY(-4px) scale(1.06);
}


/* CELULAR */

@media (max-width: 700px) {

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

}

</style>