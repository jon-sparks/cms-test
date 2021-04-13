export const state = () => ({
  nav: [],
  settings: [],
  basketItems: [],
  basketStatus: false
});

export const mutations = {
  SAVE_NAV (state, config) {
    state.nav = config;
  },
  SAVE_SETTINGS (state, config) {
    state.settings = config;
  },
  SET_BASKET_STATUS (state, config) {
    state.basketStatus = config;
  },
  ADD_TO_BASKET (state, value) {
    state.basketItems = [...state.basketItems, value];
  },
  REMOVE_FROM_BASKET (state, value) {
    state.basketItems.length > 1 ? state.basketItems = state.basketItems.splice(value, 1) : state.basketItems.shift();
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
  setBasketStatus({ commit }, value) {
    commit(`SET_BASKET_STATUS`, value);
  },
  addToBasket({ commit }, value) {
    commit(`ADD_TO_BASKET`, value);
  },
  removeFromBasket({ commit }, value) {
    commit(`REMOVE_FROM_BASKET`, value);
  },
};

export const getters = {
  getSortedNav: state => {
    const mainNav = state.nav.filter(item => ![`/blog`, `/products`, `/home`, `/settings`].includes(item.dir))
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

