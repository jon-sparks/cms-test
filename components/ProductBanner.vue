<template>
  <section class="banner">
    <div class="main-width">
      <!-- <Img
        :source="logo"
        :alt="`alt`"
        :width="525"
        class="banner__logo"
      /> -->
      <div
        v-html="require(`~/assets/images/svg/wheel-logos/${name}.svg?raw`)"
        class="banner__logo"
      />
      <div
        class="banner__info"
      >
        <ul>
          <li>- CNC machined face</li>
          <li>- Welded construction</li>
          <li>- 14" - 15"</li>
          <li>- 4 Stud</li>
        </ul>
      </div>
    </div>
    <Img
      :source="image"
      :alt="`alt`"
      :width="1250"
      class="banner__image"
    />
  </section>
</template>

<script>
export default {
  props: [`image`, `logo`, `name`],
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  height: 100vh;
  margin-bottom: 14vw;

  &__logo {
    width: 500px;
    margin-bottom: 2rem;

    /deep/svg {
      fill: var(--primary);

      path {
        stroke: none;
      }
    }
  }

  &__image {
    position: absolute;
    top: -10rem;
    left: 50%;
    height: 140vh;
  }

  &__info {

    ul {
      list-style: none;
      padding: 0;
      color: var(--primary);

      li {
        padding: .25rem 0;
        font-size: 18px;
      }
    }
  }
}
</style>