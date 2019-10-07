import Vue from 'vue';
import Router from 'vue-router';
const Table = () => import(/* webpackChunkName: "DashboardFormTable" */ './Pages/Table.vue');
const Edit = () => import(/* webpackChunkName: "DashboardFormEdit" */ './Pages/Edit.vue');
const Add = () => import(/* webpackChunkName: "DashboardFormAdd" */ './Pages/Add.vue');
const View = () => import(/* webpackChunkName: "DashboardFormView" */ './Pages/View.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            component: Table,
        },
        {
            path: '/dashboard/edit',
            component: Edit,
        },
        {
            path: '/dashboard/show/:id',
            component: View,
        },
        {
            path: '/dashboard/add',
            component: Add,
        },
    ],
});
