<template>
    <v-app-bar absolute>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn to="/" class="mx-4" elevation="0">
            <span>Home</span>
        </v-btn>
        <v-btn to="/blogs" class="mx-4" elevation="0">
          <span>Blogs</span>
        </v-btn>
        <v-btn  to="/deals" class="mx-4" elevation="0">
          <span>Deals</span>
        </v-btn>
      <v-autocomplete
          filled
          rounded
          solo
          hide-details
      ></v-autocomplete>

        <v-btn icon to="/store">
            <v-icon>mdi-store</v-icon>
        </v-btn>
      <wishlist></wishlist>
      <shopping-product></shopping-product>
      <Account></Account>

    </v-app-bar>
</template>
<script>
    import Account from "@/components/Account";
    import ShoppingProduct from "@/components/ShoppingProduct";
    import Wishlist from "@/components/Wishlist";
    export default {
        name: "AppBar",
      components: {Wishlist, ShoppingProduct, Account}
    }
</script>

<style lang="stylus" scoped>

</style>