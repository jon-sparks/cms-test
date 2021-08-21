<template>
  <client-only>
    <nuxt-link
      :to="`/${wheel.product}`"
      class="index-item"
    >
      <AspectRatio ratio="1:1">
        <div
          class="index-item__image animate"
          ref="animate"
        >
          <Img
            :source="featuredImage"
            :alt="`alt`"
            :width="330"
          />
          <!-- <h3>{{ name }}</h3> -->
        </div>
      </AspectRatio>
    </nuxt-link>
  </client-only>
</template>

<script>
export default {
  props: ['wheel'],
  data () {
    return {
      product: null,
      featuredImage : ``,
    }
  },
  watch: {
    product () {
      this.featuredImage = this.product[`featured-image`];
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getProd()
      this.$animate(this.$refs.animate)
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
          width: 318,
          height: 318,
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
  position: relative;
  width: 100%;
  max-width: 350px;

  & > a {
    position: relative;
    display: block;
    padding: 1rem;
    overflow: hidden;
    z-index: 1;

    &:hover,
    &:focus {

      img {
        transform: scale(1.05);
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

.animate {
  opacity: 0;
  transform: translateY(150px);
  transition: all ease .5s;

  &--in {
    opacity: 1;
    transform: translateY(0);
  }
}

@media(min-width: 768px) {
  .home-product {
  }
}
</style>