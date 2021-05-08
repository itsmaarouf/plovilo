<template>
  <v-card v-for="deal in getDeals"
          :key="deal.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
          class="mx-auto my-12"
          width="300"
          >
    <v-card-title>{{deal.dealName}}</v-card-title>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Deal",
  computed:{
    ...mapGetters(['getDeals'])
  }
}
</script>

<style scoped>

</style>