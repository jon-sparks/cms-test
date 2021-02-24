<template>
  <section class="content-width">
    <div class="rich-text" v-html="md" />
  </section>
</template>

<script>
export default {
  props: [`section`],
  computed: {
    md () {
      return this.$parseMd(this.section.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-text {
  position: relative;

  /deep/img {
    margin: 2rem 0;
    width: 100%;
  }

  /deep/a {
    position: relative;
    color: var(--primary);
    font-weight: bold;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20%;
      height: 100%;
      background: var(--secondary);
      opacity: .4;
      z-index: -1;
      transition: width ease .2s;
    }

    &:hover {
      
      &::after {
        width: 100%;
      }
    }
  }
}
</style>