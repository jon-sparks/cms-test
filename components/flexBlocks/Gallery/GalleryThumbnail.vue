<template>
  <img :src="src" alt="" loading="lazy">
</template>

<script>
export default {
  props: ['image'],
  data () {
    return {
      src: this.$cloudinary.image.url(`/${this.getId(this.image)}`, {
        width: 250,
        height: 250,
        crop: 'fill'
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
  img {
  }
</style>
