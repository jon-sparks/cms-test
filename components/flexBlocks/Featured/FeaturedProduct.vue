<template>
  <div class="home-product">
    <client-only>
      <nuxt-link
        :to="`/${wheel.product}`"
      >
        <img :src="src" :alt="name" loading="lazy">
        <div class="product-overlay">
          <div>
            <h3>{{ name }}</h3>
          </div>
        </div>
      </nuxt-link>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['wheel'],
  data () {
    return {
      // src: this.$cloudinary.image.url(`/${this.getId(this.product['featured-image'])}`, {
      //   width: 800,
      //   height: 800,
      //   crop: 'scale'
      // }),
      product: null,
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getProd();
    })
  },
  methods: {
    async getProd () {
      const post = await this.$content(this.wheel.product).fetch();
      this.product = await post;
    },
    getId (path) {
      const index1 = path.lastIndexOf(`/`, path.lastIndexOf(`/`)-1)
      const index2 = path.lastIndexOf(`.`)
      return path.substring(index1, index2)
    }
  },
  computed: {
    name () {
      return this.product?.title
    },
    src () {
      if (this.product) {
        return this.$cloudinary.image.url(`/${this.getId(this.product['featured-image'])}`, {
          width: 800,
          height: 800,
          crop: 'scale'
        })
      }
      return false
    },
  }
}

</script>

<style lang="scss" scoped>
.home-product {
  width: 100%;
  max-width: 400px;

  & > a {
    position: relative;
    display: block;
    overflow: hidden;

    &:hover,
    &:focus {

      img {
        transform: scale(1.1);
      }

      .product-overlay {
        opacity: 1;
      }
    }

    .product-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      transition: opacity ease .3s;

      & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 80%;
        border: solid 1px var(--primary);

        h3 {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          font-size: 55px;
          margin: 0;
          line-height: 1;
        }
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ease .3s;
  }
}

@media(min-width: 480px) {
  .home-product {

    a .product-overlay {
      opacity: 0;
      background: rgba(0,0,0,.8);

      & > div h3 {
        font-size: 55px;
      }
    }
  }
}
</style>