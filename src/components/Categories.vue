<template>
<!--  <v-row>
    <v-card
        v-for="category in getCategories"
        :key="category.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        class="ml-8 mb-10 mt-10"
        width="150px"
        height="135px"
    >
      <v-img
          :src="category.category_Photos"
      ></v-img>
      &lt;!&ndash;      <v-card-title class="justify-center">{{ category.category_Name }}</v-card-title>&ndash;&gt;
    </v-card>
  </v-row>-->

  <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="100%"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
    >
      <v-slide-item
          v-for="category in getCategories"
          :key="category.id"
          v-slot="{ active, toggle }"
      >
        <v-card
            class="ma-4"
            height="270"
            width="300"
            @click="toggle"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-scale-transition>
              <v-img
                  :src="category.category_Photos"
              ></v-img>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
          v-if="model != null"
          height="200"
          tile
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <h3 class="title">
            category {{getProduct(model).product_Name}}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Categories",
  data: () => ({
    model: null,
  }),

  computed: {
    ...mapGetters([
      'getCategories','getProduct'
    ])
  }
}
</script>

<style scoped>

</style>