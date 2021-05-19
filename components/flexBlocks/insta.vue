<template>
  <section class="main-width insta">
    <template v-if="feed">
      <a
        v-for="(image, index) in feed.data"
        :key="index"
        :href="image.permalink"
        target="_blank"
      >
        <img
          :src="image.media_url"
          alt=""
        >
      </a>
    </template>
  </section>
</template>

<script>
export default {
  data () {
    return {
      feed: null,
    }
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    getFeed () {
      fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJWUWVDRWxrMHZAtcEU3ZA1VUMmhWMFdLSUJXTzFhektBS2t2N3J5aVlHSS1CbXNuM3IxMnF0bnBkbk5LNklTb250MXpqSmRmVWwwbkhKTW1JdHIyS0d5OVBQc2Y1WUdHUlNVQ2FyakxnUklNbnktUAZDZD`)
        .then(res => res.json())
        .then(data => this.feed = data)
    }
  },

}
</script>

<style lang="scss" scoped>
.insta {
  position: relative;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(16, 1fr);
  gap: .5rem;

  a {
    overflow: hidden;
    grid-column: span 2;
    grid-row: span 2;
    aspect-ratio: 1;

    &:hover,
    &:focus {

      img {
        transform: scale(1.1);
      }
    }

    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all ease .2s;
    }
  }


}
</style>