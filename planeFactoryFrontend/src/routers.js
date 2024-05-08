import HomePage from './components/pages/HomePage.vue'
import CompaniesPage from './components/pages/CompaniesPage.vue'
import ProductsPage from './components/pages/ProductsPage.vue'
import EmployeesPage from './components/pages/EmployeesPage.vue'
import ProductsTablePage from './components/pages/products/ProductsTablePage.vue'
import PlanesTablePage from './components/pages/products/PlanesTablePage.vue'
import TransportPlanesTablePage from './components/pages/products/TransportPlanesTablePage.vue'
import MilitaryPlanesTablePage from './components/pages/products/MilitaryPlanesTablePage.vue'
import CivilPlanesTablePage from './components/pages/products/CivilPlanesTablePage.vue'
import HangGlidersTablePage from './components/pages/products/HangGlidersTablePage.vue'
import RocketsTablePage from './components/pages/products/RocketsTablePage.vue'
import MilitaryRocketsTablePage from './components/pages/products/MilitaryRocketsTablePage.vue'
import CivilRocketsTablePage from './components/pages/products/CivilRocketsTablePage.vue'
import AntiHailRocketsTablePage from './components/pages/products/AntiHailRocketsTablePage.vue'
import HelicoptersTablePage from './components/pages/products/HelicoptersTablePage.vue'
import GlidersTablePage from './components/pages/products/GlidersTablePage.vue'
import OtherProductsTablePage from './components/pages/products/OtherProductsTablePage.vue'
import ProductPage from './components/pages/ProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'CompaniesPage',
        component: CompaniesPage,
        path: '/companies'
    },
    {
        name: 'ProductsPage',
        component: ProductsPage,
        path: '/products'
    },
    {
        name: 'Employees',
        component: EmployeesPage,
        path: '/employees'
    },
    //Tables for products
    {
        name: 'ProductPage',
        component: ProductPage,
        path: '/products/:id'
    },
    {
        name: 'ProductsTable',
        component: ProductsTablePage,
        path: '/products/all'
    },
    {
        name: 'PlanesTable',
        component: PlanesTablePage,
        path: '/products/planes'
    },
    {
        name: 'TransportPlanesTable',
        component: TransportPlanesTablePage,
        path: '/products/transport-planes'
    },
    {
        name: 'MilitaryPlanesTable',
        component: MilitaryPlanesTablePage,
        path: '/products/military-planes'
    },
    {
        name: 'CivilPlanesTable',
        component: CivilPlanesTablePage,
        path: '/products/civil-planes'
    },
    {
        name: 'HangGlidersTable',
        component: HangGlidersTablePage,
        path: '/products/hang-gliders'
    },
    {
        name: 'RocketsTable',
        component: RocketsTablePage,
        path: '/products/rockets'
    },
    {
        name: 'MilitaryRocketsTable',
        component: MilitaryRocketsTablePage,
        path: '/products/military-rockets'
    },
    {
        name: 'CivilRocketsTable',
        component: CivilRocketsTablePage,
        path: '/products/civil-rockets'
    },
    {
        name: 'AntiHailRocketsTable',
        component: AntiHailRocketsTablePage,
        path: '/products/anti-hail-rockets'
    },
    {
        name: 'HelicoptersTable',
        component: HelicoptersTablePage,
        path: '/products/helicopters'
    },
    {
        name: 'GlidersTable',
        component: GlidersTablePage,
        path: '/products/gliders'
    },
    {
        name: 'OtherProductsTable',
        component: OtherProductsTablePage,
        path: '/products/other'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
