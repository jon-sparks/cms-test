<template>
  <section class="text-block">
    <div v-html="md" />
  </section>
</template>

<script>
export default {
  props: [`section`],
  computed: {
    md () {
      return this.$parseMd(this.section.text)
    }
  }
}
</script>

<style scoped>
.text-block {
  width: 100%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 0 1rem;
}
</style>