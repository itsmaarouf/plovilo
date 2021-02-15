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
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "Products",
  data (){
    return{
      product:{
        id:1,
        product_Name:"product_Name1",
        product_Photos: {
          p_img1: `<picture> <img src="../assets/logo.png" style="width:auto;"> </picture>`
        },
        price: 80,
        currency: "MAD",
        title:"title title title",
        isInStock: true,
      }
    }
  },
  computed:{
    Price_und_currency(){
      return `${this.product.price}``${this.product.currency}`
    }
  }
}
</script>

<style scoped>

</style>