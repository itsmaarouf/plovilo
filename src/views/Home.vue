<template>

      <v-container fluid>

        <div>
          <categories></categories>
          <products></products>
        </div>

      </v-container>

</template>

<script>
import Categories from "@/components/Categories";
import Products from "@/components/Products";

export default {
  name: "Home",
  components: {
    Products, Categories
  },
  methods: {
    updateCart(){
      this.elevation +=1
    }
  }
};
</script>
