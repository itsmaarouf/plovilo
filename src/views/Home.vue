<template>

      <v-container fluid>

        <div class="home" v-if="num===10">
          <product-details></product-details>
        </div>
        <div v-else>
          <categories></categories>

          <products></products>
        </div>

      </v-container>

</template>

<script>
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import ProductDetails from "@/components/ProductDetails";

export default {
  name: "Home",
  data: () => ({
      num:1,
        }),
  components: {
    ProductDetails,
    Products, Categories
  },
};
</script>
