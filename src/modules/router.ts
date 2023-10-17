import {createRouter, createWebHistory, type Router} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DiagramView from "@/views/DiagramView.vue";

export const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/diagrams",
            name: "diagrams",
            component: DiagramView
        }
    ]
})
