<template>
  <div v-if="isLoading" class="loading">
    <span>로딩중</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Loading",
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.loading,
    }),
  },
};
</script>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  span {
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
