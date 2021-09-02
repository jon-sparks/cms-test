<template>
  <section
    class="full-width-image animate"
    :class="{ 'content-width' : !section.full_width }"
    ref="image"
  >
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
      src: this.$cloudinary.image.url(this.section.image, {
        width: 1920,
      })
    }
  },
  mounted () {
    this.$animate(this.$refs.image)
  }
}
</script>

<style lang="scss" scoped>
.full-width-image {
  position: relative;
  padding: 2rem 0;
}

.full-width-image img {
  display: block;
  width: 100%;
  max-height: 700px;
  object-fit: cover;
  object-position: center;
}

.animate {

  &::after {
    content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    height: calc(100% - 4rem);
    background: var(--primary);
    transition: all ease-in .6s .3s;
  }

  &--in {
    
    &::after {
      width: 0;
    }
  }
}
</style>