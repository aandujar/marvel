<template>
  <div class="footer">
    <div>Datos proporcionados por Marvel.</div>
    <div>© 2014 Marvel</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 80px;
  width: 100vw;
  background-color: $red-background;
  padding-left: 30px;
  padding-right: 60px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 190;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  white-space: pre-wrap;
  flex-direction: column;
  color: $white;
}
</style>