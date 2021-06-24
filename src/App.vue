<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";

export default {
  name: "App",
  components: { Layout },
};
</script>

<style lang="scss">
@import "~/style/common/index";
</style>
