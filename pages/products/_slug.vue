<template>
  <section class="product">
    <Banner 
      :image="post['featured-image']"
      :text="post.title"
    />
    <div class="main-width">
      <div class="product__container">
        <img class="product__main-image" :src="post['featured-image']" alt="">
        <div>
          <h1>{{ post.title }}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet placeat sapiente, consectetur tempora eius rerum libero sed nesciunt nulla tempore nihil, nobis optio blanditiis. Quasi illo similique maiores laboriosam?</p>
        </div>
      </div>
      <!-- <h2>{{ post.title }}</h2> -->

      <!-- <Configurator
        v-if="post.enable_configurator"
        :sections="post.configurator_options"
      /> -->

      <!-- <button @click="addToBasket">Add to basket</button>
      <nuxt-content :document="post" /> -->
    </div>
  </section>
</template>

<script>
import Configurator from '../../components/Configurator.vue';
export default {
  transition: `pagefade`,
  components: { Configurator },
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
      options: null,
    }
  },
  methods: {
    addToBasket () {
      this.$store.dispatch(`addToBasket`, {
        title: this.post.title,
        image: this.post['featured-image'],
        qty: 4,
        lineItems: this.options
      });
    },
    buyItem () {
      this.$stripe.redirectToCheckout({
        lineItems: this.options,
        // lineItems: [
        //   {
        //     price: 'price_1IUZYdASANJqFs3WnG4kzj7o', // Replace with the ID of your price
        //     quantity: 1,
        //   },
        //   {
        //     price: 'price_1IUx96ASANJqFs3W8g701Iix', // Replace with the ID of your price
        //     quantity: 1,
        //   },
        //   {
        //     price: 'price_1IUxBTASANJqFs3WkCx7B8vE', // Replace with the ID of your price
        //     quantity: 1,
        //   },
        // ],
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
  computed: {
    slug () {
      return this.post.title.replace(/\s+/g, '-').toLowerCase();
    },
  }
};
</script>

<style lang="scss" scoped>
.product {

  &__container {
  }

  &__main-image {
    width: 50%;
  }
}
</style>