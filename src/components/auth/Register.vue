<template>
  <form @submit.prevent="onSubmit">
    <Input
      :value="valueData[0].value"
      :name="valueData[0].name"
      @input="onChange"
    />
    <Input
      :value="valueData[1].value"
      :name="valueData[1].name"
      @input="onChange"
    />
    <Input
      :value="valueData[2].value"
      :name="valueData[2].name"
      @input="onChange"
    />
    <button type="submit">전송</button>
  </form>
</template>

<script>
import Input from "@/components/common/Input";
export default {
  name: "Register",
  data() {
    return {
      valueData: [
        { name: "email", value: "" },
        { name: "name", value: "" },
        { name: "password", value: "" },
      ],
      formData: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onChange(event) {
      const { name, value } = event;

      this.valueData.map((item) => {
        if (item.name === name) return (item.value = value);
      });
    },
    onSubmit() {
      const [email, name, password] = this.valueData;

      this.formData.email = email.value;
      this.formData.name = name.value;
      this.formData.password = password.value;
    },
  },
  components: { Input },
};
</script>

<style></style>
