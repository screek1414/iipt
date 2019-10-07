/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import * as VeeValidate from 'vee-validate';
import Paginate from 'vuejs-paginate';


require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('courses-form', require('./views/Courses/CourseForm').default);
Vue.component('dashboard-form', require('./views/Dashboard/DashboardForm').default);
Vue.component('search-form', require('./components/SearchForm').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields',
    classes: true,
    validity: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    },
});

Vue.component('paginate', Paginate);

const app = new Vue({
    el: '#app',
    data() {
        return {

        }
    }
});
