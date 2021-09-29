<template>
  <section class="product">
    <ProductBanner
      :image="post[`front-on-image`]"
      :logo="post[`wheel-logo`]"
      :name="slug"
    />
    <div class="main-width">
      <div class="product__container">
        <div class="product__details">
          <div class="product__poster"></div>
          <div class="product__config">
            <form name="wheel enquiry" class="product__config-form" data-netlify="true">
              <!-- For netlify functionality -->
              <input type="hidden" name="form-name" value="wheel enquiry">
              <!-- --- -->
              <div class="product__config-block">
                <label for="diameter">Model</label>
                <select v-model="model" name="model" id="model">
                  <option
                    v-for="model in indexData"
                    :key="model.slug"
                    :value="model.title"
                  >
                    {{ model.title }}
                  </option>
                </select>
              </div>
              <div class="product__config-block">
                <label for="diameter">Diameter <span>(inches)</span></label>
                <select v-model="diameter" name="diameter" id="diameter">
                  <option value="0">Choose</option>
                  <option value="100">13</option>
                  <option value="120">14</option>
                  <option value="140">15</option>
                </select>
              </div>
              <div class="product__config-block">
                <label for="width">Width <span>(inches)</span></label>
                <select v-model="width" name="width" id="width">
                  <option value="0">Choose</option>
                  <option value="100">6</option>
                  <option value="200">7</option>
                  <option value="300">8</option>
                  <option value="400">9</option>
                  <option value="500">10</option>
                  <option value="600">11</option>
                </select>
              </div>
              <div class="product__config-block">
                <label for="offset">Offset <span>(mm)</span></label>
                <select name="offset" id="offset">
                  <option value="0">Choose</option>
                  <option value="0">-20</option>
                  <option value="0">-15</option>
                  <option value="0">-10</option>
                  <option value="0">-5</option>
                  <option value="0">0</option>
                  <option value="0">5</option>
                  <option value="0">10</option>
                  <option value="0">15</option>
                  <option value="0">20</option>
                </select>
              </div>
              <div class="product__config-block">
                <label for="quantity">Quantity</label>
                <select v-model="quantity" name="quantity" id="quantity">
                  <option value="0">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div class="product__config-block">
                <span>Total: £{{ total }}</span>
              </div>
              <Button
                :submit="true"
                :inverted="true"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Splash />
  </section>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content, params, error }) {
    const indexData = await $content("products").fetch();
    let post;
    let model;
    try {
      post = await $content("products", params.slug).fetch();
      model = post.title
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      model,
      indexData
    };
  },
  data () {
    return {
      options: null,
      diameter: 0,
      width: 0,
      offset: 0,
      quantity: 1,
    }
  },
  watch: {
    post () {
      console.log(`CHANGED!!!`)
      this.model = this.post.title
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
    total () {
      return (parseInt(this.diameter) + parseInt(this.width) + parseInt(this.offset)) * this.quantity || 0
    }
  }
};
</script>

<style lang="scss" scoped>
.product {

  &__container {
  }

  &__config {

    &-block {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      align-items: flex-start;
      margin-bottom: 1rem;

      label {
        font-family: var(--heading-font);
        color: var(--primary);
        font-size: 24px;

        span {
          font-size: 16px;
        }
      }

      & > span {
        font-family: var(--heading-font);
        color: var(--primary);
        font-size: 30px;
      }

      select {
        padding: .5rem;
        font-family: var(--heading-font);
        font-size: 20px;
      }
    }
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  &__poster {
    width: 100%;
    height: 500px;
    background: slategrey;
  }

  &__main-image {
    width: 50%;
  }
}
</style>