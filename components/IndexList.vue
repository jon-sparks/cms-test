<template>
  <section class="index-list">
    <WheelItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :link="item.path"
      :image="item['featured-image']"
    />
  </section>
</template>

<script>
export default {
  props: [`items`]
}
</script>

<style lang="scss" scoped>
.index-list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 5rem;
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
</style>