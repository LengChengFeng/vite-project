import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: () => import("../views/login/index.vue")
    },
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})