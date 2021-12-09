import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import EditPost from "../views/EditPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      name: "Home Page",
    },
  },
  {
    path: "/add-post",
    name: "add-post",
    component: AddPost,
    meta: {
      name: "New Post Page",
    },
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
    meta: {
      name: "Post Page",
    },
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditPost,
    meta: {
      name: "Edit Post Page",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      name: "About Page",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
