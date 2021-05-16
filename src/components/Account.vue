<template>
  <v-dialog
      transition="dialog-bottom-transition"
      persistent
      max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">

      <v-btn icon
             v-bind="attrs"
             v-on="on">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="#F2F2F2"
            height="80"
            class="ma-0"
        ><span class="ma-auto ml-0 d-flex float-left text-h3 font-weight-light ">Log in</span>
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
              class="mx-6 pa-5"
          >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="email"
                required
            ></v-text-field>

            <v-text-field
                v-model="Password"
                label="password"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'Password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                label="Remember me?"
                class="d-flex float-left mt-0"
            ></v-checkbox>

            <re-password></re-password>

            <v-btn
                :disabled="!valid"
                color="gray"
                dark
                block
                class="mr-4"
                @click="validate"
            >
              Log in to your account
            </v-btn>

            <register></register>

          </v-form>
        </v-card>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import {mapGetters} from "vuex"
import Register from "@/components/Register";
import RePassword from "@/components/rePassword";

export default {
  name: "Account",
  components: {RePassword, Register},
  data() {
    return {
      dialog: false,
      valid: true,
      show1: false,
      show2: true,
      email: '',
      Password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
  computed:{
    ...mapGetters(["getAccounts"])
  },
  methods:{
    validate(){
      if (this.email === 'admin@plovilo.com' && this.Password === '@plovilo'){
        alert('welcome to Plovido')
      }else {
        alert('email or password incorrect')
      }

    }
  }
}
</script>

<style scoped>

</style>