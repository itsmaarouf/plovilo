<template>
  <v-row>
<!--    <v-col
        v-for="n in 24"
        :key="n"
        cols="12"
        lg="3"
        md="4"
        sm="6"
    >
      <v-card height="200">
        <div class="product_Picture">
          {{product.product_Photos.p_img1}}
        </div>
        <div class="product_Description">
          {{product.title}}
        </div>
        <div class="product_Description">
          {{product.price}} {{product.currency}}
        </div>
      </v-card>
    </v-col>-->
    <v-card
        v-for="product in getProducts"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        class="mx-auto my-12"
        max-width="374"
    >
      <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{product.product_Name}}</v-card-title>

      <!-- <v-card-text>
         <v-row
             align="center"
             class="mx-0"
         >
           <v-rating
               :value="4.5"
               color="amber"
               dense
               half-increments
               readonly
               size="14"
           ></v-rating>

           <div class="grey&#45;&#45;text ml-4">
             4.5 (413)
           </div>
         </v-row>

         <div class="my-4 subtitle-1">
           $ • Italian, Cafe
         </div>
      </v-card-text>-->
    </v-card>

  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
name: "Products",

  computed:{
    ...mapGetters([
        'getProducts'
    ])
  }
}
</script>

<style scoped>

</style>