<template>
  <section class="main">
    <div
      v-for="(section, index) in sections"
      :key="index"
    >
      <label :for="section.option_name">
        {{ section.option_name }}
      </label>
      <select
        :id="section.option_name"
        @change="addOption(index, $event)"
        ref="option"
      >
        <option value="">
          Select an option
        </option>
        <option
          v-for="(option, index) in section.option_parts"
          :key="index"
          :value="option.price_id"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  props: ['sections'],
  data () {
    return {
      options: null,
    }
  },
  mounted() {
    this.$parent.options = this.$refs.option.map(option => new Array(option.value))
  },
  methods: {
    addOption (index, $event) {
      this.$parent.options[index] = { price: $event.target.value, quantity: 1 }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>