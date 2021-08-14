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
          <Img
            :source="item['featured-image']"
            :alt="`alt`"
            :width="330"
          />
          <h3>{{ item.title }}</h3>
        </div>
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
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 5rem;
}

.index-item {
  width: auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--tertiary);

  h3 {
    font-size: 24px;
  }

  &__image {
    padding: 2rem;
    position: relative;
    background: #eb9e00;
    border-radius: 25px;
    width: 100%;
    height: 100%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      border: solid white 0px;
      border-radius: 25px;
      opacity: 1;
      transition: all ease .3s;
    }

    img {
      position: absolute;
      top: -25px;
      right: -10px;
      width: 90%;
      z-index: 1;
    }

    h3 {
      position: absolute;
      bottom: 10px;
      left: 29px;
      color: #252525;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 22px;
    }

    &:hover,
    &:focus-visible {

      &::before {
        animation: pulse 1s infinite .5s;
      }
    }
  }

  &__content {
    padding: 2rem;
    background: white;

    button {
      font-family: 'Titillium Web', sans-serif;;
      font-size: 22px;
      margin-top: 2rem;
      padding: .25rem 2rem;
      border: none;
      background: var(--tertiary);
      color: var(--white);
      pointer-events: none;
    }
  }
}

@media(min-width: 768px) {
  .index-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 6rem;
    row-gap: 6rem;
    margin-top: 10rem;
  }

  .index-item {

    &__image {

      img {
        top: -50px;
        right: -40px;
        width: 100%;
      }

      h3 {
        font-size: 50px;
      }
    }
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
    border: solid white 0;
    opacity: 1;
  }
  to {
    transform: scale(1.1);
    border: solid white 5px;
    opacity: 0;
  }
}
</style>