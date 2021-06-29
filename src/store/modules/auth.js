import * as authAPI from "@/api/auth";

const state = () => ({
  isAuthenticated: false,
  register: {
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  },
  login: {
    email: "",
    password: "",
  },
  accessToken: null,
  loading: false,
  error: false,
  success: false,
});

const getters = {};

const mutations = {
  changeField: (state, payload) => ({
    ...state,
    auth: (state[payload.form][payload.name] = payload.value),
  }),
};

const actions = {
  async registerAction({ state }, { email, name, password }) {
    state.loading = true;
    try {
      await authAPI.register({ email, name, password });
      state.success = true;
    } catch (e) {
      state.error = true;
      console.log(e);
    }
    state.loading = false;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
