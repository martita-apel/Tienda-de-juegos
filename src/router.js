import Vue from "vue";
import Router from "vue-router";
const Inicio = () => import("./components/Inicio");
const Buscar = () => import("./components/Buscar");
const Ventas = () => import("./components/Ventas");
const Total = () => import("./components/Total");
const Error = () => import("./components/Error");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/buscar",
      name: "buscar",
      component: Buscar,
    },
    {
      path: "/ventas",
      name: "ventas",
      component: Ventas,
    },
    {
      path: "/total",
      name: "total",
      component: Total,
    },
    { path: "*", component: Error },
  ],
});
