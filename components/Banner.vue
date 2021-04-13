<template>
  <section class="banner">
    <transition name="banner" appear>
      <div class="banner__image" :style="`background-image: url(${image})`">
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
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 90vh;
  // padding-top: 100px;
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
}

.banner__image {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
}

h1 {
  transform: translateX(20%);
  text-transform: uppercase;
  font-size: 95px;
  font-weight: bold;
  line-height: 1;
  color: black;
  padding: 1rem 3rem;
  z-index: 1;
  background: white;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  mix-blend-mode: screen;
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