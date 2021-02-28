<template lang="pug">
#app
  #nav
    router-view
      router-link(to="/") Home
      | |
      router-link(to="about") About
</template>

<style lang="scss">
@import '~@/styles/variables.scss';

html, body {
  height: 100%;
  margin: 0;
  background-color: $color-background;
  color: $color-font;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
