<template>
  <div class="card">
    <div class="card-image">
        <a :href="`/products/${product.id}`">
          <figure class="image is-4by3">
          <img :src="`${product.image}?seed=${product.id}`" alt="Product Cover" loading="lazy">
          </figure>
        </a>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="title is-4"><a :href="`/products/${product.id}`">{{product.name}}</a></p>
        </div>
        </div>

        <div class="content">
          {{product.description}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>
