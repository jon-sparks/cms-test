// insta api token: IGQVJWUWVDRWxrMHZAtcEU3ZA1VUMmhWMFdLSUJXTzFhektBS2t2N3J5aVlHSS1CbXNuM3IxMnF0bnBkbk5LNklTb250MXpqSmRmVWwwbkhKTW1JdHIyS0d5OVBQc2Y1WUdHUlNVQ2FyakxnUklNbnktUAZDZD
<template>
  <div class="container main">
    
    <HomeBanner />

    <!-- <section class="home-feature main-width">
      <h2>Discover</h2>
      <div class="home-feature__container">
        <Featured
          v-for="(wheel, index) in page[0].features_wheels"
          :key="index"
          :wheel="wheel"
        />
      </div>
    </section> -->

    <Flexible
      :sections="home.sections"
    />

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
  font-family: 'Titillium Web', sans-serif;
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
