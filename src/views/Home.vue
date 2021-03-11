<template>

      <v-container fluid>

        <div class="home">
          <h1 class="mt-6">Categories</h1>
        </div>

        <categories></categories>

        <h1 class="mt-6">Products</h1>
        <products></products>
      </v-container>

</template>

<script>
import Categories from "@/components/Categories";
import Products from "@/components/Products";

export default {
  name: "Home",
  components: {
    Products, Categories
  },
};
</script>
