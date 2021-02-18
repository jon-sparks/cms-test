<template>
  <section>
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