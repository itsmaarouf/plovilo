<template>

  <div class="mt-10">
    <div class="d-flex float-left tmp-Left">
      <v-card>
        <v-card-text>hallo</v-card-text>
        <img height="250" :src="getProduct(model).product_Photos">
      </v-card>
    </div>
    <div class="d-flex float-right tmp-Right">
      <v-card class="my-3">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mx-6 pa-5 text-center"
        >
          <v-col>
            <v-row class="py-5">
              <h1>{{getProduct(model).product_Name}}</h1>

            </v-row>
            <v-row class="py-5">
              <h2>{{getProduct(model).price}} {{getProduct(model).currency}}</h2>
            </v-row>
            <v-row class="py-5">
              <h3>Color Black</h3>
            </v-row>
            <v-row class="py-5">
              <h3>Size 32</h3>
            </v-row>
            <v-row class="py-5">
              <h3>Quantity (100 available)</h3>
            </v-row>
            <v-row class="py-5">
              <v-btn
                  color="gray"
                  block
                  class="mr-4 mb-5"
                  @click="validate"
              >
                add to cart
              </v-btn>
            </v-row>
          </v-col>

        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ProductDetails",
  data: () => ({
    model: 1
  }),
  computed: {
    ...mapGetters(['getProduct', 'getProducts'])
  }
}
</script>

<style lang="stylus" scoped>
.tmp-Left
  width 65%

.tmp-Right
  width 35%
</style>