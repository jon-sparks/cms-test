<template>
  <section class="carousel">
    <client-only>
      <swiper
        :options="carouselOptions"
      >
        <swiper-slide
          v-for="(slide, index) in section.slide"
          :key="index"
        >
          <img
            :src="slide.image.image"
            :alt="slide.image.alt"
          >
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </client-only>
  </section>
</template>

<script>
export default {
  props: [`section`],
  data () {
    return {
      carouselOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 35vw;
}

.swiper-pagination {
  width: 100%;
  bottom: 0;
}

/deep/.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: .5rem;
  background: white;
  box-shadow: 0 1px 5px -1px rgba(0,0,0,.4);
  opacity: 1;
}

/deep/.swiper-pagination-bullet-active {
  background: var(--primary);
  width: 14px;
  height: 14px;
}

.carousel /deep/.swiper-wrapper {
  position: relative;
  height: 35vw;
}

.carousel /deep/.swiper-slide {
  height: 35vw;
}

.carousel /deep/.swiper-slide img {
  height: 35vw;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>