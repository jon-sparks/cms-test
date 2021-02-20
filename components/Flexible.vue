<template>
  <section>
    <template v-for="(section, index) in sections">
    
      <TextBlock
        v-if="section.type === 'text_block'"
        :key="index"
        :section="section"
      />

      <FullWidthImage
        v-else-if="section.type === 'full_width_image'"
        :key="index"
        :section="section"
      />

      <ImageText
        v-else-if="section.type === 'image_by_text'"
        :key="index"
        :section="section"
      />

    </template>
  </section>
</template>

<script>
export default {
  props: [`sections`]
}
</script>

<style>
</style>