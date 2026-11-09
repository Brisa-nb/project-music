<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['view-product'])
</script>

<template>
  <article class="product-card">
    <div class="product-image">
     <span v-if="product.limited" class="edition-badge">
     LIMITED EDITION
     </span>
      <img
        :src="product.variants[0].image"
        :alt="product.name"
      />

      <span class="product-category">
        {{ product.category }}
      </span>
    </div>

    <div class="product-info">
      <p class="product-artist">{{ product.artistName }}</p>

      <h3>{{ product.name }}</h3>

      <p class="product-price">
        ${{ product.price.toLocaleString('es-MX') }} MXN
      </p>

      <button @click="$emit('view-product', product)">
        Ver producto
      </button>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  max-width: 320px;
  color: #4b3545;
  box-shadow: 0 5px 18px rgba(100, 60, 90, 0.10);
}

.product-image {
  position: relative;
  background: #f8f2f3;
  height: 280px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
}

.product-info {
  padding: 18px;
}

.product-artist {
  color: #b47c9d;
  font-size: 13px;
}

.product-info h3 {
  margin: 6px 0;
  font-size: 21px;
}

.product-price {
  font-weight: bold;
  margin: 12px 0;
}

button {
  width: 100%;
  padding: 11px;
  border: none;
  border-radius: 20px;
  background: #d9b3c9;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #bd8eaa;
}
.edition-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #4b3545;
  color: white;
  padding: 7px 11px;
  border-radius: 20px;
  font-size: 10px;
  letter-spacing: 1px;
}
</style>