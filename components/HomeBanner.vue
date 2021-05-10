<template>
  <section class="banner">
    <div class="banner__video-wrapper">
      <div class="banner__video-overlay" />
      <video autoplay muted loop class="banner__video">
        <source src="~/assets/video/crux.mp4" type="video/mp4">
      </video>
    </div>
    <!-- <transition name="banner" appear> -->
      <div class="banner__content main-width">
        <!-- <transition name="banner-title" appear> -->
        <div>
          <h1>Crux</h1>
          <h2>Three piece wheels</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate maiores repudiandae saepe facere a explicabo quidem doloremque.</p>
          <nuxt-link
            class="banner__button"
            to="/"
          >
            Learn More
          </nuxt-link>
        </div>

        <!-- </transition> -->
      </div>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  // props: [`image`, `text`],
  data () {
    return {
      button: {
        link: `/`,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  // padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-bottom: 5rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
  }

  &__button {
    font-size: 22px;
    padding: .5rem 2rem;
    background: none;
    color: var(--primary);
    border: solid 2px var(--primary);
    text-decoration: none;
    margin-top: 2rem;
    transition: all ease .2s;

    &:hover,
    &:focus {
      background: var(--primary);
      color: black;
    }
  }

  &__video {
    min-width: 100%;
    min-height: 100%;

    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.4) 100%);
    }
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 0;

    h1, h2 {
      margin: 0;
      color: white;
    }

    h1 {
      font-size: 135px;
    }

    h2 {
      font-size: 35px;
    }

    p {
      color: white;
      font-size: 18px;
      max-width: 600px;
      margin: 2rem 0 3rem;
    }
  }
}

h1 {
  text-transform: uppercase;
  font-size: 95px;
  font-weight: bold;
  line-height: 1;
  color: white;
  z-index: 1;
}

.banner-enter-active, .banner-leave-active {
  transition: width .5s, height 1s .3s, opacity .5s;
}
.banner-enter, .banner-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 20px;
  width: 0;
  opacity: 0;
}

.banner-title-enter-active, .banner-title-leave-active {
  transition: opacity .5s .8s;
}
.banner-title-enter, .banner-title-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>