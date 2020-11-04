import { createRouter, createWebHistory } from "vue-router";
import Posts from "./views/Posts.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import CreateNewPost from "./views/CreateNewPost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Posts },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/create-new-post", component: CreateNewPost }
  ]
});

export default router;
