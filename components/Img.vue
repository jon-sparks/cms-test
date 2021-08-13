<template>
  <img
    :src="src"
    :alt="alt"
  >
</template>

<script>
export default {
  props: [`source`, `alt`, `width`, `height`],
  computed: {
    src () {
      if (this.source) {
        return this.$cloudinary.image.url(`/${this.getId(this.source)}`, {
          width: this.width ? this.width : null,
          height: this.height ? this.height : null,
          crop: 'scale'
        })
      }
      return false
    },
  },
  methods: {
    getId (path) {
      const index1 = path.lastIndexOf(`/`, path.lastIndexOf(`/`)-1)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>