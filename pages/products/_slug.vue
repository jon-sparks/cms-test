<template>
  <div>
    <Banner 
      :image="post['featured-image']"
      :text="post.title"
    />
    <h2>{{ post.title }}</h2>
    <button class="snipcart-add-item"
      data-item-id="starry-night"
      :data-item-price="post.price"
      data-item-url="/paintings/starry-night"
      :data-item-description="post.short_description"
      :data-item-image="post.featured_image"
      :data-item-name="post.title">
      Add to cart
    </button>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("products", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>