export const state = () => ({
  nav: [],
});

export const mutations = {
  SAVE_NAV (state, config) {
    state.nav = config;
  },
};

export const actions = {
  nuxtServerInit ({ commit }, context) {
    return context.$content({ deep: true }).fetch()
    .then(res => {
      commit(`SAVE_NAV`, res)
    })
  },
  saveNav({ commit }, value) {
    commit(`SAVE_NAV`, value);
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

