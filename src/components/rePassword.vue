<template>
  <v-dialog
      transition="dialog-bottom-transition"
      persistent
      max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          text
          class="d-flex float-right">
        lost your password?
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="#F2F2F2"
            height="80"
            class="ma-0"
        ><span class="ma-auto ml-0 d-flex float-left text-h3 font-weight-light ">Rest Password</span>
          <v-btn
              class="ma-auto mr-0 mt-0 d-flex"
              icon
              @click="dialog.value = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="mx-6 pa-5 text-center"
          >
            <p>Don't worry! Just fill in your email and we'll send you a link to reset your password.</p>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail*"
                required
            ></v-text-field>


            <v-btn
                :disabled="!valid"
                color="gray"
                block
                class="mr-4 mb-5"
                @click="validate"
            >
              reset password
            </v-btn>

          </v-form>
        </v-card>
      </v-card>
    </template>
  </v-dialog>
</template>


<script>
export default {
  name: "rePassword",
  data() {
    return {
      email: '',
    }
  }
}
</script>

<style scoped>

</style>