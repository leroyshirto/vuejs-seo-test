<template>
  <section class="section">
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="product in products" :key="product.id">
          <product-card :product="product"></product-card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/services/productService'

export default {
  name: 'Home',
  components: { ProductCard },
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  async created () {
    this.isLoading = true
    try {
      this.products = await getProducts()
      this.isLoading = false
    } catch (error) {
      this.$buefy.notification.open({
        duration: 5000,
        message: `Error: ${error}`,
        position: 'is-bottom-right',
        type: 'is-danger',
        hasIcon: true
      })
    }
  }
}
</script>
