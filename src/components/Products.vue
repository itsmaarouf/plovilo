<template>
  <v-row>
    <v-col
        v-for="n in 24"
        :key="n"
        cols="12"
        lg="3"
        md="4"
        sm="6"
    >
      <v-card height="200"></v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "Products"
}
</script>

<style scoped>

</style>