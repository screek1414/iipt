import Vue from 'vue';
import Router from 'vue-router';
const Table = () => import(/* webpackChunkName: "CourseFormTable" */ './Pages/Table.vue');
const Edit = () => import(/* webpackChunkName: "CoursesFormEdit" */ './Pages/Edit.vue');
const Add = () => import(/* webpackChunkName: "CoursesFormAdd" */ './Pages/Add.vue');
const View = () => import(/* webpackChunkName: "CoursesFormView" */ './Pages/View.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/courses',
            component: Table,
        },
        {
            path: '/courses/edit/:id',
            component: Edit,
        },
        {
            path: '/courses/show/:id',
            component: View,
        },
        {
            path: '/courses/add',
            component: Add,
        },
    ],
});
