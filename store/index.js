export const state = () => ({
  nav: [],
  settings: []
});

export const mutations = {
  SAVE_NAV (state, config) {
    state.nav = config;
  },
  SAVE_SETTINGS (state, config) {
    state.settings = config;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    const nav = await context.$content({ deep: true }).fetch()
    commit(`SAVE_NAV`, await nav)

    const settings = await context.$content("settings").fetch()
    commit(`SAVE_SETTINGS`, await settings)
  },
  saveNav({ commit }, value) {
    commit(`SAVE_NAV`, value);
  },
  saveSettings({ commit }, value) {
    commit(`SAVE_SETTINGS`, value);
  },
};

export const getters = {
  getSortedNav: state => {
    const mainNav = state.nav.filter(item => ![`/blog`, `/products`, `/home`].includes(item.dir))
    return mainNav.map(item => {
      if (item.path.includes(`/index`)) {
        return {
          ...item,
          navPath: item.path.substring(6)
        }
      } else if (item.path.includes(`/flexible`)) {
        return {
          ...item,
          navPath: `/${item.path.substring(10)}`
        }
      } else if (item.dir === `/${item.slug}`) {
        return {
          ...item,
          navPath: `/${item.slug}`
        }
      } else {
        return {
          ...item,
          navPath: item.path
        }
      }
    })
  }
};

