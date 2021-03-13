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
      <button @click="buyItem">Buy me</button>
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
  methods: {
    buyItem () {
      this.$stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1IT1NAASANJqFs3W3ca0nMLO', // Replace with the ID of your price
            quantity: 1,
          },
          {
            price: 'price_1H848VASANJqFs3WBkPnUkMn', // Replace with the ID of your price
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'http://localhost:3000',
        cancelUrl: 'http://localhost:3000',
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
    }
  },
  mounted () {
    console.log(this.$stripe.redirectToCheckout)
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