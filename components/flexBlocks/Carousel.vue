<template>
  <section
    :class="{ 'content-width standard' : !section.full_width }"
    class="carousel"
  >
    <AspectRatio
      ratio="16:9"
    >
      <div class="carousel__wrapper">
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
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="swiper-pagination"></div>
        </client-only>
      </div>
    </AspectRatio>
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &__wrapper {
    height: 100%;
  }
}

.swiper-pagination {
  width: 100%;
  bottom: 5px;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
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

/deep/.swiper-container {
  height: 100%;
}

.carousel /deep/.swiper-slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel.standard /deep/.swiper-slide img {
  height: 100%;
}
</style>