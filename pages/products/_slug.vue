<template>
  <section class="product">
    <Banner 
      :image="post['featured-image']"
      :text="post.title"
    />
    <div class="main-width">
      <h2>{{ post.title }}</h2>

      <select v-model="extra">
        <option value="0">Standard</option>
        <option value="5">Bronze</option>
        <option value="12">Silver</option>
        <option value="100">Gold</option>
      </select>

      <h3>{{ post.price }}</h3>
      <button class="snipcart-add-item"
        :data-item-id="slug"
        :data-item-price="post.price"
        :data-item-url="`/products/${slug}`"
        :data-item-description="post.short_description"
        :data-item-image="post.featured_image"
        :data-item-name="post.title"
        data-item-custom1-name="Flavor"
        data-item-custom1-options="Natural|Smoked[+100.00]"
      >
        Add to cart
      </button>
      <nuxt-content :document="post" />
    </div>
  </section>
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
  data () {
    return {
      extra: 0
    }
  },
  computed: {
    slug () {
      return this.post.title.replace(/\s+/g, '-').toLowerCase();
    },
    finalPrice () {
      return parseFloat(this.post.price) + parseFloat(this.extra);
    }
  }
};
</script>