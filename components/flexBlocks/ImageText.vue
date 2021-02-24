<template>
  <section class="image-text">
    <div class="image-text__image">
      <img :src="section.image.image" :alt="section.image.alt">
    </div>
    <div class="image-text__content">
      <div v-html="section.text" />
      <Button
        v-if="hasButton"
        :button="section.button"
      >
        {{ section.button.text }}
      </Button>
    </div>
  </section>
</template>

<script>
export default {
  props: [`section`],
  computed: {
    hasButton () {
      return this.section.button.link.length > 0 && this.section.button.text.length > 0;
    }
  }
}

</script>

<style lang="scss" scoped>
  .image-text {
    position: relative;
    display: flex;
    padding: 2rem 0;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 24px;
  }
</style>