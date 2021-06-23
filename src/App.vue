<template>
  <div>
    <p>{{ this.$route.name }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
