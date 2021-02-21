import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getProducts: state => state.products,
    getCategories: state => state.categories,
  },
  state: {
    todos:[],
    products:[
      {
        id:1,
        id_category:1,
        product_Name:"product_Name 1",
        product_Photos: {
          p_img1: '<v-img src="https://picsum.photos/350/165?random"></v-img>'
        },
        price: 80,
        currency: "MAD",
        isInStock: true,
      },{
        id:2,
        id_category:1,
        product_Name:"product Name 2",
        product_Photos: {
          p_img1: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 100,
        currency: "MAD",
        isInStock: true,
      },
      {
        id:3,
        id_category:1,
        product_Name:"product Name 3",
        product_Photos: {
          p_img1: '<v-img src="https://picsum.photos/350/165?random"></v-img>'
        },
        price: 20,
        currency: "MAD",
        isInStock: true,
      },
      {
        id:4,
        id_category:2,
        product_Name:"product Name 4",
        product_Photos: {
          p_img1: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 50,
        currency: "MAD",
        isInStock: true,
      },
      {
        id:5,
        id_category:2,
        product_Name:"product Name 5",
        product_Photos: {
          p_img1: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 60,
        currency: "MAD",
        isInStock: true,
      },
    ],
    categories:[
      {
        id:1,
        category_Name:"category 1",
        category_Photos:'<v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>',
        //category_Photos:'<v-img src="../assets/category/Beauty&Grooming.jpg" ></v-img>',
        isExist: true,
      },{
        id:2,
        category_Name:"category 2",
        category_Photos:'<v-img src="../assets/category/Clothing&Accessories.jpg"></v-img>',
        isExist: true,
      },
      {
        id:3,
        category_Name:"category 3",
        category_Photos:'<v-img src="../assets/category/Handbags_Totes.jpg ></v-img>',
        isExist: true,
      },
      {
        id:4,
        category_Name:"category 4",
        category_Photos:'<v-img src="../assets/category/HomeDecor.png" ></v-img>',
        isExist: true,
      },
      {
        id:5,
        category_Name:"category 5",
        category_Photos:'<v-img src="../assets/category/Jewelry.jpg" ></v-img>',
        isExist: true,
      },{
        id:6,
        category_Name:"category 6",
        category_Photos:'<v-img src="../assets/category/Kitchen&Dining.jpg" ></v-img>',
        isExist: true,
      },{
        id:7,
        category_Name:"category 7",
        category_Photos:'<v-img src="../assets/category/Stationery&Party_Supplies.jpg" ></v-img>',
        isExist: true,
      },{
        id:8,
        category_Name:"category 8",
        category_Photos:'<v-img src="../assets/category/Toys&Games.jpg" ></v-img>',
        isExist: true,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
