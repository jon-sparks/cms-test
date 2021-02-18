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

<style>
.banner {
  position: relative;
  width: 100%;
  height: 70vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
}

.banner__image {
  position: relative;
  display: flex;
  align-items: center;
  width: 75%;
  height: 85%;
  background-size: cover;
  background-position: center;
}

h1 {
  transform: translateX(20%);
  font-size: 95px;
  line-height: 1;
  color: rgb(65, 65, 65);
  background: white;
  padding: 1.5rem 3rem 1rem;
  z-index: 1;
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