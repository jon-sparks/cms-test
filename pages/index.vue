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

<style lang="scss" scoped>
.title {
  font-family: 'Rubik', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
