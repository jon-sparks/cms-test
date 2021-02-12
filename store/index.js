export const state = () => ({
  nav: [],
});

export const mutations = {
  SAVE_NAV (state, config) {
    state.nav = config;
  },
};

export const actions = {
  saveNav({
    commit,
  }, value) {
    commit(`SAVE_NAV`, value);
  },
};

