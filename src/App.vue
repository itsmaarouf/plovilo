<template>
    <div id="app">
        <v-app-bar app>
            v-app-bar
            <AppBar></AppBar>
        </v-app-bar>
        <router-view />

        <v-footer app>
            v-footer
        </v-footer>
    </div>
</template>


<style lang="stylus">
    #app
        font-family Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        margin-top 60px
</style>
