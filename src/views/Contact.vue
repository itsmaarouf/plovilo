<template>
  <v-container class="contact" fluid>
    <v-col>
      <h1 class="text-center my-5">Contact Us</h1>
      <p class="text-h5 text-center my-6">We’re here to help and answer any question you might have.<br/>
        We look forward to hearing from you 🙂</p>
    </v-col>

    <contact-us></contact-us>
  </v-container>
</template>

<script>
import ContactUs from "@/components/ContactUs";
export default {
  name: "Contact",
  components: {ContactUs}
}
</script>

<style lang="stylus" scoped>
.contact
  background-color #F5F5F4

</style>