<template>
  <section class="section">
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <section class="section">
      <product-card :product="product" v-if="product"></product-card>
    </section>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { getProductById } from '@/services/productService'
import socialTagging from '@/mixins/socialTagging'

export default {
  name: 'Home',
  components: { ProductCard },
  mixins: [socialTagging],
  data () {
    return {
      isLoading: false,
      product: null
    }
  },
  async created () {
    this.isLoading = true
    try {
      const productId = this.$route.params.product_id
      if (!productId) {
        throw new Error('ProductId: is required')
      }

      this.product = await getProductById(productId)
      if (!this.product) {
        throw new Error(`ProductId: ${productId} not found`)
      }
      this.updateSocialTags({
        title: this.product.name,
        description: this.product.description,
        image: this.product.image,
        imageAlt: this.product.name,
        url: window.location
      })
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
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
