<template>
  <section class="image-text animate" ref="animate">
    <div class="image-text__image">
      <img :src="section.image.image" :alt="section.image.alt">
    </div>
    <div class="image-text__content">
      <div>
        <p>{{ section.text }}</p>
      </div>
      <Button
        v-if="hasButton"
        :button="section.button"
        :inverted="true"
      >
        {{ section.button.text }}
      </Button>
    </div>
  </section>
</template>

<script>
export default {
  props: [`section`],
  mounted () {
    this.$animate(this.$refs.animate)
  },
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
  flex-wrap: wrap;
  padding: 2rem 0;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
}
.image-text__image {
  width: 100%;
}
.image-text__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-text__content {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 18px;
}

.animate {
  overflow: hidden;

  .image-text__image {
    opacity: 0;
    transform: translateX(-150px);
    transition: all ease .5s;
  }
  .image-text__content {
    opacity: 0;
    transform: translateX(150px);
    transition: all ease .5s;
  }

  &--in {

    .image-text__image {
      opacity: 1;
      transform: translateX(0);
    }
    .image-text__content {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@media(min-width: 640px) {
  .image-text {

    &__image {
      width: 50%;
    }

    &__content {
      width: 50%;
    }
  }
}

@media(min-width: 768px) {
  .image-text {

    &__content {
      font-size: 24px;
    }
  }
}

@media(min-width: 1024px) {
  .image-text {

    &__content {
      padding: 2rem 6rem;
    }
  }
}
</style>