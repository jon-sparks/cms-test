<template>
  <nuxt-link
    :to="link"
    class="index-item"
  >
    <AspectRatio ratio="1:1">
      <div class="index-item__image">
        <Img
          :source="image"
          :alt="`alt`"
          :width="330"
        />
        <h3 v-if="!item['wheel-logo']">{{ item.title }}</h3>
      </div>
    </AspectRatio>
    <Img
      v-if="item['wheel-logo']"
      :src="item['wheel-logo']"
      :alt="`wheel logo`"
      :width="200"
      class="wheel-logo"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: [`item`, `link`, `image`]
}
</script>

<style lang="scss" scoped>
</style>