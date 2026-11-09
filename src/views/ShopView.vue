<script setup>
import ShopComponent from '../components/ShopComponent.vue'
import { products } from '../data/products.js'

defineProps({
  artists: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <main class="shop-view">
    <ShopComponent
      :products="products"
      :artists="artists"
    />
  </main>
</template>

<style scoped>
.shop-view {
  min-height: 100vh;
}
</style>