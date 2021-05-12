<template>
  <v-row>
    <v-col class="filterStyle">
      <h3>Filters</h3>
      <h4 class="my-3">Condition</h4>
      <v-checkbox
          v-model="checkbox1"
          label="New"
          hide-details
          class="black--text"
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox2"
          label="Used"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox3"
          label="Collectible"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox4"
          label="Renewe"
          hide-details
      ></v-checkbox>

      <h4 class="my-3">Avg. Customer Review</h4>
      <v-rating
          v-model="rating4"
          background-color="indigo lighten-3"
          color="indigo"
          value="4"
      ></v-rating>

      <h4 class="my-3">Price</h4>

      <v-radio-group v-model="radioGroup" hide-details>
        <v-radio
            label="Under 25 DH"
            value="1"
        ></v-radio>
        <v-radio
            label="25 DH to 50 DH"
            value="2"
        ></v-radio>
        <v-radio
            label="50 DH to 100 DH"
            value="3"
        ></v-radio>
        <v-radio
            label="100 DH to 200 DH"
            value="4"
        ></v-radio>
        <v-radio
            label="200 DH to ABOVE"
            value="5"
        ></v-radio>
      </v-radio-group>

      <v-form  v-model="MinMax">
        <v-container>
          <v-row>
            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="Min"
                  label="Min"
                  hide-details
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="6"
            >
              <v-text-field
                  v-model="Max"
                  label="Max"
                  hide-details
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-form>

      <h4 class="my-3">Size</h4>

      <v-checkbox
          v-model="checkboxSmall"
          label="small"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox34"
          label="34"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox36"
          label="36"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox38"
          label="38"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkbox40"
          label="40"
          hide-details
      ></v-checkbox>
      <v-checkbox
          v-model="checkboxLarge"
          label="large"
          hide-details
      ></v-checkbox>

      <h4 class="my-3">Color</h4>
      <v-btn
          color="primary"
          fab
          outlined
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#9E9E9E"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#000000"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#4CAF50"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#2196F3"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#9C27B0"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#FFEB3B"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#3F51B5"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#F44336"
          fab
          small
          class="ma-1"
      ></v-btn>
      <v-btn
          color="#FF9800"
          fab
          small
          class="ma-1"
      ></v-btn>

    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "FilterProducts",
  data(){
    return{
      rating4: 4,
      radioGroup: 1,
    }
  },
  methods:{
    MinMax(){
      alert('ich habe diese methode Nicht fertig gemacht')
}
  }
}
</script>

<style lang="stylus" scoped>
.filterStyle
  margin-top 15px
  margin-left 15px
</style>