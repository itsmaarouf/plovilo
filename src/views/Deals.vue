<template>

    <v-container fluid>
      <deal-details></deal-details>
      <div class="mt-10">
        <products></products>
      </div>
    </v-container>

</template>

<script>

import DealDetails from "@/components/DealDetails";
import Products from "@/components/Products";
export default {
name: "Deals",
  components: {Products, DealDetails},
}
</script>
<style scoped>

</style>