
import { ref } from 'vue'

interface Pregunta {
  pregunta: string
  respuesta: string
  artista?: string
}

interface Mensaje {
  id: number
  texto: string
  mio: boolean
  imagen?: string
}

export function useHelpChat() {
  const preguntas: Pregunta[] = [
    {
      pregunta: '¿Qué es BRISA.FM?',
      respuesta: 'Es un espacio donde puedes descubrir artistas, música y recomendaciones.'
    },
    {
      pregunta: '¿Quién es Kali Uchis?',
      respuesta: 'Kali Uchis es una cantante que combina R&B, soul y pop. Es una de las artistas de esta edición.',
      artista: 'Kali Uchis'
    },
    {
      pregunta: '¿Quién es A$AP Rocky?',
      respuesta: 'Es un rapero estadounidense conocido por su música, estilo y participación en la moda.',
      artista: 'ASAP Rocky'
    },
    {
      pregunta: '¿Dónde encuentro la música?',
      respuesta: 'Puedes visitar nuestra sección Música para descubrir canciones y recomendaciones.'
    },
    {
      pregunta: '¿Dónde puedo ver los eventos?',
      respuesta: 'En la sección Eventos encontrarás información sobre conciertos y novedades musicales.'
    }
  ]

  const mensajes = ref<Mensaje[]>([
    {
      id: 1,
      texto: 'Hola, bienvenido a BRISA.FM. ¿En qué puedo ayudarte?',
      mio: false
    }
  ])

  let id = 1

  const buscarGif = async (artista: string) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY

    if (!apiKey) return

    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(artista)}&limit=25&rating=g`

      const respuesta = await fetch(url)

      if (!respuesta.ok) return

      const datos = await respuesta.json()

      const gifs = datos.data.filter((gif: any) => {
        const usuario = gif.user?.username?.toLowerCase() || ''
        const titulo = (gif.title || '').toLowerCase().replace(/\$/g, 's')

        if (artista === 'Kali Uchis') {
          return usuario === 'kaliuchis'
        }

        return titulo.includes(artista.toLowerCase())
      })

      if (gifs.length === 0) return

      const elegido = gifs[Math.floor(Math.random() * gifs.length)]

      return elegido.images?.fixed_height?.url

    } catch {
      return
    }
  }

  const seleccionarPregunta = async (opcion: Pregunta) => {
    mensajes.value.push({
      id: ++id,
      texto: opcion.pregunta,
      mio: true
    })

    const respuesta: Mensaje = {
      id: ++id,
      texto: opcion.respuesta,
      mio: false
    }

    mensajes.value.push(respuesta)

    if (opcion.artista) {
      const gif = await buscarGif(opcion.artista)

      if (gif) {
        const mensaje = mensajes.value.find(m => m.id === respuesta.id)

        if (mensaje) {
          mensaje.imagen = gif
        }
      }
    }
  }

  return {
    preguntas,
    mensajes,
    seleccionarPregunta
  }
}
