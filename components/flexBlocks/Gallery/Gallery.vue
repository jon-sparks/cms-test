<template>
  <section
    class="gallery animate"
    :class="{ 'extra-margin' : section.extra_margin }"
    ref="gallery"
  >
    <h2 class="underlined-title">Gallery</h2>
    <div class="gallery-wrapper">
      <AspectRatio
        v-for="(image, id) in images"
        :key="id"
        ratio="1:1"
        class="gallery__image"
      >
        <GalleryThumbnail
          :image="image"
          class="gallery__thumbnail"
          @click.native="setGalleryStatus(image)"
        />
      </AspectRatio>
      <GalleryOverlay
        v-if="galleryOpen"
        :setGalleryStatus="setGalleryStatus"
        :image="selectedImage"
        @navigate="setSelectedImage($event, nextImage)"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ['section'],
  data () {
    return {
      selectedImage: null,
      galleryOpen: false,
    }
  },
  mounted () {
    this.$animate(this.$refs.gallery)
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
      return this.section.gallery_items.map(item => item.image)
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
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 2rem 0 0 0;
  }

  &__image {
    width: 50%;
  }
}

@media(min-width: 640px) {
  .gallery__image {
    width: 33.3%;
  }
}

@media(min-width: 1024px) {
  .gallery__image {
    width: 20%;
  }
}

.animate {

  .gallery__image {
    opacity: 0;
    transform: translateY(150px);
    transition: all ease .6s;
  }

  &--in {

    @for $i from 1 through 10 {
      .gallery__image:nth-child(#{$i}) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: $i/8 +s;
      }
    }
  }
}

.extra-margin {
  margin: 5rem auto 6rem;
}
</style>
