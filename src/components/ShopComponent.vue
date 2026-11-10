
<script setup>
import { ref, computed } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductDetail from './ProductDetail.vue'
import { useCart } from '../composables/useCart'

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  artists: {
    type: Array,
    required: true
  }
})

const selectedArtist = ref(1)
const selectedProduct = ref(null)

const {
  addToCart,
  totalItems
} = useCart()

const artistProducts = computed(() => {
  return props.products.filter(product =>
    product.artistId === selectedArtist.value
  )
})

function selectArtist(artistId) {
  selectedArtist.value = artistId
  selectedProduct.value = null
}

function showProduct(product) {
  selectedProduct.value = product
}

function closeDetail() {
  selectedProduct.value = null
}

function handleAddToCart(item) {
  addToCart(item)

  alert(`${item.product.name} se agregó al carrito ♡`)
}
</script>

<template>
  <section class="shop-section" id="tienda">

    <div class="shop-heading">
      <p>BRISA.FM · EXCLUSIVE COLLECTIONS</p>
      <h2>The Artist Shop ♡</h2>
      <span>Un pequeño universo de objetos inspirados en la música.</span>
    </div>

    <div class="artist-selector">
      <button
        v-for="artist in artists"
        :key="artist.id"
        :class="{ active: selectedArtist === artist.id }"
        @click="selectArtist(artist.id)"
      >
        {{ artist.name }}
      </button>
    </div>

    <div v-if="selectedProduct" class="detail-container">
      <ProductDetail
        :product="selectedProduct"
        @close="closeDetail"
        @add-to-cart="handleAddToCart"
      />
    </div>

    <div v-else-if="artistProducts.length" class="products-grid">
      <ProductCard
        v-for="product in artistProducts"
        :key="product.id"
        :product="product"
        @view-product="showProduct"
      />
    </div>

    <div v-else class="empty-collection">
      <p>COMING SOON ♡</p>
      <h3>Esta colección está en preparación.</h3>
      <span>Muy pronto encontrarás nuevos productos de este artista.</span>
    </div>

  </section>
</template>

<style scoped>
.shop-section {
  padding: 90px 8%;
  min-height: 550px;
  background: #faf5f8;
  color: #4b3545;
}

.shop-heading {
  text-align: center;
  margin-bottom: 35px;
}

.shop-heading > p {
  color: #b47c9d;
  letter-spacing: 3px;
  font-size: 11px;
}

.shop-heading h2 {
  font-family: Georgia, serif;
  font-size: 42px;
  font-weight: normal;
  margin: 12px 0;
}

.shop-heading span {
  color: #8d7885;
}

.artist-selector {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.artist-selector button {
  padding: 11px 22px;
  border: 1px solid #d9b3c9;
  border-radius: 25px;
  background: transparent;
  color: #80566c;
  cursor: pointer;
  transition: 0.25s;
}

.artist-selector button:hover,
.artist-selector button.active {
  background: #bd8eaa;
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
  justify-content: center;
  gap: 25px;
}

.empty-collection {
  text-align: center;
  padding: 60px 15px;
}

.empty-collection p {
  color: #b47c9d;
  letter-spacing: 3px;
  font-size: 12px;
}

.empty-collection h3 {
  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: normal;
}

.empty-collection span {
  color: #8d7885;
}

@media (max-width: 600px) {
  .shop-section {
    padding: 65px 6%;
  }

  .shop-heading h2 {
    font-size: 32px;
  }
}
</style>
