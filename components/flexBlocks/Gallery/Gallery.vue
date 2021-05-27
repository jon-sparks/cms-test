<template>
  <section class="gallery">
    <AspectRatio
      v-for="(image, id) in gallery"
      :key="id"
      ratio="1:1"
    >
      <GalleryThumbnail
        :image="image"
      />
    </AspectRatio>
  </section>
</template>

<script>
export default {
  props: ['gallery']
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: stretch;
}
</style>
