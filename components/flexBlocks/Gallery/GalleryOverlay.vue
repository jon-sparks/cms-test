<template>
  <section
    class="gallery-overlay"
    @click.self="setGalleryStatus"
  >
    <div class="gallery-overlay__image-wrapper">
      <img
        :src="src"
        alt=""
        loading="lazy"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: [`setGalleryStatus`, `image`],
  data () {
    return {
      src: this.$cloudinary.image.url(`/${this.getId(this.image.image)}`, {
        height: 700,
        crop: `fill`,
      }),
    }
  },
  methods: {
    getId (path) {
      const index1 = path.lastIndexOf(`/`)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    }
  },
};
</script>

<style lang="scss" scoped>
.gallery-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &__image-wrapper {
    position: relative;

    img {
      display: block;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,.6);
    }
  }
}
</style>
