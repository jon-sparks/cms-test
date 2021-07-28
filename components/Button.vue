<template>
  <button
    v-if="submit"
    class="button"
  >
    <slot />
  </button>
  <a
    v-else-if="!submit && button.external_link"
    class="button"
    :href="button.link"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    v-else-if="!submit"
    class="button"
    :to="button.link"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    button: {
      default: () => {}
    },
    submit: {
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: .5rem 2rem;
  background: var(--primary);
  border: solid 2px var(--primary);
  color: white;
  text-decoration: none;
  margin-top: 2rem;
  transition: all ease .2s;

  &:hover,
  &:focus {
    background: none;
    color: var(--primary);
  }
}
</style>