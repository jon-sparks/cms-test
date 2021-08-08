<template>
  <section class="banner">
    <transition name="banner" appear>
      <div class="banner__image">
        <img :src="image" alt="">
        <transition name="banner-title" appear>
          <h1 class="main-width">{{ text }}</h1>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: [`image`, `text`],
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
  align-items: flex-end;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    max-height: 900px;
    min-height: 550px;
    object-fit: cover;
  }
}

h1 {
  position: absolute;
  left: 0;
  right: 0;
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: white;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 20px;
    background: #5f5f5f;
    bottom: 0;
    left: 10px;
    z-index: -1;
  }
}

@media(min-width: 480px) {
  h1 {
    font-size: 60px;

    &::before {
      width: 275px;
      height: 35px;
    }
  }
}

@media(min-width: 768px) {
  h1 {
    font-size: 80px;

    &::before {
      width: 325px;
      height: 40px;
      left: 0;
    }
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