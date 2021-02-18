<template>
  <section class="content">
    <NuxtContent :document="content" />
  </section>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>
.content {
  width: 100%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 0 1rem;
}
</style>