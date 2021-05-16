<template>
  <v-col>
    <v-row class="d-flex">
      <v-card v-for="product in productsJson"
              :key="product.id"
              class="mx-auto"
              width="272"
              elevation="1">
          <router-link to="#">
            <v-img :src="product.image"
                   height="200"></v-img>
            <h3 class="text-center black--text">{{product.title}}</h3>
            <h4 class="text-center black--text">{{product.price}} DH</h4>
          </router-link>
      </v-card>
    </v-row>
  </v-col>

</template>

<script>
export default {
  name: "ProductsByJSON",
  created() {
    this.getProductsJson();
  },
  data(){
    return{
      productsJson: [],
    }
  },
  methods:{
    async getProductsJson(){
      let response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json();
      this.productsJson = data;
    },
  }
}
</script>

<style scoped>

</style>