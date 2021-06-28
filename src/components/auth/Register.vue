<template>
  <form @submit.prevent="onSubmit">
    <Input
      :value="auth.email"
      name="email"
      type="text"
      @input="onChange"
      placeholder="아이디"
    />
    <Input
      :value="auth.name"
      name="name"
      type="text"
      @input="onChange"
      autocomplete="username"
      placeholder="이름"
    />
    <Input
      :value="auth.passworld"
      name="password"
      type="password"
      @input="onChange"
      autocomplete="new-password"
      placeholder="비밀번호"
    />
    <Input
      :value="auth.password_confirmation"
      name="password_confirmation"
      type="password"
      @input="onChange"
      autocomplete="new-password"
      placeholder="비밀번호 확인"
    />
    <button type="submit">전송</button>
    <div v-if="state.loading">로딩중!</div>
    <div v-if="state.error">에러!</div>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Input from "@/components/common/Input";
export default {
  name: "Register",
  computed: {
    ...mapState({
      auth: (state) => state.auth.register,
      state: (state) => state.auth,
    }),
  },
  methods: {
    ...mapMutations(["changeField"]),
    ...mapActions(["registerAction"]),
    onChange(event) {
      const { name, value } = event;
      this.changeField({
        form: "register",
        name,
        value,
      });
    },
    onSubmit() {
      const { email, name, password, password_confirmation } = this.auth;
      if ([email, name, password, password_confirmation].includes("")) {
        return alert("모든 항목을 입력하세요");
      }
      if (password !== password_confirmation) {
        return alert("비밀번호를 확인해주십시오");
      }
      this.registerAction({ email, name, password });
    },
  },
  components: { Input },
};
</script>

<style></style>
