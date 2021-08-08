<template>
  <section class="banner">
    <transition name="banner" appear>
      <div class="banner__image">
        <img :src="src" alt="">
        <transition name="banner-title" appear>
          <h1>{{ text }}</h1>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: [`image`, `text`],
  computed: {
    src () {
      if (this.image) {
        return this.$cloudinary.image.url(`/${this.getId(this.image)}`, {
          width: 1920,
          crop: 'scale'
        })
      }
      return false
    },
  },
  methods: {
    getId (path) {
      const index1 = path.lastIndexOf(`/`, path.lastIndexOf(`/`)-1)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    },
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
    z-index: 1;
  }
}

.banner__image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    max-height: 700px;
    min-height: 300px;
    object-fit: cover;
  }
}

h1 {
  position: absolute;
  margin: 0;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: var(--primary);
  z-index: 1;
  margin-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 20px -5px rgba(0,0,0,.5);
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}

@media(min-width: 480px) {
  h1 {
    font-size: 60px;
  }
}

@media(min-width: 768px) {
  .banner__image img {
    min-height: 400px
  }

  h1 {
    font-size: 80px;
    padding: 2rem 3rem;
  }
}

.banner-enter-active, .banner-leave-active {
  transition: width .5s, height 1s .3s, opacity .5s;
}
.banner-enter, .banner-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 20px;
  width: 0;
  opacity: 0;
}

.banner-title-enter-active, .banner-title-leave-active {
  transition: opacity .5s .8s;
}
.banner-title-enter, .banner-title-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>