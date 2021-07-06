<template>
  <div>
    <form @submit.prevent="onSubmit">
      <Input
        :value="auth.email"
        :name="'email'"
        :type="'email'"
        @input="onChange"
        placeholder="아이디"
      />
      <Input
        :value="auth.name"
        :name="'name'"
        :type="'text'"
        @input="onChange"
        autocomplete="username"
        placeholder="이름"
      />
      <Input
        :value="auth.passworld"
        :name="'password'"
        :type="'password'"
        @input="onChange"
        autocomplete="new-password"
        placeholder="비밀번호"
      />
      <Input
        :value="auth.password_confirmation"
        :name="'password_confirmation'"
        :type="'password'"
        @input="onChange"
        autocomplete="new-password"
        placeholder="비밀번호 확인"
      />
      <button type="submit">전송</button>
      <div v-if="isError">에러!</div>
      <div v-if="isSuccess">회원가입 성공!</div>
    </form>
    <Loading />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Input from "@/components/common/Input";
import Loading from "@/components/common/Loading.vue";

export default {
  name: "Register",
  computed: {
    ...mapState({
      auth: (state) => state.auth.register,
      isSuccess: (state) => state.auth.success,
      isError: (state) => state.auth.error,
    }),
  },
  methods: {
    ...mapMutations(["changeField"]),
    ...mapActions(["register"]),
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
      this.register({ email, name, password });
    },
  },
  components: { Input, Loading },
};
</script>

<style></style>
