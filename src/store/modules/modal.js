const state = () => ({
  isShow: false,
  confirmText: "",
});

const mutations = {
  isConfirmText: (state, text) => {
    state.confirmText = text;
  },
  isToggle: (state) => {
    state.isShow = !state.isShow;
  }
};

export default {
  state,
  mutations,
};
