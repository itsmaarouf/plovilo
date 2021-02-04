<template>
  <v-row>
    <v-col
        v-for="n in 24"
        :key="n"
        cols="12"
        sm="4"
    >
      <v-card height="200"></v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "products"
}
</script>

<style scoped>

</style>