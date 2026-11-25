<script setup>
import EventsComponent from '../components/EventsComponent.vue'
import CalendarComponent from '../components/CalendarComponent.vue'
import { events } from '../data/events.js'
</script>

<template>
  <section id="eventos" class="events-section">

    <div class="events-header">
      <p>BRISA.FM / AGENDA MUSICAL</p>
      <h2>Próximos eventos<span> ♡</span></h2>
      <p class="events-subtitle">
        Música, experiencias y momentos por descubrir.
      </p>
    </div>

    <EventsComponent :events="events" />

    <div class="calendar-header">
      <p>BRISA.FM / CALENDARIO</p>
      <h2>Agenda musical</h2>
    </div>

    <CalendarComponent :events="events" />

  </section>
</template>

<style scoped>
.events-section {
  padding: 90px 8%;
  background: #fff9fb;
  color: #382b32;
}

.events-header,
.calendar-header {
  max-width: 1250px;
  margin: 0 auto 40px;
}

.events-header > p:first-child,
.calendar-header > p {
  font-size: 10px;
  letter-spacing: 4px;
  font-weight: bold;
}

.events-header h2,
.calendar-header h2 {
  margin: 18px 0;
  font-family: Georgia, serif;
  font-size: clamp(35px, 5vw, 60px);
  font-weight: normal;
}

.events-header h2 span {
  color: #e79bb9;
}

.events-subtitle {
  color: #8d7882;
  font-family: Georgia, serif;
  font-style: italic;
}

.calendar-header {
  margin-top: 75px;
}
</style>