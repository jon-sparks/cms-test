<template>
  <header>
    <nuxt-link
      to="/"
    >
      <h2>Logo</h2>
    </nuxt-link>
    <nav>

    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    navItems () {
      return this.$store.state.nav;
    }
  }
}
</script>

<style scoped>
header {
  background: grey;
  padding: 1rem;
}
</style>