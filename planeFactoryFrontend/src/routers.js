//otherPages
import HomePage from './components/pages/tablePages/CompaniesPage.vue'
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
import JobPage from './components/pages/cardPages/JobPage.vue'

//cardPages
import NewAreaPage from './components/pages/newCardPages/NewAreaPage.vue'
import NewBrigadePage from './components/pages/newCardPages/NewBrigadePage.vue'
import NewCompanyPage from './components/pages/newCardPages/NewCompanyPage.vue'
import NewEmployeePage from './components/pages/newCardPages/NewEmployeePage.vue'
import NewLabPage from './components/pages/newCardPages/NewLabPage.vue'
import NewEquipmentPage from './components/pages/newCardPages/NewEquipmentPage.vue'
import NewProductPage from './components/pages/newCardPages/NewProductPage.vue'
import NewTestPage from './components/pages/newCardPages/NewTestPage.vue'
import NewWorkshopPage from './components/pages/newCardPages/NewWorkshopPage.vue'
import NewJobPage from './components/pages/newCardPages/NewJobPage.vue'
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
    {
        name: 'JobPage',
        component: JobPage,
        path: '/jobs/:id'
    },
    //newCardPages
    {
        name: 'NewAreaPage',
        component: NewAreaPage,
        path: '/areas/new'
    },
    {
        name: 'NewBrigadePage',
        component: NewBrigadePage,
        path: '/brigades/new'
    },
    {
        name: 'NewCompanyPage',
        component: NewCompanyPage,
        path: '/companies/new'
    },
    {
        name: 'NewEmployeePage',
        component: NewEmployeePage,
        path: '/employees/new'
    },
    {
        name: 'NewEquipmentPage',
        component: NewEquipmentPage,
        path: '/equipment/new'
    },
    {
        name: 'NewLabPage',
        component: NewLabPage,
        path: '/labs/new'
    },
    {
        name: 'NewProductPage',
        component: NewProductPage,
        path: '/products/new'
    },
    {
        name: 'NewTestPage',
        component: NewTestPage,
        path: '/tests/new'
    },
    {
        name: 'NewWorkshopPage',
        component: NewWorkshopPage,
        path: '/workshops/new'
    },
    {
        name: 'NewJobPage',
        component: NewJobPage,
        path: '/jobs/new'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
