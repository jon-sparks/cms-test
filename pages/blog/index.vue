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
    <Splash />
  </section>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content }) {
    const indexData = await $content("blog").fetch();
    const blogIndex = await $content("index").where({title: 'Blog'}).fetch();

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