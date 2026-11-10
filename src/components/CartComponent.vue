
<script setup>
import { useCart } from '../composables/useCart'

const emit = defineEmits(['cerrar'])

const {
  cart,
  removeFromCart,
  updateQuantity,
  totalPrice
} = useCart()

function formatoPrecio(precio) {
  return precio.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })
}
</script>

<template>
  <div class="cart-overlay" @click.self="emit('cerrar')">
    <section class="cart-panel">

      <div class="cart-header">
        <div>
          <p>BRISA.FM · YOUR SELECTION</p>
          <h2>Mi carrito ♡</h2>
        </div>

        <button class="close-button" @click="emit('cerrar')">
          ✕
        </button>
      </div>

      <div v-if="cart.length" class="cart-content">

        <article
          v-for="item in cart"
          :key="`${item.product.id}-${item.variant.id}`"
          class="cart-item"
        >
          <img
            :src="item.variant.image"
            :alt="item.product.name"
          />

          <div class="item-info">
            <p class="artist">{{ item.product.artistName }}</p>
            <h3>{{ item.product.name }}</h3>
            <span class="variant">{{ item.variant.name }}</span>
            <p class="item-price">
              {{ formatoPrecio(item.product.price) }}
            </p>

            <div class="quantity-controls">
              <button
                :disabled="item.quantity <= 1"
                @click="updateQuantity(
                  item.product.id,
                  item.variant.id,
                  item.quantity - 1
                )"
              >
                −
              </button>

              <span>{{ item.quantity }}</span>

              <button
                @click="updateQuantity(
                  item.product.id,
                  item.variant.id,
                  item.quantity + 1
                )"
              >
                +
              </button>

              <button
                class="remove-button"
                @click="removeFromCart(
                  item.product.id,
                  item.variant.id
                )"
              >
                Eliminar
              </button>
            </div>
          </div>
        </article>

        <div class="cart-summary">
          <div class="total-row">
            <span>Total</span>
            <strong>{{ formatoPrecio(totalPrice) }}</strong>
          </div>

          <p>BRISA.FM · Ediciones seleccionadas ♡</p>
        </div>

      </div>

      <div v-else class="empty-cart">
        <span>♡</span>
        <h3>Tu carrito está vacío</h3>
        <p>Descubre las colecciones y encuentra tu próxima pieza favorita.</p>
        <button @click="emit('cerrar')">
          Seguir explorando
        </button>
      </div>

    </section>
  </div>
</template>

<style scoped>
.cart-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
  background: rgba(43, 29, 36, 0.45);
  backdrop-filter: blur(3px);
}

.cart-panel {
  width: min(520px, 100%);
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 30px;
  background: #fff9fb;
  color: #4b3545;
  box-shadow: -8px 0 30px rgba(80, 40, 55, 0.12);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 22px;
  border-bottom: 1px solid #efd8e3;
}

.cart-header p {
  margin: 0 0 8px;
  color: #b47c9d;
  font-size: 10px;
  letter-spacing: 2px;
}

.cart-header h2 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 32px;
  font-weight: normal;
}

.close-button {
  border: none;
  background: transparent;
  color: #80566c;
  font-size: 23px;
  cursor: pointer;
}

.cart-item {
  display: flex;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid #efd8e3;
}

.cart-item > img {
  width: 115px;
  height: 135px;
  object-fit: cover;
  border-radius: 12px;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.artist {
  margin: 0 0 5px;
  color: #b47c9d;
  font-size: 11px;
}

.item-info h3 {
  margin: 0 0 5px;
  font-family: Georgia, serif;
  font-size: 19px;
  font-weight: normal;
}

.variant {
  color: #927d89;
  font-size: 12px;
}

.item-price {
  margin: 10px 0;
  font-weight: bold;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  border: 1px solid #d9b3c9;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  background: white;
  color: #80566c;
  cursor: pointer;
}

.quantity-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-controls .remove-button {
  width: auto;
  height: auto;
  padding: 5px 8px;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #a64066;
  font-size: 11px;
  text-decoration: underline;
}

.cart-summary {
  padding-top: 25px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
}

.total-row strong {
  color: #a64066;
  font-size: 22px;
}

.cart-summary > p {
  color: #9b8491;
  font-size: 11px;
  text-align: right;
}

.empty-cart {
  padding: 100px 15px;
  text-align: center;
}

.empty-cart > span {
  color: #bd8eaa;
  font-size: 45px;
}

.empty-cart h3 {
  font-family: Georgia, serif;
  font-size: 25px;
  font-weight: normal;
}

.empty-cart p {
  color: #8d7885;
  line-height: 1.6;
}

.empty-cart button {
  margin-top: 15px;
  padding: 12px 22px;
  border: none;
  border-radius: 22px;
  background: #bd8eaa;
  color: white;
  cursor: pointer;
}

@media (max-width: 500px) {
  .cart-panel {
    padding: 22px 17px;
  }

  .cart-item {
    gap: 12px;
  }

  .cart-item > img {
    width: 90px;
    height: 115px;
  }

  .item-info h3 {
    font-size: 16px;
  }
}
</style>
