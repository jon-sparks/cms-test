<template>
  <section class="index-list">
    <nuxt-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
      class="index-item"
    >
      <AspectRatio data-aspect="1:1">
        <div class="index-item__image">
          <img :src="item['featured-image']" alt="">
          <h3>{{ item.title }}</h3>
        </div>
        <!-- <div class="index-item__content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <button>
            VIEW
          </button>
        </div> -->
      </AspectRatio>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: [`items`]
}
</script>

<style lang="scss" scoped>
.index-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 6rem;
  row-gap: 6rem;
}

.index-item {
  width: auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--tertiary);
}

.index-item h3 {
  font-size: 24px;
}

.index-item__image {
  padding: 2rem;
  position: relative;
  background: #eb9e00;
  border-radius: 25px;
  width: 100%;
  height: 100%;
}

.index-item__image img {
  position: absolute;
  top: -50px;
  right: -40px;
  width: 100%;
  z-index: 1;
}

.index-item__image h3 {
  position: absolute;
  bottom: 10px;
  left: 29px;
  color: #252525;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 50px;
}

.index-item__content {
  padding: 2rem;
  background: white;
}

.index-item__content button {
  font-family: 'Titillium Web', sans-serif;;
  font-size: 22px;
  margin-top: 2rem;
  padding: .25rem 2rem;
  border: none;
  background: var(--tertiary);
  color: var(--white);
  pointer-events: none;
}
</style>