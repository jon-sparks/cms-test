<template>
  <footer>
    <section class="footer-top">
      <div class="main-width footer-content">
        <div class="footer-content__block">
          <div>
            <h3>Explore</h3>
            <ul>
              <li
                v-for="navItem in navItems"
                :key="navItem.title"
              >
                <nuxt-link
                  :to="navItem.navPath"
                  :title="navItem.title"
                >
                  {{ navItem.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content__block center">
          <Logo
            fill="var(--dark)"
          />
        </div>
        <div class="footer-content__block">
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href="tel:01234567891"
                  title="phone"
                >
                  01234 567 891
                </a>
              </li>
              <li>
                <a
                  href="mailto:kt@cruxwheels.com"
                  title="email"
                >
                  kt@cruxwheels.com
                </a>
              </li>
            </ul>
            <ul class="footer-content__social">
              <li
                v-for="socialItem in socialItems"
                :key="socialItem.title"
              >
                <a
                  :href="socialItem.link"
                  :title="socialItem.title"
                  target="_blank"
                >
                  <component
                    :is="socialItem.title"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="main-width">
        <span>&copy; {{ new Date().getFullYear() }} </span>
        <span>{{ companyName }}. All rights reserved.</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  computed: {
    companyName () {
      return this.$store.state.settings[0].site_name
    },
    navItems () {
      return this.$store.getters.getSortedNav
    },
    socialItems () {
      return this.$store.state.settings[0].social.map(socialItem => socialItem.social_media)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-top {
  background: var(--primary);
  padding: 5rem 1rem;
}
.footer-bottom {
  background: var(--dark);
  color: var(--primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.footer-content {
  display: grid;
  // grid-template-columns: 2fr 1fr 2fr;
  grid-template-columns: 1fr;
  gap: 2rem;
  color: var(--dark);

  &__block {
    display: flex;
    gap: 6rem;

    &.center {
      justify-content: center;
      align-items: center;
      display: none;
    }

    & > div {
      max-width: 200px;

      ul {
        list-style: none;
        padding-left: 0;

        a {
          text-decoration: none;
          color: var(--dark);
        }
      }
    }
  }

  &__social {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
  }

  h3 {
    color: var(--dark);
    margin: 0 0 1rem 0;
  }
}

@media(min-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr 3fr;
  }
}

@media(min-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 2fr;
    gap: 0;

    &__block {

      &.center {
        display: flex;
      }

      &:last-of-type {
        justify-content: flex-end;
        text-align: right;
      }
    }

    &__social {
      justify-content: flex-end;
    }
  }
}
</style>
