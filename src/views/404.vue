<template>
  <div class="not-found">
      <Icon icon="404" height="60%" width="60%" />
      La página buscada no existe
  </div>
</template>

<script>

export default {
  name: "404",
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  font-size: 1.4em;
  padding-left: 30px;
}
</style>