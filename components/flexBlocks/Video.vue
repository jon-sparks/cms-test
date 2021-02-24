<template>
  <section
    class="video content-width"
    v-html="section.youtube_embed"
  />
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style lang="scss" scoped>
/deep/iframe {
  width: 100%;
  height: 31vw;
}
</style>