import { createRouter, createWebHistory } from "vue-router";
import Posts from "./views/Posts.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import CreateNewPost from "./views/CreateNewPost.vue";

function routeGuard(to, from, next) {
  const token = localStorage.getItem("token");
  if (token == null) {
    next("/login");
  } else {
    next();
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Posts,
      beforeEnter: routeGuard
    },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    {
      path: "/create-new-post",
      component: CreateNewPost,
      beforeEnter: routeGuard
    }
  ]
});

export default router;
