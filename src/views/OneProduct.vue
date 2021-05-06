<template>

    <v-container fluid >
      <product-details :productId="userId"></product-details>

    </v-container>

</template>

<script>

import ProductDetails from "@/components/ProductDetails";

export default {
  name: "OneProduct",
  data(){
    return{
      userId: this.$route.params.id,
      proId: this.userId,
    }
  },
  components: {
    ProductDetails,
  },
}
</script>
<style lang="stylus" scoped>

</style>