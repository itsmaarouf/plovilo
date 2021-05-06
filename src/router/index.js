import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/deals",
    name: "Deals",
    // route level code-splitting
    // this generates a separate chunk (Deals.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "Deals" */ "../views/Deals.vue")
  },
  {
    path: "/oneProduct",
    name: "OneProduct",
    // route level code-splitting
    // this generates a separate chunk (OneProduct.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "blogs" */ "../views/OneProduct.vue")
  },
  {
    path: "/store",
    name: "Store",
    // route level code-splitting
    // this generates a separate chunk (Store.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "store" */ "../views/Store.vue")
  },{
    path: '/oneProduct/:id',
    name: "OneProduct",
    // route level code-splitting
    // this generates a separate chunk (Store.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "store" */ "../views/OneProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
