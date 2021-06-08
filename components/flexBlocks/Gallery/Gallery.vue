<template>
  <section class="gallery">
    <AspectRatio
      v-for="(image, id) in gallery"
      :key="id"
      ratio="1:1"
    >
      <GalleryThumbnail
        :image="image"
        @click.native="setGalleryStatus(image)"
      />
    </AspectRatio>
    <GalleryOverlay
      v-if="galleryOpen"
      :setGalleryStatus="setGalleryStatus"
      :image="selectedImage"
    />
  </section>
</template>

<script>
export default {
  props: ['gallery'],
  data () {
    return {
      selectedImage: null,
      galleryOpen: false,
    }
  },
  methods: {
    setGalleryStatus (image) {
      this.selectedImage = image
      this.galleryOpen = !this.galleryOpen
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: stretch;
}
</style>
