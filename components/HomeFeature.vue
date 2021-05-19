<template>
  <div class="home-product">
    <nuxt-link
      to="/"
    >
      <img :src="src" alt="">
      <div class="product-overlay">
        <div>
          Some stuff
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['wheel'],
  data () {
    return {
      src: this.$cloudinary.image.url(this.wheel.image, {
        width: 100,
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>