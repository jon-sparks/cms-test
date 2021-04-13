<template>
  <div>
    <Banner 
      :image="post['featured-image']"
      :text="post.title"
    />
    <Flexible
      :sections="post.sections"
    />
  </div>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content, params, error }) {
    let post;
    try {
      // post = await $content("blog", params.slug).fetch();
      post = await $content(`blog/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>