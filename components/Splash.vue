<template>
  <section class="splash">
    <Logo
      fill="var(--dark)"
    />
  </section>
</template>

<script>
export default {
  // transition: `swipe`,
};
</script>

<style lang="scss" scoped>
.splash {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--primary);
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  z-index: 999;

  svg {
    width: 25vw;
  }
}
</style>
