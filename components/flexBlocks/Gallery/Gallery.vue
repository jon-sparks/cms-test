<template>
  <section class="gallery">
    <AspectRatio
      v-for="(image, id) in images"
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
      @navigate="setSelectedImage($event, nextImage)"
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
    },
    setSelectedImage (direction = null, image = null) {
      if (direction === `next`) {
        this.selectedImage = this.nextImage
      } else if (direction === `prev`) {
        this.selectedImage = this.prevImage
      } else {
        this.selectedImage = image
      }
    }
  },
  computed: {
    images () {
      return this.gallery.map(item => item.image)
    },
    nextImage () {
      if (this.images.indexOf(this.selectedImage) + 1 === this.images.length) {
        return this.images[0]
      }
      return this.images[this.images.indexOf(this.selectedImage) + 1]
    },
    prevImage () {
      if (this.images.indexOf(this.selectedImage) - 1 === -1) {
        return this.images[this.images.length - 1]
      }
      return this.images[this.images.indexOf(this.selectedImage) - 1]
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: stretch;
  padding: 2rem 0;
}
</style>
