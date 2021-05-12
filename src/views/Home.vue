<template>

      <v-container fluid>

        <div>
<!--          <categories></categories>-->
          <Carousel></Carousel>

          <v-row class="mt-1">
            <v-col class="mt-6"
                   cols="12"
                   md="3"
            >
              <v-card elevation="0"><filter-products></filter-products>
              </v-card>
            </v-col>

            <v-col class="mt-3"
                cols="12"
                   md="9">
              <v-card elevation="0"><Products></Products></v-card>
            </v-col>
          </v-row>

        </div>

        <pagination></pagination>

      </v-container>

</template>

<script>
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import FilterProducts from "@/components/FilterProducts";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: {
    Pagination,
    FilterProducts,
    Products,
    Carousel,
  }
};
</script>
