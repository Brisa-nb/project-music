
import { ref, computed } from 'vue'

// Estado del carrito
const cart = ref([])

export function useCart() {

  // Agregar productos
  function addToCart(item) {
    const existingItem = cart.value.find(cartItem =>
      cartItem.product.id === item.product.id &&
      cartItem.variant.id === item.variant.id
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({
        ...item,
        quantity: 1
      })
    }
  }

  // Eliminar productos
  function removeFromCart(productId, variantId) {
    cart.value = cart.value.filter(item =>
      !(item.product.id === productId &&
        item.variant.id === variantId)
    )
  }

  // Cambiar cantidad
  function updateQuantity(productId, variantId, quantity) {
    const item = cart.value.find(cartItem =>
      cartItem.product.id === productId &&
      cartItem.variant.id === variantId
    )

    if (!item) return

    if (quantity <= 0) {
      removeFromCart(productId, variantId)
    } else {
      item.quantity = quantity
    }
  }

  // Calcular cantidad total de artículos
  const totalItems = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  )

  // Calcular importe total
  const totalPrice = computed(() =>
    cart.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  )

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice
  }
}
