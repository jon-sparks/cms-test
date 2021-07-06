<template>
  <section class="video content-width">
    <AspectRatio
      data-aspect="16:9"
    >
      <div
        v-html="section.youtube_embed"
      />
    </AspectRatio>
  </section>
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style lang="scss" scoped>
.video {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

div {
  height: 100%;
}

/deep/iframe {
  width: 100%;
  height: 100%;
}
</style>