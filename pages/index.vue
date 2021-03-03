<template>
  <div class="container">
    <Banner
      :image="home.banner.image"
      :text="home.banner.banner_text"
    />
    <Content
      :content="home"
    />
    <section>
      <div>
        <button class="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="79.99"
          data-item-url="/paintings/starry-night"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/assets/images/starry-night.jpg"
          data-item-name="The Starry Night"
          data-item-custom1-name="Frame color"
          data-item-custom1-options="Black|Brown|Gold">
          Add to cart
        </button>
      </div>
      <div hidden id="snipcart" data-api-key="ODMxZTAwMTQtNTNmMS00MWZiLWE2YTUtZDNjYTUxYzc0NjgyNjM3NTAyMzAyODEyMjI1Mjk4" data-config-modal-style="side"></div>
    </section>
  </div>
</template>

<script>
export default {
  transition: `home`,
  async asyncData({ $content }) {
    const page = await $content("home").fetch();

    return {
      page,
    };
  },
  computed: {
    home () {
      return this.page[0];
    }
  }
}
</script>

<style>
.title {
  font-family: 'Titillium Web', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.home-enter-active,
.home-leave-active {
  transition: all ease .3s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
