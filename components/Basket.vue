<template>
  <section class="basket">
    <div class="basket__box">

      <div
        v-for="(item, index) in basketItems"
        :key="index"
        class="basket__card"
      >
        <div class="basket__card-image">
          <img :src="item.image" alt="">
        </div>
        <div class="basket__card-details">
          <h5>{{ item.title }}</h5>
          <span>Qty: {{ item.qty }}</span>
        </div>
        <button
          @click="removeItem(index)"
        >
          Remove
        </button>
      </div>
      <button
        v-if="basketItems.length"
        @click.prevent="goToCheckout"
      >
        Checkout
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToCheckout () {
      this.$stripe.redirectToCheckout({
        lineItems: this.lineItems,
        mode: 'payment',
        successUrl: 'http://localhost:3000',
        cancelUrl: 'http://localhost:3000',
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
    },
    removeItem (index) {
      this.$store.dispatch(`removeFromBasket`, index);
    }
  },
  computed: {
    basketItems () {
      return this.$store.state.basketItems;
    },
    lineItems () {
      const arr = []
      this.basketItems.forEach(item => arr.push(...item.lineItems))
      const result = new map()
      arr.forEach(item => {
        result.set(item.price, item)
      })
      // return arr;
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.7);
  z-index: 999;

  &__box {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    background: white;
    padding: 150px 4rem 4rem 4rem;
  }

  &__card {
    position: relative;
    display: flex;
    padding: .5rem 0;

    &-image {

      img {
        width: 125px;
        margin-right: 1rem;
      }
    }

    &-details {

      h5 {
        margin-top: 0;
        font-size: 22px;
      }
    }
  }
}
</style>