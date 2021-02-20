<template>
  <section class="image-text">
    <div class="image-text__image">
      <img :src="section.image.image" :alt="section.image.alt">
    </div>
    <div class="image-text__content">
      <div v-html="section.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style scoped>
  .image-text {
    position: relative;
    display: flex;
    padding: 2rem 0;
  }
  .image-text__image {
    width: 50%;
  }
  .image-text__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-text__content {
    width: 50%;
    padding: 2rem 9rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
  }
</style>