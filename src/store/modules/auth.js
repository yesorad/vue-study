import instance from "@/api/instance";
import * as authAPI from "@/api/auth";

const state = () => ({
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
  user: null,
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
  setToken(state, accessToken) {
    state.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
  },
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  async register({ state }, { email, name, password }) {
    state.loading = true;
    try {
      await authAPI.register({ email, name, password });
      state.success = true;
    } catch (e) {
      state.error = e;
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
        commit("setToken", accessToken);
      }
    } catch (e) {
      state.error = e
    }
    state.loading = false;
  },

  async checkUser({ commit }) {
    try {
      const res = await authAPI.check();
      commit("setUser", res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
