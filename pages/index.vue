<template>
  <div class="container main">
    <HomeBanner />
    <Flexible
      :sections="home.sections"
    />
    <Splash />
  </div>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content }) {
    const page = await $content("home").fetch();

    return {
      page,
    };
  },
  computed: {
    home () {
      return this.page[0];
    }
  }
}
</script>