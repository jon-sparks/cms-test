<template>
  <div :data-aspect="aspectRatio">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['ratio'],
  computed: {
    aspectRatio () {
      return this.ratio
    }
  }
};
</script>

<style lang="scss" scoped>
[data-aspect] {
	display: block;
	max-width: 100%;
	position: relative;
	overflow: hidden;
}

[data-aspect]:before {
	content: '';
	display: block;
}

[data-aspect] > * {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
  width: 100%;
}

[data-aspect] > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

[data-aspect="16:9"]:before {
	padding-top: 56.25%;
}

[data-aspect="3:2"]:before {
	padding-top: 66.6666%;
}

[data-aspect="4:3"]:before {
	padding-top: 75%;
}

[data-aspect="1:1"]:before {
	padding-top: 100%;
}
</style>
