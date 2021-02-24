<template>
  <section class="index-list">
    <nuxt-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
      class="index-item"
    >
      <div class="index-item__image">
        <img :src="item['featured-image']" alt="">
      </div>
      <div class="index-item__content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <button>
          VIEW
        </button>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: [`items`]
}
</script>

<style scoped>
.index-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 3rem;
}

.index-item {
  width: auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--tertiary);
  overflow: hidden;
}

.index-item h3 {
  font-size: 30px;
}

.index-item__image img {
  display: block;
  width: 100%;
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