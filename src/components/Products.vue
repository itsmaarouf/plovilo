<template>
  <v-col>
    <v-row>
      <v-card
          v-for="product in getProducts"
          :key="product.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
          class="mx-auto"
          width="200"
          elevation="0"
      >
        <v-col v-if="product.isInStock"
        >
          <router-link :to="{ name: 'OneProduct', params: { id: product.id } }">
            <v-img class="mb-2"
                   height="200"
                   :src="product.product_Photos"
            ></v-img>
          </router-link>

          <h3 class="text-center">{{ product.product_Name }}</h3>
          <h4 class="text-center">{{ product.price }} {{ product.currency }}</h4>
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
  methods: {
    addToCart() {
      alert('add to cart successful')
    }
  }
}
</script>

<style scoped>

</style>