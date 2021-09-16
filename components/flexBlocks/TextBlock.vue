<template>
  <section
    class="text-block content-width"
    :class="{ 'extra-margin' : section.extra_margin }"
  >
    <div class="rich-text animate" ref="animate" v-html="md" />
  </section>
</template>

<script>
export default {
  props: [`section`],
  mounted () {
    this.$animate(this.$refs.animate)
  },
  computed: {
    md () {
      return this.$parseMd(this.section.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.animate {
  opacity: 0;
  transform: translateY(150px);
  transition: all ease .6s;

  &--in {
    opacity: 1;
    transform: translateY(0);
  }
}

.rich-text {
  position: relative;

  /deep/img {
    margin: 2rem 0;
    width: 100%;
  }

  /deep/a {
    position: relative;
    color: var(--primary);
    font-weight: 500;
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

.extra-margin {
  margin: 7rem auto;
}
</style>