<template>
  <div>
    <h1 class="text-center mt-12 font-weight-light">Happiness doesn't result from what we get, but from what we give.</h1>
    <h3 class="text-center mt-2 mb-8 font-weight-light">- choose your Gift now -</h3>
  <v-row>
    <v-col v-for="deal in getDeals"
           :key="deal.id"
           cols="12"
           lg="3"
           md="4"
           sm="6">
      <v-card>
        <v-card-title class="blue--text">{{deal.dealName}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "DealDetails",
  computed: {
    ...mapGetters(["getDeals"])
  },
}
</script>

<style scoped>

</style>