import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/product/ProductIndex.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import Cart from "../views/cart/CartIndex.vue";
import NotFound from "../views/errors/404View.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: '*',
    Component: NotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
