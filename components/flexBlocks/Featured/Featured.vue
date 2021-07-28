<template>
  <section class="home-feature main-width">
    <h2 class="underlined-title">Discover</h2>
    <div class="home-feature__container">
      <FeaturedProduct
        v-for="(wheel, index) in section.products"
        :key="index"
        :wheel="wheel"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: [`section`],
};
</script>

<style lang="scss" scoped>
.home-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 0;

  &__container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media(min-width: 480px) {
  .home-feature {

    &__container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
