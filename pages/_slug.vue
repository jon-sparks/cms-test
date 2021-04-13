<template>
  <div class="container">
    <Banner
      :image="page['featured-image']"
      :text="page.title"
    />
    <Flexible
      :sections="page.sections"
    />
  </div>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content, params }) {
    const page = await $content(`/flexible/${params.slug}`).fetch();

    return {
      page,
    };
  },
}
</script>

<style>

</style>
