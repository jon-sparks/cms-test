<template>
  <section class="main">
    <template v-for="(section, index) in sections">
    
      <TextBlock
        v-if="section.type === 'text_block'"
        :key="index"
        :section="section"
      />

      <ImageBlock
        v-else-if="section.type === 'image'"
        :key="index"
        :section="section"
      />

      <ImageText
        v-else-if="section.type === 'image_by_text'"
        :key="index"
        :section="section"
      />

      <Carousel
        v-else-if="section.type === 'carousel'"
        :key="index"
        :section="section"
      />

      <Video
        v-else-if="section.type === 'video'"
        :key="index"
        :section="section"
      />

      <Contact
        v-else-if="section.type === 'contact_form'"
        :key="index"
        :section="section"
      />

      <Gallery
        v-else-if="section.type === 'image_gallery'"
        :key="index"
        :section="section"
      />

      <Featured
        v-else-if="section.type === 'featured_products'"
        :key="index"
        :section="section"
      />

    </template>
  </section>
</template>

<script>
import Contact from './flexBlocks/Contact.vue'
export default {
  components: { Contact },
  props: [`sections`]
}
</script>

<style>
</style>