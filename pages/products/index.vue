<template>
  <section class="main">
    <Banner
      :image="page.banner.image"
      :text="page.banner.banner_text"
    />
    <section
      :class="hoveredSide && `product-showcase__${hoveredSide}`"
      class="product-showcase"
      ref="showcase"
    >

      <div 
        @mouseenter="hover($event.type, 'left')"
        @mouseleave="hover($event.type, 'left')"
        class="product__left"
      >
        <img
          :src="page.product_feature.left_product.image"
          :alt="page.product_feature.left_product.model_name"
        >
        <div class="spec">
          <h2>{{ page.product_feature.left_product.model_name }}</h2>
          <p>{{ page.product_feature.left_product.description }}</p>
          <nuxt-link :to="page.product_feature.left_product.related_product">View</nuxt-link>
        </div>
      </div>

      <div         
        @mouseenter="hover($event.type, 'right')"
        @mouseleave="hover($event.type, 'right')"
        class="product__right"
      >
        <img
          :src="page.product_feature.right_product.image"
          :alt="page.product_feature.right_product.model_name"
        >
        <div class="spec">
          <h2>{{ page.product_feature.right_product.model_name }}</h2>
          <p>{{ page.product_feature.right_product.description }}</p>
          <nuxt-link :to="page.product_feature.right_product.related_product">View</nuxt-link>
        </div>
      </div>

    </section>
    <section class="main-width">
      <IndexList
        :items="indexData"
      />
    </section>

  </section>
</template>

<script>
export default {
  transition: `pagefade`,
  async asyncData({ $content }) {
    const indexData = await $content("products").fetch();
    const productIndex = await $content("index").where({title: 'Products'}).fetch();

    return {
      productIndex,
      indexData,
    };
  },
  data () {
    return {
      hoveredSide: null
    }
  },
  methods: {
    hover (type, side) {
      type === `mouseenter`
      ? this.hoveredSide = side
      : this.hoveredSide = null
    }
  },
  computed: {
    page () {
      return this.productIndex[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.product-showcase {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 90vh;

  .product__left,
  .product__right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    overflow: hidden;
    transition: all ease .3s;

    h2 {
      font-family: "Sharp";
      text-transform: uppercase;
      font-size: 50px;
      margin-bottom: 2rem;
      color: white;
    }

    p {
      font-size: 18px;
    }

    img {
      height: 90%;
      transition: all ease .3s;
    }

    .spec {
      position: absolute;
      top: 50px;
      color: white;
      width: 500px;
      
      h2 {
        transition: all ease .3s;
      }

      p,
      button {
        transition: all ease .3s;
      }
    }
  }

  .product__left {
    background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgb(31, 31, 31) 100%);
    
    img {
      transform: translateX(-51vh) rotate(-90deg);
    }

    .spec {
      right: 50px;
      text-align: right;
    }
  }

  .product__right {
    background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(43,43,43,1) 100%);

    img {
      transform: translateX(51vh) rotate(90deg);
    }

    .spec {
      left: 50px;
      text-align: left;
    }
  }

  &__left {

    .product__left {
      width: 90%;

      img {
        transform: translateX(-300px) rotate(0deg);
      }
    }
    .product__right {
      width: 10%;

      .spec {
        
        h2,
        p,
        button {
          opacity: 0;
        }
      }
    }
  }

  &__right {

    .product__left {
      width: 10%;

      .spec {
        
        h2,
        p,
        button {
          opacity: 0;
        }
      }
    }
    .product__right {
      width: 90%;

      img {
        transform: translateX(300px) rotate(0deg);
      }
    }
  }
}
</style>