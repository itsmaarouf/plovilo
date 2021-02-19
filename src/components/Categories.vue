<template>
  <v-row>
    <v-card
        v-for="category in getCategories"
        :key="category.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
    >
      <!--<v-img
          :src="category.category_Photos"

      ></v-img>-->
      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>

      <v-card-title >{{ category.category_Name }}</v-card-title>
    </v-card>
  </v-row>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Categories",

  computed: {
    ...mapGetters([
      'getCategories'
    ])
  }
}
</script >

<style scoped>

</style>