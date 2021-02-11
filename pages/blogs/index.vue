<template>
  <section>
    <!-- <Banner
      :image="home.banner.image"
      :text="home.banner.banner_text"
    /> -->
    <section class="main-width">
      <h1>My Blogs</h1>
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogData = await $content("blog").fetch();

    return {
      blogData,
    };
  },
}
</script>

<style lang="scss" scoped>
</style>