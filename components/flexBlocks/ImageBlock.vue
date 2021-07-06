<template>
  <section class="full-width-image">
    <img
      :src="src"
      :alt="section.alt"
      loading="lazy"
    >
  </section>
</template>

<script>
export default {
  props: [`section`],
  data () {
    return {
      src: this.$cloudinary.image.url(`pexels-quang-nguyen-vinh-2166711_unxg3w`, {
        width: 1920,
      })
    }
  }
}
</script>

<style scoped>
.full-width-image {
  padding: 2rem 0;
}
.full-width-image img {
  width: 100%;
  height: 50vw;
  max-height: 700px;
  object-fit: cover;
  object-position: center;
}

@media(min-width: 480px) {
  .full-width-image img {
    height: 38vw;
  }
}
</style>