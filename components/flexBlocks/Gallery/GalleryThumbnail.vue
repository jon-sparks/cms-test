<template>
  <img :src="src" alt="gallery image" loading="lazy">
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
      const index1 = path.lastIndexOf(`/`, path.lastIndexOf(`/`)-1)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    }
  },
};
</script>

<style lang="scss" scoped>
  img {
    cursor: pointer;
  }
</style>
