import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [
    {
        path: '/register',
        name: 'register',
        component: () => import("../views/register/Register.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/login/Login.vue"),
    },

]
const createRouter = () =>
    new VueRouter({
        routers
    })

const router = createRouter()

export default router;