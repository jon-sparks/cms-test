<template>
  <section
    class="home-feature"
    :class="{ 'extra-margin' : section.extra_margin }"
  >
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

  &__container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 2rem;
  }
}

.extra-margin {
  margin: 5rem auto 6rem;
}
</style>
