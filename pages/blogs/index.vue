<template>
  <section>
    <Banner
      :image="page.banner.image"
      :text="page.banner.banner_text"
    />
    <section class="main-width">
      <h1>My Blogs</h1>
    </section>
    <div v-for="(item, index) in indexData" :key="index">
      <img :src="item['featured-image']" alt="">
      <h4>{{ item.title }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const indexData = await $content("blog").fetch();
    const blogIndex = await $content("index").where({title: 'Blogs'}).fetch();

    return {
      blogIndex,
      indexData,
    };
  },
  computed: {
    page () {
      return this.blogIndex[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>