<template>
  <client-only>
    <swiper>
      <swiper-slide>
        Only loaded and rendered in browser (client)
      </swiper-slide>
    </swiper>
  </client-only>
</template>

<script>
export default {
  props: [`section`]
}
</script>

<style scoped>

</style>