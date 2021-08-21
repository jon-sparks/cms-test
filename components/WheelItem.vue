<template>
  <nuxt-link
    :to="link"
    class="index-item"
  >
    <client-only>
      <AspectRatio ratio="1:1">
        <div class="index-item__image">
          <Img
            :source="image"
            :alt="`alt`"
            :width="330"
          />
        </div>
      </AspectRatio>
    </client-only>
  </nuxt-link>
</template>

<script>
export default {
  props: [`item`, `link`, `image`]
}
</script>

<style lang="scss" scoped>
</style>