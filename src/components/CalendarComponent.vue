
<script setup>
import FullCalendar from '@fullcalendar/vue3'

// Tema visual
import themePlugin from '@fullcalendar/vue3/themes/monarch'

// Plugins del calendario
import dayGridPlugin from '@fullcalendar/vue3/daygrid'
import timeGridPlugin from '@fullcalendar/vue3/timegrid'
import interactionPlugin from '@fullcalendar/vue3/interaction'

// Estilos obligatorios de FullCalendar 7
import '@fullcalendar/vue3/skeleton.css'
import '@fullcalendar/vue3/themes/monarch/theme.css'
import '@fullcalendar/vue3/themes/monarch/palettes/purple.css'

// Recibimos los eventos desde EventsView
const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

// Avisamos cuando se selecciona un evento
const emit = defineEmits(['select-event'])

// Configuración del calendario
const calendarOptions = {
  plugins: [
    themePlugin,
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
  ],

  initialView: 'dayGridMonth',
  locale: 'es',

  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },

  buttonText: {
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día'
  },

   events: props.events
  .filter(event => event.start)
  .map(event => ({
    id: String(event.id),
    title: `${event.artistName} · ${event.category}`,
    start: event.start,
    end: event.end,
    allDay: true,

        color:
    event.artistId === 1 ? '#E8A0BD' :
    event.artistId === 2 ? '#91A98B' :
    event.artistId === 3 ? '#777777' :
    event.artistId === 4 ? '#B69ACB' :
    '#A5A0BD',

    contrastColor: '#FFFFFF'
  })),

  eventClick(info) {
    emit('select-event', info.event.id)
  }
}
</script>

<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped>
.calendar-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #f0dce5;
  border-radius: 24px;
  color: #382b32;
}
</style>
