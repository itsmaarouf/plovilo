<template>
  <div>
    <v-row >
      <v-col v-for="category in getCategories"
             :key="category.id">
        <v-card to="#" v-if="category.isExist" width="200px" elevation="0" height="30px">
          <v-card-subtitle class="text-center v-alert__border--bottom my-0 text-body-2" >{{category.category_Name}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "catego",
  computed: {
    ...mapGetters(['getCategories'])
  }
}
</script>

<style scoped>

</style>