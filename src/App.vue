<template>
  <v-app>

    <AppBar></AppBar>

    <v-main class="mt-14">

      <router-view/>
    </v-main>

      <my-footer></my-footer>

  </v-app>
</template>
<style lang="stylus">
body
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

</style>
