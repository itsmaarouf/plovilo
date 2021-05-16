<template>

  <v-container fluid>

    <div class="Store text-center">
      <h3><h1 class="mt-10 font-weight-regular"> Millions of shoppers can’t wait to see what you have in store</h1></h3>
      <h2 class="font-weight-light">- Create your Store your own business -</h2>
    </div>

    <v-row class="ma-16">
      <v-card
          elevation="1"
          outlined
          shaped
          class="d-flex ma-auto"
          width="500"
          height="100"
      >
        <h3 class="d-flex ma-auto font-weight-bold">Start selling today</h3>
        <v-btn elevation="1"
               dark
               class="d-flex ma-auto"
               color="#009688">Open your Plovilo shop</v-btn>
      </v-card>
    </v-row>

    <v-row class="d-flex ">
      <v-col v-for="stores in getStoress"
             :key="stores.id"
             cols="12"
             lg="3"
             md="4"
             sm="6"
             class="ma-auto">
        <v-card elevation="0" class="mb-8">
          <v-img :src="stores.storeImg" width="100px"></v-img>
          <v-card-title>{{ stores.storeTitle }}</v-card-title>
          <p>{{ stores.storeBody }}</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col class="ma-auto my-8" >
        <v-card elevation="0" class="ma-auto" width="70%">
          <h1 class="text-center text-h2 my-3">Website solutions to fit your business.</h1>
          <v-divider class="mb-5"></v-divider>
          <h5 class="text-center text-h4 font-weight-light">Build your retail store online to start selling products fast. Create a
            restaurant website, take online orders and offer curbside pickup or
            delivery. Provide online appointment booking for services you may be
            delivering remotely. Even accept donations or membership fees online.</h5>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "Store",
  computed:{
    ...mapGetters(["getStoress"])
  }
}
</script>

<style scoped>

</style>