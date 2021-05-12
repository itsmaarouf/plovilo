<template>
  <div>
    <v-row >
      <v-col v-for="category in getCategories"
             :key="category.id">
        <v-card to="#"  width="150">
          <v-img :src="category.category_Photos" :alt="category.category_Name" class="float-left"></v-img>
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