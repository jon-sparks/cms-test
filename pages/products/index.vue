<template>
  <section>
    <Banner
      :image="page.banner.image"
      :text="page.banner.banner_text"
    />
    <section class="main-width">
      <h1>My Products</h1>
    </section>
    <!-- <div v-for="(item, index) in indexData" :key="index">
      <img :src="item['featured-image']" alt="">
      <h4>{{ item.title }}</h4>
    </div> -->
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const indexData = await $content("products").fetch();
    const productsIndex = await $content("index").where({title: 'Products'}).fetch();

    return {
      productsIndex,
      indexData,
    };
  },
  computed: {
    page () {
      return this.productsIndex[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>