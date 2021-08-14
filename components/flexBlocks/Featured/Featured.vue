<template>
  <section
    class="home-feature main-width"
    :class="{ 'extra-margin' : section.extra_margin }"
  >
    <h2 class="underlined-title">Discover</h2>
    <div class="index-list">
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
.index-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 3rem;
}

@media(min-width: 768px) {
  .index-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 6rem;
    row-gap: 6rem;
    margin-top: 5rem;
  }
}

.home-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.extra-margin {
  margin: 5rem auto 6rem;
}
</style>
