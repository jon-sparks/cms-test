<template>
  <section class="banner" :style="`background-image: url(${image})`">
    <h1>{{ text }}</h1>
  </section>
</template>

<script>
export default {
  props: ['image', 'text']
}
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(255,255,255,0) 100%);
}

h1 {
  font-size: 75px;
  color: white;
  z-index: 1;
}
</style>