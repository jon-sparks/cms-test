<template>
  <h2 class="animate" ref="title"><slot/></h2>
</template>

<script>
export default {
  mounted () {
    this.$animate(this.$refs.title)
  }
};
</script>

<style lang="scss" scoped>
h2 {
  position: relative;
  font-size: 70px;
  color: var(--primary);
  opacity: 0;
  transform: translateX(50px);
  transition: all ease .6s;

  &::after {
    content: '';
    position: absolute;
    bottom: 21px;
    left: -5%;
    width: 70%;
    height: 25px;
    z-index: -1;
    background: var(--grey);
    transform: translateX(-100px);
    transition: all ease .6s;
  }

  &.animate--in {
    opacity: 1;
    transform: translateX(0);

    &::after {
      transform: translateX(0);
    }
  }
}
</style>
