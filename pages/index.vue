<template>
  <div class="container">
    <Banner
      :image="home.banner.image"
      :text="home.banner.banner_text"
    />
    <Content
      :content="home"
    />
  </div>
</template>

<script>
export default {
  transition: `home`,
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
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

<style>
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

.home-enter-active,
.home-leave-active {
  transition: all ease .3s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
