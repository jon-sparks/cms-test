<template>
  <div ref="main">
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
  data () {
    return {
      resizeObserver: null,
    }
  },
  mounted () {
    this.resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        entry.contentRect.width <= 640
          ? !this.isMobile && this.$store.dispatch(`setIsMobile`, true)
          : this.isMobile && this.$store.dispatch(`setIsMobile`, false)
      })
    })
    this.resizeObserver.observe(this.$refs.main)
  },
  computed: {
    siteName () {
      return this.$store.state.settings[0].site_name
    },
    basketStatus () {
      return this.$store.state.basketStatus
    },
    isMobile () {
      return this.$store.state.isMobile
    }
  }
}
</script>

<style>
body {
  background: var(--dark);
}
html {
  font-family: 'Titillium Web', sans-serif;
  color: var(--light);
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
