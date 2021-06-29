<template>
  <form>
    <Input :type="'email'" placeholder="이메일" />
    <Input :type="'password'" placeholder="비밀번호" />
    <button type="submit">전송</button>
  </form>
</template>

<script>
import Input from "@/components/common/Input";

export default {
  name: "Login",
  components: { Input },
};
</script>

<style></style>
