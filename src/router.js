import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import Meals from "@/views/Meals.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/meals',
        name: 'meals',
        component: Meals
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
