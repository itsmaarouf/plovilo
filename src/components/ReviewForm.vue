<template>
  <form width="500" class="review-form" @submit.prevent="onsubmit()">
    <h3>Leave a review</h3>
    <v-text-field
        v-model="Name"
        label="Name"
        id="Name"
        required
    ></v-text-field>
    <v-text-field
        v-model="Review"
        label="Review"
        id="Review"
        required
    ></v-text-field>
    <div class="mb-5">
     <span class="grey--text text-lg-h6 caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
          class="d-inline"
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="28"
      ></v-rating>
    </div>

    <input class="button" type="submit" value="Submit">

  </form>
</template>

<script>
export default {
  name: "ReviewForm",
  data: () => ({
    rating: 5,
    Name: '',
    Review: '',
  }),
  methods:{
    onsubmit(){
      let productReview = {
        Name: this.Name,
        Review: this.Review,
        rating: this.rating,
      }
      this.$emit('review-submitted', productReview)

      this.Name = ''
      this.Review = ''
      this.rating = 5
    }
  }
}
</script>

<style scoped>

</style>