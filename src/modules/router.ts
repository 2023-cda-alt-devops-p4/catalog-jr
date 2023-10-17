import {createRouter, createWebHistory, type Router} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DiagramsView from "@/views/diagrams/DiagramsView.vue";
import StructView from "@/views/diagrams/StructView.vue";
import BehaviorView from "@/views/diagrams/BehaviorView.vue";

export const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: '/diagrams/',
            name: "diagrams",
            component: DiagramsView
        },
        {
            path: '/diagrams/struct',
            name: 'structural-diags',
            component: StructView
        },
        {
            path: '/diagrams/behavior',
            name: 'behavior-diags',
            component: BehaviorView
        }
    ]
})
