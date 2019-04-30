import Vue from "vue";
import Router from "vue-router";
import BikeShopAllProducts from "./components/BikeShopAllProducts.vue"



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "BikeShopAllProducts",
      redirect: "BikeShopAllProducts",
      component: BikeShopAllProducts
    },
    {
    path: "/BikeshopAllProductsREST",
    name: "BikeShopAllProductsREST",
    component: BikeShopAllProductsREST
  }

  ]
});