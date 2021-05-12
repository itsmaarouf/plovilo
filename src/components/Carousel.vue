<template>
  <v-carousel
      cycle
      height="300"
      show-arrows-on-hover
      :show-arrows="false"
      hide-delimiters
  >
    <v-carousel-item
        v-for="carousel in getCarousels"
        :key="carousel.id"
        :src="carousel.carousel_Img"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "Carousel",
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters(['getCarousels'])
  }
}
</script>

<style scoped>

</style>