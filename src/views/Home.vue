<template>

      <v-container fluid>

        <div class="home" v-if="switcher">
          <product-details></product-details>
        </div>
        <div v-else>
          <categories></categories>

          <products :premium="premium" @add-to-cart="updateCart"></products>
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
      switcher:false,
        }),
  components: {
    ProductDetails,
    Products, Categories
  },
  methods: {
    updateCart(){
      this.elevation +=1
    }
  }
};
</script>
