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
          <!-- <div class="product__poster"></div> -->
          <div class="product__config">
            <WheelBuilder
              v-for="(num, index) in counter"
              :key="`config-${num}`"
              :updateList="updateList"
              :modelIndex="modelIndex"
              :closeLast="closeLast"
              :allWheels="indexData"
              :last="index === counter - 1"
              :index="index"
              ref="builder"
            />
            <button
              v-if="counter < 4"
              class="product__add"
              @click="addSet"
            >
              <div class="product__add-plus"></div>
              <span>Add<br>Configuration</span>
            </button>
          </div>
          <div v-html="formattedConfigs"></div>
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
      counter: 1,
      configs: [],
      formattedConfigs: null,
    }
  },
  methods: {
    updateList (obj, index) {
      this.configs[index] = obj
      this.formatConfigs()
    },
    formatConfigs () {
      const strings = this.configs.map(config => (
      `<ul>
        <li>model: ${config.model}</li>
        <li>diameter: ${config.diameter}</li>
        <li>width: ${config.width}</li>
        <li>offset: ${config.offset}</li>
        <li>quantity: ${config.quantity}</li>
      </ul>`
      ))
      strings.length > 1 ? this.formattedConfigs = strings.join(``) : this.formattedConfigs = strings[0]
    },
    addSet () {
      this.counter++
    },
    closeLast (index) {
      this.configs.splice(this.configs.length - 1, 1)
      this.formatConfigs()
      this.counter--
    },
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
    },
    async sendMail () {
      const mail = await fetch (`/.netlify/functions/test`, { method: 'post', body: this.body })
      const res = await mail.json()
      console.log(res)
    },
  },
  computed: {
    modelIndex () {
      return this.indexData.findIndex(item => item.title === this.model)
    },
    slug () {
      return this.post.title.replace(/\s+/g, '-').toLowerCase()
    },
  }
};
</script>

<style lang="scss" scoped>
.product {

  &__container {
  }

  &__config {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    margin-bottom: 3rem;
  }

  // &__details {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 3rem;
  // }

  &__poster {
    width: 100%;
    height: 500px;
    background: slategrey;
  }

  &__main-image {
    width: 50%;
  }

  &__add {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    place-self: stretch;
    // width: 336px;
    // height: 467px;
    border: solid 1px var(--primary);
    border-radius: 10px;
    background: none;
    cursor: pointer;

    span {
      font-family: var(--heading-font);
      color: var(--primary);
      text-transform: uppercase;
      font-size: 22px;
    }

    &-plus {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      border: solid 2px var(--primary);
      border-radius: 50%;
      background: none;

      &::before,
      &::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        border-radius: 1px;
        background: var(--primary);
      }

      &::after {
        transform: rotate(90deg);
      }
    }
  }
}
</style>