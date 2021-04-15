<template>
  <section class="main">
    <Banner
      :image="page.banner.image"
      :text="page.banner.banner_text"
    />
    <section class="main-width">
      <IndexList
        :items="indexData"
      />
    </section>

  </section>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content }) {
    const indexData = await $content("products").fetch();
    const productIndex = await $content("index").where({title: 'Products'}).fetch();

    return {
      productIndex,
      indexData,
    };
  },
  computed: {
    page () {
      return this.productIndex[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>