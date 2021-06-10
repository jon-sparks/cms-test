<template>
  <section
    class="gallery-overlay"
    @click.self="setGalleryStatus"
  >
    <button
      @click="navigate(`prev`)"
    >
      Prev
    </button>
    <div class="gallery-overlay__image-wrapper">
      <img
        :src="src"
        alt="gallery image"
        loading="lazy"
      >
    </div>
    <button
      @click="navigate(`next`)"
    >
      Next
    </button>
  </section>
</template>

<script>
export default {
  props: [`setGalleryStatus`, `setSelectedImage`, `image`],
  watch: {
    image (val) {
      this.src = this.$cloudinary.image.url(`/${this.getId(val)}`, {
        height: 700,
        crop: `fill`,
      })
    }
  },
  data () {
    return {
      src: this.$cloudinary.image.url(`/${this.getId(this.image)}`, {
        height: 700,
        crop: `fill`,
      }),
    }
  },
  beforeMount () {
  	window.addEventListener('keydown', this.handleKeydown, null);
  },
  beforeDestroy () {
  	window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    getId (path) {
      const index1 = path.lastIndexOf(`/`)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    },
    navigate (direction) {
      this.$emit(`navigate`, direction)
    },
    handleKeydown (e) {
    	switch (e.keyCode) {
        case 37:
         this.$emit(`navigate`, `prev`)
         break;
         case 39: 
         this.$emit(`navigate`, `next`)
         break;
      }
    }
  }
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
