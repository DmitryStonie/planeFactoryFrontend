import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddCompanyPage from "./components/AddCompanyPage.vue";
import UpdateCompanyPage from "./components/UpdateCompanyPage.vue";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddCompany',
        component: AddCompanyPage,
        path: '/add-company'
    },
    {
        name: 'UpdateCompany',
        component: UpdateCompanyPage,
        path: '/update-company/:id'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
