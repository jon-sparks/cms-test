<template>
  <footer>
    <section class="footer-top ">
      <div class="main-width">

      </div>
    </section>
    <section class="footer-bottom">
      <div class="main-width">
        <span>{{ companyName }}</span>
        <span>Something Else</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  computed: {
    companyName () {
      return this.$store.state.settings[0].site_name
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-top {
  background: var(--primary);
  padding: 5rem 1rem;
}
.footer-bottom {
  background: var(--secondary);
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
