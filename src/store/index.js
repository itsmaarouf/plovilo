import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getProducts: state => state.products,
    getCategories: state => state.categories,
      getProduct: state => id => state.products.find(product => product.id===id)
  },
  state: {
    todos:[],
    products:[
      {
        id:1,
        id_category:1,
        product_Name:"product Name 1",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random"></v-img>'
        },
        price: 80,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },{
        id:2,
        id_category:1,
        product_Name:"product Name 2",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 100,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },
      {
        id:3,
        id_category:1,
        product_Name:"product Name 3",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random"></v-img>'
        },
        price: 20,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },
      {
        id:4,
        id_category:2,
        product_Name:"product Name 4",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 50,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },
      {
        id:5,
        id_category:2,
        product_Name:"product Name 5",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 60,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },
      {
        id:6,
        id_category:3,
        product_Name:"product Name 6",
        product_Photos: {
          0: '<v-img src="https://picsum.photos/350/165?random" ></v-img>'
        },
        price: 70,
        currency: "MAD",
        description: 'this is a just not a description for this product',
        isInStock: true,
      },
    ],
    categories:[
      {
        id:1,
        category_Name:"Beauty & Grooming",
        category_Photos:'/images/category/Beauty&Grooming.jpg',
        isExist: true,
      },{
        id:2,
        category_Name:"Clothing & Accessories",
        category_Photos:'/images/category/Clothing&Accessories.jpg ',
        isExist: true,
      },
      {
        id:3,
        category_Name:"Handbags Totes",
        category_Photos:'/images/category/Handbags_Totes.jpg',
        isExist: true,
      },
      {
        id:4,
        category_Name:"Home Decor",
        category_Photos:'/images/category/HomeDecor.png',
        isExist: true,
      },
      {
        id:5,
        category_Name:"Jewelry",
        category_Photos:'/images/category/Jewelry.jpg',
        isExist: true,
      },{
        id:6,
        category_Name:"Kitchen & Dining",
        category_Photos:'/images/category/Kitchen&Dining.jpg',
        isExist: true,
      },{
        id:7,
        category_Name:"Stationery & Party Supplies",
        category_Photos:'/images/category/Stationery&Party_Supplies.jpg',
        isExist: true,
      },{
        id:8,
        category_Name:"Toys & Games",
        category_Photos:"/images/category/Toys&Games.jpg",
        isExist: true,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
