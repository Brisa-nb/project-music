<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'add-to-cart'])

const selectedVariant = ref(props.product.variants[0])

const selectedImage = ref(selectedVariant.value.image)

const images = computed(() => [
  selectedVariant.value.image,
  ...selectedVariant.value.gallery
])

function selectVariant(variant) {
  selectedVariant.value = variant
  selectedImage.value = variant.image
}
</script>

<template>
  <section class="product-detail">
    <button class="close-button" @click="emit('close')">
      ✕
    </button>

    <div class="detail-layout">
      <div class="detail-gallery">
        <img
          class="main-image"
          :src="selectedImage"
          :alt="product.name"
        />

        <div class="thumbnail-list">
          <button
            v-for="(image, index) in images"
            :key="index"
            @click="selectedImage = image"
          >
            <img :src="image" :alt="`Imagen ${index + 1}`" />
          </button>
        </div>
      </div>

      <div class="detail-info">
        <p class="artist-name">{{ product.artistName }}</p>
        <p v-if="product.limited" class="edition-label">
        BRISA.FM · EDITION {{ product.edition }}
        </p>

        <h2>{{ product.name }}</h2>

        <p class="price">
          ${{ product.price.toLocaleString('es-MX') }} MXN
        </p>

        <p>{{ product.description }}</p>

       <h4>Color</h4>

          <div class="variant-options">
            <button
              v-for="variant in product.variants"
              :key="variant.id"
              class="variant-option"
              :class="{ selected: selectedVariant.id === variant.id }"
              @click="selectVariant(variant)"
            >
              <span
                class="color-circle"
                :style="{ backgroundColor: variant.color || '#d9b3c9' }"
              ></span>

              <span class="color-name">{{ variant.name }}</span>
            </button>
          </div>

        <h4>Materiales</h4>
        <p>{{ product.materials }}</p>

        <h4>Capacidad</h4>
        <p>{{ product.capacity }}</p>

        <button
          class="add-button"
          @click="emit('add-to-cart', {
            product,
            variant: selectedVariant
          })"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-detail {
  position: relative;
  background: #fff;
  padding: 30px;
  border-radius: 22px;
  color: #4b3545;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 18px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  align-items: start;
}

.main-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 15px;
}

.thumbnail-list {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.thumbnail-list button {
  border: 2px solid transparent;
  background: none;
  padding: 0;
  cursor: pointer;
}

.thumbnail-list img {
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 10px;
}

.artist-name {
  color: #b47c9d;
}

.detail-info h2 {
  font-size: 30px;
  margin: 8px 0;
}

.price {
  font-size: 21px;
  font-weight: bold;
}

.detail-info h4 {
  margin: 20px 0 8px;
}

.variant-options {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.variant-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;
}

.color-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #e5d6df;
  transition: 0.2s;
}

.variant-option.selected .color-circle {
  outline: 2px solid #bd8eaa;
  outline-offset: 3px;
}

.color-name {
  font-size: 12px;
  color: #4b3545;
}

.add-button {
  margin-top: 25px;
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 22px;
  background: #bd8eaa;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 700px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .main-image {
    height: 300px;
  }
}
.edition-label {
  color: #b47c9d;
  font-size: 11px;
  letter-spacing: 2px;
  margin: 8px 0;
}
</style>