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

          class="d-flex mx-auto mt-6">
        or register an account
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="#F2F2F2"
            height="80"
            class="ma-0"
        ><span class="ma-auto ml-0 d-flex float-left text-h3 font-weight-light ">Regiester</span>
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

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail*"
                required
            ></v-text-field>

            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  class="mx-0 px-3 d-flex float-right"
              >
                <v-text-field
                    v-model="fistName"
                    :rules="firstNameRules"
                    label="First name*"
                    required
                    class="d-flex float-left"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  class="mx-0 px-3 d-flex float-right"
              >
                <v-text-field
                    v-model="lastName"
                    :rules="lastNameRules"
                    label="Last name*"
                    required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
                v-model="Password"
                label="Password*"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'Password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
                v-model="repeatPassword"
                label="Repeat password*"
                required
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'Password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="show2 = !show2"
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                label="I accept the terms and conditions"
            ></v-checkbox>

            <v-btn
                :disabled="!valid"
                color="gray"
                block
                dark
                class="mr-4 mb-5"
                @click="validate"
            >
              Register an account
            </v-btn>

            <spam @click="dialog.value = false"
                  class="font-weight-bold pointer"
            >or login to your account
            </spam>

          </v-form>
        </v-card>
      </v-card>
    </template>
  </v-dialog>
</template>


<script>
export default {
  name: "Register",
  data() {
    return {
      show1: false,
      show2: true,
      Password: '',
      repeatPassword: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.pointer
  cursor pointer
</style>