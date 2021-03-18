<template>

    <v-container fluid>
      <div class="mt-6 deals text-center">
        <h1>This is an Deals page</h1>
      </div>
      <product-details></product-details>
    </v-container>

</template>

<script>

import ProductDetails from "@/components/ProductDetails";
export default {
name: "Deals",
  components: {
    ProductDetails
  },
}
</script>
<style scoped>

</style>