<template>
  <section class="banner">
    <div class="main-width">
      <!-- <Img
        :source="logo"
        :alt="`alt`"
        :width="525"
        class="banner__logo"
      /> -->
      <div
        v-html="require(`~/assets/images/svg/wheel-logos/${name}.svg?raw`)"
        class="banner__logo"
      />
    </div>
    <Img
      :source="image"
      :alt="`alt`"
      :width="1250"
      class="banner__image"
    />
  </section>
</template>

<script>
export default {
  props: [`image`, `logo`, `name`],
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  height: 100vh;

  &__logo {
    width: 500px;
    fill: var(--primary);
  }

  &__image {
    position: absolute;
    top: -20rem;
    right: -25%;
    height: 75vw;
  }
}
</style>