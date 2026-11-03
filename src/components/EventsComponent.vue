
<script setup>
const events = [
  {
    date: '04',
    month: 'DICIEMBRE',
    title: 'Kali Uchis',
    type: 'CONCIERTO',
    description: 'Una noche para disfrutar de su música.'
  },
  {
    date: '15',
    month: 'ENERO',
    title: 'Próximamente',
    type: 'POR ANUNCIAR',
    description: 'Nuevos eventos musicales próximamente.'
  },
  {
    date: '28',
    month: 'FEBRERO',
    title: 'Próximamente',
    type: 'POR ANUNCIAR',
    description: 'Mantente al tanto de las novedades.'
  }
]
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

    <div class="events-grid">
      <article
        v-for="(event, index) in events"
        :key="index"
        class="event-card"
      >
        <div class="event-date">
          <span>{{ event.date }}</span>
          <small>{{ event.month }}</small>
        </div>

        <div class="event-info">
          <p>{{ event.type }}</p>
          <h3>{{ event.title }}</h3>
          <span>{{ event.description }}</span>
        </div>

        <span class="event-number">0{{ index + 1 }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  padding: 90px 8%;
  background: #fff9fb;
  color: #382b32;
}

.events-header {
  max-width: 1250px;
  margin: 0 auto 55px;
}

.events-header > p:first-child {
  font-size: 10px;
  letter-spacing: 4px;
  font-weight: bold;
}

.events-header h2 {
  margin: 18px 0;
  font-family: Georgia, serif;
  font-size: clamp(40px, 6vw, 75px);
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

.events-grid {
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.event-card {
  position: relative;
  min-height: 230px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f0dce5;
  border-radius: 22px;
  background: #fff;
  transition: 0.3s;
}

.event-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(130, 76, 100, 0.1);
}

.event-date {
  display: flex;
  align-items: center;
  gap: 10px;
}

.event-date span {
  font-family: Georgia, serif;
  font-size: 42px;
}

.event-date small {
  font-size: 9px;
  letter-spacing: 2px;
}

.event-info p {
  font-size: 9px;
  letter-spacing: 3px;
  color: #c47d9d;
}

.event-info h3 {
  margin: 8px 0;
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: normal;
}

.event-info > span {
  font-size: 13px;
  color: #8d7882;
}

.event-number {
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 10px;
  color: #c8a9b7;
}

@media (max-width: 900px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .events-section {
    padding: 65px 6%;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
