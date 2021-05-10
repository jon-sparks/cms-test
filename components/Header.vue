<template>
  <header :class="{ 'scrolled' : scrolled }">
    <div class="nav-container main-width">
      <nuxt-link
        to="/"
        class="logo-link"
      >
        <img src="https://res.cloudinary.com/doqfxofg6/image/upload/v1620676628/CRUX_LOGO_WHITE_RGB-01_lpkoqv.png" alt="">
      </nuxt-link>
      <nav>
        <nuxt-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.navPath"
        >
          {{ item.title }}
        </nuxt-link>
        <BasketButton />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrolled: false,
    }
  },
  methods: {
    handleScroll () {
      window.scrollY > 10
        ? this.scrolled = true
        : this.scrolled = false
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    navItems () {
      return this.$store.getters.getSortedNav;
    }
  }
}
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  z-index: 999;
  transition: background ease .3s;
}

/* header.scrolled {
  background: var(--secondary);
} */

.nav-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo-link {
  height: 70px;
}
.logo-link img {
  height: 100%;
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  color: white;
  font-size: 20px;
  text-transform: capitalize;
  padding: .5rem;
  margin: 0 1rem;
  text-decoration: none;
}
</style>