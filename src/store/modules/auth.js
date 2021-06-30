import instance from "@/api/instance";
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
  setAuth(state, accessToken) {
    state.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
  },
};

const actions = {
  async register({ state }, { email, name, password }) {
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
  async login({ state, commit }, { email, password }) {
    state.loading = true;
    try {
      const res = await authAPI.login({ email, password });
      let accessToken = res.data.access_token || null;

      if (accessToken) {
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        commit("setAuth", accessToken);
      }

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
