<template>
  <div class="mt-10 no-gutters">
    <v-col cols="12"
           lg="6"
           sm="6"
           md="8"
           class="ma-auto float-left">
      <v-card width="550" class="mx-16 my-10 pa-5">
        <img height="500" width="500" alt="" :src="getProduct(productId).product_Photos">
      </v-card>
    </v-col>
    <v-col cols="6"
           md="4"
           class="ma-auto float-right">
      <v-card class="my-3 mr-16 my-10 pa-5 pr-16" width="400">
        <h1><strong class="font-weight-light">{{ getProduct(productId).product_Name }}</strong></h1>
        <v-form
            ref="form"
            lazy-validation
        >
          <v-col class="mx-6 pa-5">
            <v-row class="py-3">
              <h2>{{ getProduct(productId).price }} {{ getProduct(productId).currency }}</h2>
            </v-row>
            <v-row class="py-3">
              <h3>Color Black</h3>
            </v-row>
            <v-row class="py-3">
              <h3>Size 32 </h3>
            </v-row>
            <v-row class="py-3">
              <h3>Quantity (100 available) </h3>
            </v-row>

            <v-row class="py-3">
                <v-btn icon class="mr-6 d-inline" :color="!colorIf? 'red': 'gray'" @click="colorIf = !colorIf">
                  <v-icon >mdi-heart</v-icon>
                </v-btn>

                <v-btn
                    color="gray"
                    dark
                    class="mr-4 mb-5"
                    @click="buyNow"
                >
                  Buy
                </v-btn>

            </v-row>
          </v-col>
        </v-form>
      </v-card>
    </v-col>
    <div class="review ma-10">
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <v-divider
          vertical
      ></v-divider>
      <review-form @review-submitted="addReview"></review-form>
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/reviewList";

export default {
  name: "ProductDetails",
  components: {ReviewList, ReviewForm},
  props: ['productId'],
  data: () => ({
    reviews: [],
    colorIcon: 'red',
    colorIf: true,
  }),
  computed: {
    ...mapGetters(['getProduct', 'getProducts'])
  },
  methods: {
    addReview(review) {
      this.reviews.push(review)
    },
    buyNow() {
      alert('add to Shopping cart successful')
      console.log(this.productId)
    }
  }
}
</script>

<style lang="stylus" scoped>
.review
  clear both
</style>