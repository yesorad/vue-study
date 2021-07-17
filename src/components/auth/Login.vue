<template>
  <form @submit.prevent="onSubmit">
    <Input
      :type="'email'"
      :name="'email'"
      autocomplete="username"
      placeholder="이메일"
      @input="onChange"
    />
    <Input
      :type="'password'"
      :name="'password'"
      autocomplete="current-password"
      placeholder="비밀번호"
      @input="onChange"
    />
    <button type="submit">전송</button>

    <div v-if="isLoading">로딩중!</div>
    <div v-if="isError">에러!</div>
    <div v-if="isSuccess">로그인 성공!</div>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Input from "@/components/common/Input";

export default {
  name: "Login",
  computed: {
    ...mapState({
      auth: (state) => state.auth.login,
      isSuccess: (state) => state.auth.success,
      isLoading: (state) => state.auth.loading,
      isError: (state) => state.auth.error,
    }),
  },
  methods: {
    ...mapMutations(["changeField"]),
    ...mapActions(["login", "checkUser"]),
    onChange(event) {
      const { name, value } = event;
      this.changeField({
        form: "login",
        name,
        value,
      });
    },
    onSubmit() {
      const { email, password } = this.auth;
      if ([email, password].includes("")) {
        return alert("모든 항목을 입력하세요");
      }
      console.log(this.isError)
      this.login({ email, password })
      // console.log(this.login({ email, password }))
    },
  },
  components: { Input },
};
</script>

<style></style>
