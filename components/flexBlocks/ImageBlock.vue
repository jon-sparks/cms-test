<template>
  <section class="full-width-image">
    <img
      :src="section.image"
      :alt="section.alt"
      loading="lazy"
    >
  </section>
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style scoped>
  .full-width-image {
    padding: 2rem 0;
  }
  .full-width-image img {
    width: 100%;
    height: 35vw;
    object-fit: cover;
    object-position: center;
  }
</style>