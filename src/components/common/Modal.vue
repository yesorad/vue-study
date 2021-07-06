<template>
  <section v-if="isShow" class="modal-block">
    <div class="block">
      <strong>{{ confirmText }}</strong>
      <button @click="onClick">확인</button>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Modal",
  computed: {
    ...mapState({
      confirmText: (state) => state.modal.confirmText,
      isShow: (state) => state.modal.isShow,
    }),
  },
  methods: {
    ...mapMutations(["isToggle"]),
    onClick() {
      this.isToggle();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-block {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    height: 150px;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  strong {
    display: block;
    text-align: center;
    font-size: 24px;
  }
}
</style>
