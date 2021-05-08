<template>
  <v-col
      order="12">
    <v-card class="pa-5">
      <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <strong> {{ review.Name }} </strong> gave this {{ review.rating }} stars <br>
            "{{ review.Review }}"
          </li>
        </ul>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "reviewList",
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>