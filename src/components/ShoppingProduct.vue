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
                content="0">
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
            <v-card-text>
              <div class="text-h4 pa-12 text-center">Don't hesitate and browse our catalog to find something beautiful for You!</div>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
</template>

<script>
export default {
name: "ShoppingProduct"
}
</script>

<style scoped>

</style>