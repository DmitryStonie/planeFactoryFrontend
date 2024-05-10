//otherPages
import HomePage from './components/pages/otherPages/HomePage.vue'
//tablePages
import AreasPage from './components/pages/tablePages/AreasPage.vue'
import BrigadesPage from './components/pages/tablePages/BrigadesPage.vue'
import EmployeesPage from './components/pages/tablePages/EmployeesPage.vue'
import EquipmentsPage from './components/pages/tablePages/EquipmentsPage.vue'
import LabsPage from './components/pages/tablePages/LabsPage.vue'
import ProductsPage from './components/pages/tablePages/ProductsPage.vue'
import TestsPage from './components/pages/tablePages/TestsPage.vue'
import WorkshopsPage from './components/pages/tablePages/WorkshopsPage.vue'
//cardPages
import AreaPage from './components/pages/cardPages/AreaPage.vue'
import BrigadePage from './components/pages/cardPages/BrigadePage.vue'
import CompanyPage from './components/pages/cardPages/CompanyPage.vue'
import EmployeePage from './components/pages/cardPages/EmployeePage.vue'
import LabPage from './components/pages/cardPages/LabPage.vue'
import EquipmentPage from './components/pages/cardPages/EquipmentPage.vue'
import ProductPage from './components/pages/cardPages/ProductPage.vue'
import TestPage from './components/pages/cardPages/TestPage.vue'
import WorkshopPage from './components/pages/cardPages/WorkshopPage.vue'
//test
import TestingPage from './components/pages/TestingPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //otherPages
    {
        name: 'TestingPage',
        component: TestingPage,
        path: '/'
    },
    {
        name: 'HomePage',
        component: HomePage,
        path: '/companies'
    },
    //tablePages
    {
        name: 'AreasPage',
        component: AreasPage,
        path: '/areas'
    },
    {
        name: 'BrigadesPage',
        component: BrigadesPage,
        path: '/brigades'
    },
    {
        name: 'EmployeesPage',
        component: EmployeesPage,
        path: '/employees'
    },
    {
        name: 'EquipmentsPage',
        component: EquipmentsPage,
        path: '/equipment'
    },
    {
        name: 'LabsPage',
        component: LabsPage,
        path: '/labs'
    },
    {
        name: 'ProductsPage',
        component: ProductsPage,
        path: '/products'
    },
    {
        name: 'TestsPage',
        component: TestsPage,
        path: '/tests'
    },
    {
        name: 'WorkshopsPage',
        component: WorkshopsPage,
        path: '/workshops'
    },
    //cardPages
    {
        name: 'AreaPage',
        component: AreaPage,
        path: '/areas/:id'
    },
    {
        name: 'BrigadePage',
        component: BrigadePage,
        path: '/brigades/:id'
    },
    {
        name: 'CompanyPage',
        component: CompanyPage,
        path: '/companies/:id'
    },
    {
        name: 'EmployeePage',
        component: EmployeePage,
        path: '/employees/:id'
    },
    {
        name: 'EquipmentPage',
        component: EquipmentPage,
        path: '/equipment/:id'
    },
    {
        name: 'LabPage',
        component: LabPage,
        path: '/labs/:id'
    },
    {
        name: 'ProductPage',
        component: ProductPage,
        path: '/products/:id'
    },
    {
        name: 'TestPage',
        component: TestPage,
        path: '/tests/:id'
    },
    {
        name: 'WorkshopPage',
        component: WorkshopPage,
        path: '/workshops/:id'
    },
    
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
