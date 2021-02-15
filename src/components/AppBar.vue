<template>
    <v-app-bar absolute>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn value="Home" to="/" class="nav-btn">
            <span>Home</span>
        </v-btn>
        <v-btn value="blogs" to="/blogs" class="nav-btn">
            <span>Blogs</span>
        </v-btn>
        <v-btn value="deals" to="/deals" class="nav-btn">
            <span>Deals</span>
        </v-btn>
        <v-btn value="about" to="/about" class="nav-btn">
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

<style scoped>
</style>