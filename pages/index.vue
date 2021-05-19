// insta api token: IGQVJWUWVDRWxrMHZAtcEU3ZA1VUMmhWMFdLSUJXTzFhektBS2t2N3J5aVlHSS1CbXNuM3IxMnF0bnBkbk5LNklTb250MXpqSmRmVWwwbkhKTW1JdHIyS0d5OVBQc2Y1WUdHUlNVQ2FyakxnUklNbnktUAZDZD
<template>
  <div class="container main">
    <HomeBanner />
    <!-- <Banner
      :image="home.banner.image"
      :text="home.banner.banner_text"
    /> -->

    <section class="home-about main-width">

      <HomeFeature
        v-for="(wheel, index) in page[0].features_wheels"
        :key="index"
        :wheel="wheel"
      />

    </section>

    <!-- <Insta /> -->

    <Content
      :content="home"
    />
  </div>
</template>

<script>
export default {
  transition: `pagefade`,
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

<style lang="scss" scoped>
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

.home-about {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .home-product {
    width: 100%;
    padding: 6rem;

    &:first-of-type {
      padding-right: 3rem;
    }
    &:last-of-type {
      padding-left: 3rem;
    }

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
        background: rgba(0,0,0,.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity ease .3s;

        & > div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80%;
          height: 80%;
          border: solid 1px var(--primary);
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ease .3s;
    }
  }
}
</style>
