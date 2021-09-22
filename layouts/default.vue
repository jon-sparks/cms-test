<template>
  <div ref="main">
    <!-- <Basket 
      v-if="basketStatus"
    /> -->
    <Header />
    <Logo
      v-if="!isProdPage"
      class="bg"
    />
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
    },
    isProdPage () {
      return this.$route.name === `products-slug`
    }
  }
}
</script>

<style lang="scss">
body {
  background: var(--dark);
  overflow-x: hidden;
}
html {
  font-family: var(--body-font);
  font-weight: 400;
  font-size: 16px;
  color: var(--light);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  fill: #1a1a1a;
  z-index: -1;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading-font);
  font-weight: 500;
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
