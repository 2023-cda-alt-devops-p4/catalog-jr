import {createRouter, createWebHistory, Router} from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        }
    ]
})