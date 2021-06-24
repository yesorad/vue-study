<template>
  <input type="text" :value="value" :name="name" @input="onChange" />
</template>

<script>
export default {
  name: "Input",
  props: {
    value: String,
    name: String,
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
