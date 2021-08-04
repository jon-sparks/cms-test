<template>
  <div>
    <!-- <Basket 
      v-if="basketStatus"
    /> -->
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: `${this.siteName} | ${this.$route.name}`,
    }
  },
  computed: {
    siteName () {
      return this.$store.state.settings[0].site_name;
    },
    basketStatus () {
      return this.$store.state.basketStatus;
    }
  }
}
</script>

<style>
body {
  /* background: var(--accent);
  background: rgb(245,245,245);
  background: linear-gradient(52deg, rgba(245,245,245,1) 0%, rgba(249,239,255,1) 100%); */
}
html {
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Titillium Web', sans-serif;
  margin-top: 1.5rem;
  margin-bottom: .5rem;
  color: var(--primary);
}

p {
  line-height: 1.6;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
