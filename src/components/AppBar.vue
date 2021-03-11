<template>
    <v-app-bar absolute>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn to="/" class="mx-4">
            <span>Home</span>
        </v-btn>
        <v-btn to="/blogs" class="mx-4">
          <span>Blogs</span>
        </v-btn>
        <v-btn  to="/deals" class="mx-4">
          <span>Deals</span>
        </v-btn>
      <v-autocomplete
          filled
          rounded
          solo
          hide-details
      ></v-autocomplete>

<!--
        <v-spacer></v-spacer>
-->
        <v-btn icon to="/store">
            <v-icon>mdi-store</v-icon>
        </v-btn>

        <v-btn icon to="/fav">
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon to="/shopping">
            <v-icon>mdi-shopping</v-icon>
        </v-btn>

<!--            <v-icon>mdi-account-circle </v-icon>-->
          <Account></Account>

    </v-app-bar>
</template>
<script>
    import Account from "@/components/Account";
    export default {
        name: "AppBar",
      components: {Account}
    }
</script>

<style lang="stylus" scoped>
/*.xx
  margin 0px 20px
  padding 20px*/
/*.homeSearch
  padding 25
  margin-top  25px
  width 50%*/

</style>