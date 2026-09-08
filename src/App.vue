<script setup lang="js" set up>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import SurpriseTrack from './components/SurpriseTrack.vue';

const artists =[
  {
  id: 1,
  name: "Kali Uchis",
  genre: "R&B / Pop",
  album: "Sincerely",
  song: "Sunshine & Rain",
  vibe: "Soñadora / Romántica",
  theme: "kali",

  description: "Sincerely, es una carta íntima sobre el amor, la vulnerabilidad y el crecimiento personal. Entre melodías suaves, románticas y soñadoras, Kali Uchis explora la conexión, la sanación y la búsqueda de una vida más plena, dejando atrás aquello que ya no pertenece a su mundo.",
  
  background: "/images/kali3.jpg",

  image: "/images/kali3.jpg",
  image2: "/images/kali.img",
  image3: "/images/kali4.jpg",

  era: "Sincerely,",
  words: "Íntimo · romántico · soñador",
  listenWhen: "De noche / con audífonos",

  instagram: "https://www.instagram.com/kaliuchis/",
  applemusic:"https://music.apple.com/us/artist/kali-uchis/894731301",
  youtube: "https://www.youtube.com/@KALIUCHIS",
  spotify: "https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM",
  xPost: "https://x.com/KALIUCHIS/status/1901665048499786132?s=20",

 videos: [
  {
    title: "I Wish You Roses",
    url: "https://www.youtube.com/embed/-Y7zc0eO26k"
  },
  {
    title: "After The Storm",
    url: "https://www.youtube.com/embed/9f5zD7ZSNpQ"
  },
  {
    title: "Sunshine & Rain",
    url: "https://www.youtube.com/embed/yc8_dYPx4ao"
  }
],
  quote: "When will I forgive my heart for always gettin’ me in trouble?",
  quoteSong: "SUNSHINE & RAIN",
  reading: "Una obra íntima sobre el amor, la vulnerabilidad y la reconstrucción personal.",
  sound: "R&B suave, soul y pop con una producción cálida, delicada y envolvente.",
  visual: "Una estética romántica y etérea que refuerza la sensación de diario personal del álbum.",
  keyTrack: "Sunshine & Rain — una de las canciones que mejor resume el tono emocional de Sincerely,.",
},
  {
    id: 2,
    name: "A$AP Rocky",
    genre: "Hip-Hop / Experimental",
    album: "DON'T BE DUMB",
    song: "DON'T BE DUMB / TRIP BABY",
    vibe: "NYC / Fashion / Urban / Punk",
    theme: "rocky",

    description: "DON’T BE DUMB explora el universo de A$AP Rocky entre Harlem, el hip-hop, la alta costura y una estética experimental. A través de distintas facetas de su identidad, el álbum refleja su evolución como artista y la forma en que todas esas versiones construyen al Rocky que conocemos hoy.",

    
    background: "/images/rocky1.jpg",

    // Fotos normales del moodboard
    image: "/images/rocky1.jpg",
    image2: "/images/rocky2.jpg",
    image3: "/images/rocky4.jpg",

    era: "DON'T BE DUMB",
    words: "Caótico · urbano · experimental",
    listenWhen: "De noche / con audífonos",

    instagram: "https://www.instagram.com/asaprocky/",
    applemusic:"https://music.apple.com/us/artist/a%24ap-rocky/481488005",
    youtube: "https://www.youtube.com/@ASAPROCKYUPTOWN",
    spotify: "https://open.spotify.com/intl-es/artist/13ubrt8QOOCPljQ2FL1Kca",
    xPost: "https://x.com/asvpxrocky/status/2094735259250090133?s=20",

    videos: [
  {
    title: "L$D",
    url: "https://www.youtube.com/embed/Gx4JEBwVlXo"
  },
  {
    title: "Fashion Killa",
    url: "https://www.youtube.com/embed/F6VfsJ7LAlE"
  },
  {
    title: "DON'T BE DUMB / TRIP BABY",
    url: "https://www.youtube.com/embed/SWOUqPpYDT8"
  }
],

    quote: "Dreamin of sharing love",
    reading: "DON'T BE DUMB funciona como una declaración de identidad: distintas versiones de Rocky conviven entre música, moda y cultura urbana.",
    sound: "Hip-hop experimental con cambios de textura, energía punk y una producción más agresiva y fragmentada.",
    visual: "Harlem, alta moda, collage urbano y una dirección visual cruda que mezcla lujo con caos.",
    keyTrack: "DON'T BE DUMB / TRIP BABY — una muestra del enfoque cambiante del disco, donde Rocky juega con estructuras, texturas y distintas facetas de su sonido.",
  },

  {
  id: 3,
  name: "Kanye West",
  genre: "Hip-Hop / Rap / Experimental",
  album: "The Life of Pablo",
  song: "Saint Pablo",
  vibe: "Caótico / Espiritual / Introspectivo",
  theme: "kanye",

  description: "The Life of Pablo presenta a Kanye West en constante contradicción: entre la fe, el ego, la fama, la familia y sus propios excesos. El álbum cambia de dirección constantemente y convierte esa inestabilidad en parte de su identidad, como si la obra nunca terminara de estar completamente cerrada.",

  background: "/images/kanye1.jpg",

  image: "/images/kanye1.jpg",
  image2: "/images/kanye2.jpg",
  image3: "/images/kanye6.jpg",

  era: "The Life of Pablo",
  words: "Contradictorio · espiritual · impredecible",
  listenWhen: "Cuando necesito pensar demasiado",

  appleMusic: "https://music.apple.com/us/artist/kanye-west/2715720",
  youtube: "https://www.youtube.com/channel/UCs6eXM7s8Vl5WcECcRHc2qQ",
  spotify: "https://open.spotify.com/intl-es/artist/5K4W6rqBFWDnAN6FQUkS6x",
  xPost: "https://x.com/kanyewest/status/2089280975880814651?s=20",

  videos: [
    {
      title: "Runaway",
      url: "https://www.youtube.com/embed/Bm5iA4Zupek",
    },
    {
      title: "Can't Tell Me Nothing",
      url: "https://www.youtube.com/embed/E58qLXBfLrs"
    },
    {
      title: "Saint Pablo",
      url: "https://www.youtube.com/embed/w9rzz4pDFwA"
    }
  ],

  quote: "THE FEELINGS DON’T REALLY  GO AWAY",
  quoteSong: "Waves",

  reading: "Un retrato fragmentado de un artista dividido entre la espiritualidad, la fama, el ego y la necesidad de encontrar sentido dentro de su propio caos.",

  sound: "Hip-hop atravesado por gospel, soul, samples y cambios abruptos de producción que hacen que el disco se sienta vivo e impredecible.",

  visual: "Una estética deliberadamente cruda y desordenada, entre fotografía, moda, religión y cultura digital, que convierte la imperfección en parte de la identidad de la era.",

  keyTrack: "Saint Pablo — una pieza especialmente introspectiva que funciona casi como cierre y reflexión sobre la fama, la fe y las contradicciones que atraviesan el álbum."
}


]

</script>

<template>
  <div class="app">
    <HeaderComponent :artists="artists"></HeaderComponent>
   <MainComponent :artists="artists"></MainComponent> 
   <SurpriseTrack></SurpriseTrack>
    <FooterComponent></FooterComponent>

</div>
</template>
<style scoped>
.app{
  min-height: 100vh;
   background:
    radial-gradient(circle at top left, #ffdce8 0%, transparent 35%),
    radial-gradient(circle at bottom right, #f5b8cf 0%, transparent 30%),
    #fff8fb;
  color: #2b1d24;
  font-family: Arial, Helvetica, sans-serif;
}

</style>