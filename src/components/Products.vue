<template>
  <v-row>
    <v-card
        v-for="product in getProducts"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        class="mx-auto my-12"
        max-width="374"
    >
      <v-col v-if="product.isInStock">
        <v-img class="mb-2"
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <h4 class="d-flex float-left">{{ product.product_Name }}</h4>
        <h4 class="d-flex float-right">{{ product.price }} {{ product.currency }}</h4>
        <v-btn block
               class="mt-10"
               color="success"
               elevation="2"
               text
               x-large>Add To Cart
        </v-btn>
      </v-col>
    </v-card>

  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Products",

  computed: {
    ...mapGetters([
      'getProducts'
    ])
  }
}
</script>

<style scoped>

</style>