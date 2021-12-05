<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>

export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  width: 100vw;
  background-color: $white;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__spinner {
    border: 4px solid $blue-primary;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: transparent;
    z-index: 600;
    position: fixed;

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>