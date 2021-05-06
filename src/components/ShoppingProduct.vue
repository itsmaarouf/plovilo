<template>
      <v-dialog
          transition="dialog-bottom-transition"
          persistent
          max-width="1000"
      >
        <template v-slot:activator="{ on, attrs }">

          <v-btn icon
                 v-bind="attrs"
                 v-on="on">
            <v-badge
                bordered
                overlap
                color="pink"
                :content="content">
              <v-icon>mdi-shopping</v-icon>
            </v-badge>
          </v-btn>

        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="#F2F2F2"
                class="text-h3 font-weight-light"
                height="80"
            >
              <span class="ma-auto ml-0 d-flex float-left text-h3 font-weight-light ">Shopping cart</span>
              <v-btn
                  class="ma-auto mr-0 mt-0 d-flex"
                  icon
                  @click="dialog.value = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn></v-toolbar>
            <v-card-text v-if="content > 0">
              <div class="pa-2 text-center">
                <table>
                  <tr>
                    <td rowspan="3"> Bild </td>
                    <td><h3> product name </h3></td>
                    <td><h3> price </h3></td>
                  </tr>
                  <tr>
                    <td> MP04-32-Black </td>
                    <td rowspan="2"> remove_shopping_cart </td>
                  </tr>
                  <tr>
                    <td>Edit</td>
                  </tr>

                </table>
              </div>
            </v-card-text>
            <v-card-text v-else>
              <div class="text-h4 pa-12 text-center">Don't hesitate and browse our catalog to find something beautiful for You!</div>
            </v-card-text>

          </v-card>
        </template>
      </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
export default {
name: "ShoppingProduct",
  data(){
  return{
    content: 0
  }
  },
  computed:{
  ...mapGetters(['getContent']),
  }
}
</script>

<style lang="stylus" scoped>
table,tr,td
  border: 1px solid black
table
  width 100%
</style>