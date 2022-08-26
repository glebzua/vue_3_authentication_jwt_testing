import { createWebHistory, createRouter } from "vue-router";
import Home_page from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register_new from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile_user")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser")
const routes = [
    {
        path: "/",
        name: "home",
        component: Home_page,
    },
    {
        path: "/home",
        component: Home_page,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register_new,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path: "/mod",
        name: "moderator",
        // lazy-loaded
        component: BoardModerator,
    },
    {
        path: "/user",
        name: "BoardUser",
        // lazy-loaded
        component: BoardUser,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// If you want to check Authorized status everytime a navigating action
// is trigger, just add router.beforeEach() inside src/router.js like this:
// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });
export default router;