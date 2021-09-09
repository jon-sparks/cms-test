<template>
  <section
    class="home-feature main-width"
    :class="{ 'extra-margin' : section.extra_margin }"
  >
    <UnderlinedTitle>Discover</UnderlinedTitle>
    <div class="index-list">
      <FeaturedProduct
        v-for="(wheel, index) in section.products"
        :key="index"
        :wheel="wheel"
      />
    </div>
    <Button
      :button="section.button"
      :inverted="true"
    >
      {{ section.button.text }}
    </Button>
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
    column-gap: 2rem;
    row-gap: 6rem;
    margin-top: 5rem;
  }
}

@media(min-width: 1024px) {
  .index-list {
    column-gap: 3rem;
  }
}

@media(min-width: 1750px) {
  .index-list {
    column-gap: 6rem;
  }
}

.home-feature {
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    font-size: 24px;
    margin-top: 4rem;
  }
}

.extra-margin {
  margin: 5rem auto 6rem;
}
</style>
