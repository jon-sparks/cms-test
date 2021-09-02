<template>
  <header :class="{ 'scrolled' : scrolled }">
    <div class="nav-container main-width">
      <nuxt-link
        to="/"
        class="logo-link"
      >
        <Logo
          fill="var(--primary)"
        />
      </nuxt-link>
      <transition
        name="slide"
      >
        <nav 
          class="mobile-nav"
          v-if="isMobile && mobileActive"
        >
          <nuxt-link
            to="/"
            class="logo-link"
          >
            CRUX
          </nuxt-link>
          <nuxt-link
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.navPath"
          >
            {{ item.title }}
          </nuxt-link>
          <button
            class="close-mobile"
            @click="mobileActive = false"
          >
          </button>
        </nav>
      </transition>
      <nav v-if="!isMobile && !mobileActive">
        <nuxt-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.navPath"
        >
          {{ item.title }}
        </nuxt-link>
        <!-- <BasketButton /> -->
      </nav>
      <transition name="fade">
        <button
          v-if="isMobile && !mobileActive"
          class="burger-button"
          @click="mobileActive = !mobileActive"
        >
          <div></div>
        </button>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrolled: false,
      mobileActive: false,
    }
  },
  watch: {
    $route () {
      this.mobileActive = false;
    }
  },
  methods: {
    handleScroll () {
      window.scrollY > 10
        ? this.scrolled = true
        : this.scrolled = false
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    navItems () {
      return this.$store.getters.getSortedNav;
    },
    isMobile () {
      return this.$store.state.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  z-index: 999;
  transition: background ease .3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7511379551820728) 100%);
    pointer-events: none;
    transition: opacity ease .3s;
  }
}

header.scrolled {
  background: var(--dark);
  border-bottom: solid 2px var(--primary);

  &::before {
    opacity: 0;
  }

  nav a {
    color: var(--primary)
  }
}

.nav-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
}

.logo-link {
  height: 70px;
  padding: .75rem 0;

  svg {
    height: 100%;
  }
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  color: var(--primary);
  font-size: 20px;
  text-transform: uppercase;
  padding: .5rem;
  margin: 0 1rem;
  text-decoration: none;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0,0,0,.7);
  backdrop-filter: blur(7px);
  border-right: solid var(--dark) 1px;
  box-shadow: 3px 0 10px 0 rgba(0,0,0,.2);
  padding: 2rem 0;

  a {
    margin: 0;
    padding: .5rem 2rem;
    width: 100%;
    color: rgb(29, 29, 29);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, black, rgba(255,255,255,0));
    z-index: 0;
  }

  .close-mobile {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 1;
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 4px;
      background: var(--primary);
      top: 15px;
    }

    &::before {
      transform: rotate(45deg);
      left: 0;
    }

    &::after {
      transform: rotate(-45deg);
      right: 0;
    }
  }
}

.burger-button {
  position: relative;
  background: none;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    position: absolute;
    width: 100%;
    height: 4px;
    background: var(--primary);
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 36px;
    height: 4px;
    background: var(--primary);
    transition: all ease .2s;
  }

  &::before {
    transform: translate(7px, 15px);
  }

  &::after {
    transform: translate(-7px, -15px);
  }

  &:hover,
  &:focus-visible {

    &::before {
      transform: translate(-7px, 15px);
    }

    &::after {
      transform: translate(7px, -15px);
    }
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all ease .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: all ease .3s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>