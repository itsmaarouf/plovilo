<template>
  <v-col>
    <h1 class="my-6 text-center">Products</h1>
    <v-row>
      <v-card
          v-for="product in getProducts"
          :key="product.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
          class="mx-auto my-12"
          max-width="300"
          elevation="0"
      >
        <v-col v-if="product.isInStock"
        >
          <router-link  :to="{ name: 'OneProduct', params: { id: product.id } }">
          <v-img class="mb-2"
                 height="250"
                 :src="product.product_Photos"
          ></v-img></router-link>


          <h4 class="font-weight-light">{{ product.product_Name }}</h4>
          <h3>{{ product.price }} {{ product.currency }}</h3>
          <v-btn block
                 class="mt-10"
                 color="success"
                 elevation="1"
                 text
                 @click="addToCart"
                 x-large>Add To Cart
          </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-col>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Products",

  computed: {
    ...mapGetters([
      'getProducts'
    ])
  },
}
</script>

<style scoped>

</style>