<template>
  <a
    class="button"
    v-if="button.external_link"
    :href="button.link"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    class="button"
    v-else
    :to="button.link"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: [`button`]
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