<template>
  <div id="wrap">
    <header class="header">해더 영역입니다.</header>
    <article class="container">
      <slot />
    </article>
    <footer class="footer">푸터 영역입니다.</footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss" scoped>
#wrap {
  max-width: 480px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  border-radius: 30px;
  border: 1px solid #ccc;
}
</style>
