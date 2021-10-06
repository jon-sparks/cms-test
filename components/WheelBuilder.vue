<template>
  <div class="wheel-builder">
    <form name="wheel enquiry" class="product__config-form">
    <!-- <form name="wheel enquiry" class="product__config-form" v-on:submit.prevent="sendMail"> -->
      <div class="product__config-block">
        <Img
          :source="wheelImage"
          :alt="`alt`"
          :width="350"
        />
      </div>
      <div class="product__config-block">
        <label for="model">Model</label>
        <select v-model="model" name="model" id="model">
          <option
            v-for="model in allWheels"
            :key="model.slug"
            :value="model.title"
          >
            {{ model.title }}
          </option>
        </select>
      </div>
      <div class="product__grid">
        <div class="product__config-block">
          <label for="diameter">Diameter <span>inches</span></label>
          <select v-model="diameter" name="diameter" id="diameter">
            <option value="0">Choose</option>
            <option
              v-for="item in wheelConfig.diameter"
              :key="`diameter-${item.size}`"
              :value="item.size"
            >
              {{ item.size }}
            </option>
          </select>
        </div>
        <div class="product__config-block">
          <label for="width">Width <span>inches</span></label>
          <select v-model="width" name="width" id="width">
            <option value="0">Choose</option>
            <option
              v-for="item in wheelConfig.width"
              :key="`width-${item.size}`"
              :value="item.size"
            >
              {{ item.size }}
            </option>
          </select>
        </div>
        <div class="product__config-block">
          <label for="offset">Offset <span>mm</span></label>
          <select v-model="offset" name="offset" id="offset">
            <option value="0">Choose</option>
            <option value="-20">-20</option>
            <option value="-15">-15</option>
            <option value="-10">-10</option>
            <option value="-5">-5</option>
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div class="product__config-block">
          <label for="quantity">Quantity<span>-</span></label>
          <select v-model="quantity" name="quantity" id="quantity">
            <option value="0">Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div class="product__config-block">
        <span>Total: £{{ total }}</span>
      </div>
      <button
        v-if="index !== 0 && last"
        class="product__close"
        @click="closeLast(index)"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: [`updateList`, `closeLast`, `allWheels`, `last`, `index`, `modelIndex`],
  data () {
    return {
      model: ``,
      diameter: 0,
      width: 0,
      offset: 0,
      quantity: 1,
    }
  },
  watch: {
    config: {
      handler () {
        this.updateList(this.config, this.index)
      },
      deep: true
    }
  },
  mounted () {
    this.model = this.allWheels[this.modelIndex].title
  },
  methods: {
    findPrice (val, type) {
      return parseInt(this.wheelConfig[type].filter(item => item.size === val)[0]?.price)
    },
    handleButton () {
      this.addSet(this.config)
      this.last = false
    }
  },
  computed: {
    wheelConfig () {
      return this.$store.state.settings[0].wheel_config
    },
    total () {
      return (this.findPrice(this.diameter, `diameter`) + this.findPrice(this.width, `width`)) * this.quantity || 0
    },
    wheelImage () {
      return this.model.length && this.allWheels.filter(wheel => wheel.title === this.model)[0][`front-on-image`]
    },
    config () {
      return {
        model: this.model,
        diameter: this.diameter,
        width: this.width,
        offset: this.offset,
        quantity: this.quantity
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wheel-builder {
  // display: flex;
  // align-items: center;
  // gap: 3rem;
}

.product {

  &__config-form {
    position: relative;
    overflow: hidden;
    padding: 2rem;
    border: solid 1px var(--primary);
    border-radius: 10px;
  }

  &__config-block {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-start;
    margin-bottom: 2rem;

    &:first-of-type,
    &:last-of-type {
      margin: 0;
    }

    img {
      position: absolute;
      top: -4rem;
      right: -4rem;
      z-index: -1;
      opacity: .1;
    }

    label {
      font-family: var(--heading-font);
      color: var(--primary);
      font-size: 18px;
      display: flex;
      flex-direction: column;
      // gap: .5rem;

      span {
        font-size: 12px;
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
      border: none;
      background: none;
      border: solid 1px var(--primary);
      color: var(--primary);
      width: 100%;

      &#model {
        width: auto;
      }
    }
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 28px;
    height: 28px;
    background: none;
    border: none;
    display: flex;
    place-items: center;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      background: var(--primary);
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-225deg);
    }
  }

  &__grid {
    display: grid;
    // grid-template-columns: min-content min-content;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: .5rem;
  }
}
</style>
