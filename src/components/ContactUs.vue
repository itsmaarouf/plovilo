<template>
  <div>
    <!--  start of Form-->
    <v-row class="mb-5">
      <v-card width="40% "
              class="ml-10 mb-10 "
              cols="12"
              lg="6">
        <v-form v-model="ContactFrm" class="ma-auto ">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="6"
              >
                <v-text-field
                    v-model="FirstName"
                    label="FIRST NAME"
                    hide-details
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="6"
              >
                <v-text-field
                    v-model="LastName"
                    label="LAST NAME"
                    hide-details
                    required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-text-field
                  v-model="email"
                  label="E-Mail"
                  hide-details
                  class="pa-3"
                  required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                  v-model="Message"
                  label="E-MESSAGE"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="15"
                  class="pa-3"
                  required
              ></v-textarea>
            </v-row>
            <v-row class="mt-0 mb-2">
              <v-btn color="#009688" type="submit" class="ma-auto">
                Send message
              </v-btn>
            </v-row>

          </v-container>
        </v-form>
      </v-card>
      <!--  End of Form-->

      <!--  Start of Let’s get started-->
        <v-card class="ml-12 mb-9"
                cols="12"
                lg="6"
                width="50%" elevation="1">
          <v-card-title class="text-h2 font-weight-thin text-center">Let’s get started</v-card-title>
          <v-divider class="mb-5"></v-divider>
          <p class="pa-3 text-h4 font-weight-light">Jump on a call with one of our Plovilp experts (for free, obviously)
            and learn how you can use Plovilo for your business.</p>
        </v-card>
      <!--  End of Let’s get started--->

      <!--  Start of Contact Information-->
      <v-card class="ml-10 mb-5 pb-4"
              cols="12"
              lg="6" width="40%">
        <v-card-title>Contact Information</v-card-title>
        <v-divider class="mb-5"></v-divider>
        <v-row>
          <v-btn icon class="mx-3">
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
          <p class="mt-1">Rue Al Mansour Eddahbi</p>

        </v-row>
        <v-row>
          <v-btn icon class="mx-3">
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <p class="mt-1">+212 71 99 77 07</p>
        </v-row>
        <v-row>
          <v-btn icon class="mx-3">
            <v-icon>mdi-at</v-icon>
          </v-btn>
          <p class="mt-1">contact@plovilo.com</p>
        </v-row>
      </v-card>
      <!--  End of Contact Information--->

      <!--  Start of Live chat-->
      <v-card class="ma-auto"
              cols="12"
              lg="6"
              width="50%">
        <v-card-title class="text-h5">Live chat</v-card-title>
        <v-divider class="mb-5"></v-divider>
        <p class="text-h5 ml-3">Weekdays: 9 AM — 6 PM ET</p>
        <p class="text-h5 ml-3">Weekends: 9 AM — 5 PM ET</p>
        <div class="d-flex my-5">
          <v-btn color="#009688" outlined class="ma-auto">Chat now</v-btn>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style lang="stylus" scoped>
</style>