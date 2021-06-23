import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const First = () => import("@/views/First");
const NotFound = { template: "<div>Not Found</div>" };

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/first", component: First, name: "First" },
    { path: "*", component: NotFound, name: "NotFound" },
  ],
});

export default router;
