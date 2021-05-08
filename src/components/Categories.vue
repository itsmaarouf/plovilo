<template>
  <v-col>
    <h1 class="my-6 text-center">Categories</h1>
    <v-sheet
        class="mx-auto pa-0"
        elevation="0"
        max-width="100%"
    >
      <h1></h1>
      <v-slide-group
          v-model="model"
          class="pa-0"
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
              category {{ getProduct(model).product_Name }}
            </h3>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </v-col>

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
      'getCategories', 'getProduct'
    ])
  }
}
</script>

<style scoped>

</style>