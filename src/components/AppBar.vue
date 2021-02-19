<template>
    <v-app-bar absolute>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn to="/" class="xx">
            <span>Home</span>
        </v-btn>
        <v-btn to="/blogs" class="xx">
          <span>Blogs</span>
        </v-btn>
        <v-btn  to="/deals" class="xx">
          <span>Deals</span>
        </v-btn>
        <v-btn to="/about" class="xx">
          <span>About</span>
        </v-btn>


        <v-spacer></v-spacer>

        <v-btn icon to="/search">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon to="/store">
            <v-icon>mdi-store</v-icon>
        </v-btn>

        <v-btn icon to="/fav">
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon to="/shopping">
            <v-icon>mdi-shopping</v-icon>
        </v-btn>

        <v-btn icon to="/account">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
    export default {
        name: "AppBar"
    }
</script>

<style lang="stylus" scoped>
.xx
  margin 0px 20px


</style>