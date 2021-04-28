<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
      {{review.Name}} gave this {{review.rating}} stars <br>
        "{{review.Review}}"
      </li>
    </ul>
  </div>
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